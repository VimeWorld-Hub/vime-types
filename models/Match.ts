// TODO: дополнить IMatchPlayer & IMatchTeam

export const SnowflakeEpoch: bigint = 1546300800000n;

export type MatchWinner = IMatchTeamWinner | IMatchMultipleTeamWinner | IMatchPlayerWinner | IMatchMultiplePlayerWinner
export type MatchPlayerRole = "murder" | "innocent" | "detective"

export interface IMatch {
  version: number;
  game: string;
  server: string;
  start: number;
  end: number;
  mapName?: string | null;
  mapId?: string | null;
  /** Является ли матч приватной игрой
   *
   * Если server начинается с `ARC` или `ENG`
   */
  owned: boolean | null;
  /** Победитель в игре */
  winner: MatchWinner | null;
  /** Список игроков в игре */
  players: IMatchPlayer[];
  /** Список команд в игре */
  teams: IMatchTeam[];
  /** Список событий в игре */
  events: any[];

  /** Тема постройки
   *
   * Если game - `BB`
   */
  theme: string | null;

  /** Тип набора в игре
   *
   * Если game - `DUELS`
   */
  kit: string | null;
  /** Является ли игра рейтинговой
   *
   * Если game - `DUELS`
   */
  ranked: string | null;

  levels: number;
  waves: number;
}

export interface IMatchTeam {
  id: string;
  members: number[];

  /** Сломана ли у команды кровать
   *
   * Если game - `BW`, `BWH`, `BWHYPE` */
  bedAlive: boolean | null;

  /** Забито очков
   *
   * Если game - `BRIDGE`
   */
  points: number | null;
}

export interface IMatchPlayer {
  /** ID игрока */
  id: number;

  /** Собрано золота за игру
   *
   * Если game - `BW`, `BWH`, `BWHYPE`
   */
  spentGold: number | null;
  /** Собрано бронзы за игру
   *
   * Если game - `BW`, `BWH`
   */
  spentBronze: number | null;
  /** Собрано железа за игру
   *
   * Если game - `BW`, `BWH`, `BWHYPE`
   */
  spentIron: number | null;
  /** Суммарное время жизни за игру */
  aliveTime: number | null;
  /** Количество убийств игрока */
  kills: number | null;
  /** Количество смертей игрока */
  deaths: number | null;
  /** Количество сломанных кроватей
   *
   * Если game - `BW`, `BWH`, `BWHYPE`
   */
  brokenBeds: number | null;
  /** Остался ли жив игрок в конце игры */
  dead: boolean | null;

  /** Роль игрока в игре
   *
   * Если game - `MURDER`
   */
  role: MatchPlayerRole | null;
  /** Собрано золота за игру */
  collectedGold: number | null;
  /** Аккуратность стрельбы из лука
   *
   * Если game - `LUCKYWARS`, `MURDER`, `BRIDGE`
   */
  shootingAccuracy: number | null;
  /** Было ли у игрока оружие
   *
   * Если game - `MURDER`
   */
  hasWeapon: boolean | null;
  /** Поставлено граффити
   *
   * Если game - `MURDER`
   */
  graffitiPainted: number | null;

  /** Количество побед на игре подряд
   *
   * Если game - `DUELS`
   */
  winStreak: number | null;

  /** Сломано лакиблоков
   *
   * Если game - `LUCKYWARS`
   */
  luckyBlocks: number | null;
  /** Суммарно нанесено урона за игру
   *
   * Если game - `LUCKYWARS`, `BRIDGE`
   */
  damage: number | null;

  /** Набрано уровней
   *
   * Если game - `BP`
   */
  levels: number | null;

  /** Забито очков
   *
   * Если game - `BRIDGE`
   */
  points: number | null;

  /** Нанесено урона по яйцу
   *
   * Если game - `EGGWARS`
   */
  eggDamage: number | null;

  /** Украдено овец
   *
   * Если game - `SHEEP`
   */
  tamedSheep: number | null;
}

export interface IMatchTeamWinner {
  team: string;
}

export interface IMatchMultipleTeamWinner {
  teams: string[];
}

export interface IMatchPlayerWinner {
  player: number;
}

export interface IMatchMultiplePlayerWinner {
  players: number[];
}

export interface IMatchListItem {
  id: string;
  game: string;
  map: IMatchMap | null;
  date: number;
  duration: number;
  players: number;
}

export interface IMatchMap {
  id: string;
  name: string;
  teams: number;
  playersInTeam: number;
}