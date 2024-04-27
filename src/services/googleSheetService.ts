import { Comps } from "@/types";
import type { Round } from "@/types/Round";
import { SheetType } from "@/types/SheetType";
import { handleBracketApiResponse, handleSwissApiResponse } from "@/utils";
import { handleDorbySwissApiResponse } from "@/utils/dorby/handleDorbySwissApiResponse";
import { google } from "googleapis";

interface Params {
  type: SheetType;
  comp: Comps;
}

const rangeMap = {
  [SheetType.SWISS]: {
    [Comps.MEATC]: {
      range: "E23:X46",
      sheetName: "",
    },
    [Comps.DORBY]: {
      range: "G3:AF60",
      sheetName: "Swiss Stage!",
    },
  },
  [SheetType.BRACKET]: {
    [Comps.MEATC]: {
      range: "E16:O33",
      sheetName: "Playoff Double Elimination!",
    },
    [Comps.DORBY]: {
      range: "E23:W46",
      sheetName: "Bracket Rounds",
    },
  },
};

const responseHandlerMap = {
  [SheetType.SWISS]: {
    [Comps.MEATC]: handleSwissApiResponse,
    [Comps.DORBY]: handleDorbySwissApiResponse,
  },
  [SheetType.BRACKET]: {
    [Comps.MEATC]: handleBracketApiResponse,
    [Comps.DORBY]: handleBracketApiResponse,
  },
};

export const getGoogleSheetData = async (
  { type, comp }: Params = { type: SheetType.SWISS, comp: Comps.MEATC },
): Promise<Round<SheetType.SWISS>[] | Round<SheetType.BRACKET>[]> => {
  try {
    const scopes = ["https://www.googleapis.com/auth/spreadsheets.readonly"];
    const jwt = new google.auth.JWT(
      process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      undefined,
      // we need to replace the escaped newline characters
      // https://stackoverflow.com/questions/50299329/node-js-firebase-service-account-private-key-wont-parse
      process.env.GOOGLE_SHEETS_PRIVATE_KEY!.replace(/\\n/g, "\n"),
      scopes,
    );

    const rangeOptions = rangeMap[type][comp];
    const responseHandler = responseHandlerMap[type][comp];

    const sheets = google.sheets({ version: "v4", auth: jwt });
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: `${rangeOptions.sheetName}${rangeOptions.range}`,
    });

    return responseHandler(response.data.values as string[][]);
  } catch (err) {
    console.log(err);
  }

  return [];
};
