export interface IData {
  id: string;
  Color: string;
  Title: string;
  ['Create Date']: string;
  ['Last Update']: string;
  ['Created By']: string;
}

export type THeaderData = keyof IData;
