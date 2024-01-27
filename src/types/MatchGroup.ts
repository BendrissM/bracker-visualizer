import type { Match } from "./Match";

export interface MatchGroup {
    id: "0-0" | "1-0" | "0-1" | "2-0" | "1-1" | "0-2" | "2-1" | "1-2" | "2-2";
    matches: Match[];
}