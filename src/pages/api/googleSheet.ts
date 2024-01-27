import { getGoogleSheetData } from "@/services/googleSheetService";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const data = await getGoogleSheetData();
  res.status(200).json(data);
}
