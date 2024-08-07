export interface Product {
  amiiboSeries: string;
  character:    string;
  gameSeries:   string;
  head:         string;
  image:        string;
  name:         string;
  release?:     Release;
  tail:         string;
  type:         string;
  id?:          number;
  price:        number;
}

export interface Release {
  au: string | null;
  eu: string | null;
  jp: string | null;
  na: string | null;
}

export interface CartProduct{
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}