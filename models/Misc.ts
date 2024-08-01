import { IUserStatsGroup } from "./Stats";
import { LeaderboardTypes, LeaderboardSorts } from "./Leaderboard";
import { IUser } from "./User";

export type TokenType =
  | "LEGACY"
  | "AUTH"
  | "DEV"

/** Информация о пользователе */
export interface IMiscToken {
  /** Токен пользователя */
  token: string;
  /** Является ли токен валидным */
  valid: boolean;
  /** Тип токена */
  type: TokenType;
  /** Пользователь
   *
   * Если тип токена DEV - `null` */
  owner: IUser | null;
}