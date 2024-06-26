import { IUser, IUserSession } from "./User";

/** Типы данных для `/online` */
export interface IOnline {
  /** Общее число игроков в онлайне */
  total: number;
  /** Число онлайна по мини-играм */
  separated: {
    ann: number;
    bb: number;
    bp: number;
    bw: number;
    cp: number;
    duels: number;
    gg: number;
    hg: number;
    kpvp: number;
    lobby: number;
    mw: number;
    prison: number;
    "prison-lite": number;
    sw: number;
    swt: number;
    murder: number;
    bridge: number;
    jumpleague: number;
    turfwars: number;
    sheep: number;
    tntrun: number;
    tnttag: number;
    luckywars: number;
    zombieclaus: number;
    whitecold: number;
    hide: number;
    speedbuilders: number;
    teamfortress: number;
    fallguys: number;
    eggwars: number;
    skyblock: number;
    bwhype: number;
    battlebox: number;
    farm: number;
    deathrun: number;
    fireballfight: number;
    css: number;
    cor: number;
  };
}

/** Модель информации о модераторе в списке онлайн модераторов */
export interface IOnlineModer extends IUser {
  /** Объект текущей сессии пользователя */
  online: IUserSession;
}

/** Модель для `/online/staff` */
export type IOnlineStaff = IOnlineModer[];

/** Модель данных о стримах  */
export interface IStreamData {
  /** Название стрима */
  title: string;
  /** Ник ютубера, который добавил (ведёт) стрим */
  owner: string;
  /** Количество зрителей на стриме */
  viewers: number;
  /** Ссылка на стрим */
  url: string;
  /** Продолжительность стрима */
  duration: number;
  /** Платформа стримера */
  platform: "YouTube" | "Twitch" | "GoodGame" | any;
  /** Объект пользователя (стримера) */
  user: IUser;
}

/** Модель для `/online/streams` */
export type IOnlineStreams = IStreamData[];
