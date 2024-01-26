import type { sheets_v4 } from "googleapis";

export const handleSpreadSheetApiResponse = (
  googleSheetRows?: sheets_v4.Schema$ValueRange["values"],
): sheets_v4.Schema$ValueRange["values"] => {
  return googleSheetRows;
};
