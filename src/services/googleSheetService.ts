import { handleSpreadSheetApiResponse } from "@/utils";
import { google, type sheets_v4 } from "googleapis";

export const getGoogleSheetData = async (): Promise<
  sheets_v4.Schema$ValueRange["values"]
> => {
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

    console.log(
      process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      process.env.GOOGLE_SHEETS_PRIVATE_KEY,
      process.env.SPREADSHEET_ID,
    );

    const sheets = google.sheets({ version: "v4", auth: jwt });
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: "E23:X46",
    });

    return handleSpreadSheetApiResponse(response.data.values);
  } catch (err) {
    console.log(err);
  }

  return [];
};
