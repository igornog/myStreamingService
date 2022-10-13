interface GeneralInfoTypes {
  id: NumberLiteralType;
  name: string;
  number: number;
  genres: Array;
  url: string;
  summary: string;
  image: {
    medium: string;
    original: string;
  };
  premiered: string;
  rating: {
    average: string;
  };
  season: number;
}