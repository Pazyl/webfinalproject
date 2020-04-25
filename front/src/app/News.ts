import DateTimeFormat = Intl.DateTimeFormat;

export interface News {
  id: number;
  title: string;
  poster: string;
  content: string;
  publicationTime: DateTimeFormat;
  changeTime: DateTimeFormat;
}
