import type { Round } from "@/types/Round";
import { SheetType } from "@/types/SheetType";
import { handleBracketApiResponse, handleSwissApiResponse } from "@/utils";
import { google } from "googleapis";

interface Params {
  type: SheetType;
}

const rangeMap = {
  [SheetType.SWISS]: {
    range: "E23:X46",
    sheetName: "",
  },
  [SheetType.BRACKET]: {
    range: "E16:O33",
    sheetName: "Playoff Double Elimination!",
  },
};

const responseHandlerMap = {
  [SheetType.SWISS]: handleSwissApiResponse,
  [SheetType.BRACKET]: handleBracketApiResponse,
};

export const getGoogleSheetData = async (
  { type }: Params = { type: SheetType.SWISS },
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

    const rangeOptions = rangeMap[type];
    const responseHandler = responseHandlerMap[type];

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
