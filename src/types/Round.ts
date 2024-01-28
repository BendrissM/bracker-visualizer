import type { MatchGroup } from "./MatchGroup";
import type { PlayoffMatchGroup } from "./PlayoffMatchGroup";
import type { SheetType } from "./SheetType";

export interface Round<T extends SheetType = SheetType.SWISS> {
  matchGroups: T extends SheetType.SWISS ? MatchGroup[] : PlayoffMatchGroup[];
}
