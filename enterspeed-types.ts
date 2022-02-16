export interface IEnterspeedDictionaryItem {
  key: string;
  translation: string;
}

export interface IDictionary {
  [key: string]: IDictionaryLanguage;
}

export interface IDictionaryLanguage {
  [key: string]: string;
}

export interface IRoutesResponse {
  total: string;
  pageInfo: IEnterspeedPageInfo;
  results: IEnterspeedRoute[];
}
export interface IEnterspeedPageInfo {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: string;
  endCursor: string;
}
export interface IEnterspeedRoute {
  url: string;
  updatedAt: Date;
}
