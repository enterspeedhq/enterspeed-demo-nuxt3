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
