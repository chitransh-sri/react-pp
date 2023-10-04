export const products = [
  {
    id: 1,
    name: "Air cooler",
    manufacturer: "Panasonic",
    price: 18000,
  },
  {
    id: 2,
    name: "Washing Machine",
    manufacturer: "LG",
    price: 12000,
  },
  {
    id: 3,
    name: "Fan",
    manufacturer: "Crompton",
    price: 2500,
  },
];

export type productsType = {
  id: number;
  name: string;
  manufacturer: string;
  price: number;
};
