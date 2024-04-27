import { getGoogleSheetData } from "@/services/googleSheetService";
import type { Comps } from "@/types";
import type { SheetType } from "@/types/SheetType";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const sheetType = req.query.type as SheetType | undefined;
  const comp = req.query.comp as Comps | undefined;
  const params = sheetType ? { type: sheetType, comp: comp! } : undefined;
  const data = await getGoogleSheetData(params);
  res.status(200).json(data);
}
