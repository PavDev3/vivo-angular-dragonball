export interface CharacterResponse {
  items: Character[];
  meta: Meta;
  links: Links;
}

export interface Character {
  id: number;
  name: string;
  ki: string;
  maxKi: string;
  race: string;
  gender: Gender;
  description: string;
  image: string;
  affiliation: string;
  deletedAt: null;
}

export enum Gender {
  Female = 'Female',
  Male = 'Male',
}

export interface Links {
  first: string;
  previous: string;
  next: string;
  last: string;
}

export interface Meta {
  totalItems: number;
  itemCount: number;
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
}
