export type IProduct = {
  _id: string;
  name: string;
  intro: string;
  description: string;
  photo: string;
  price: number;
  discount: string;
  category_id: {
    _id: string;
    title: string;
    description: string;
  };
};

export type ICard = {
  _id: string;
  name: string;
  intro: string;
  photo: string;
  price: number;
  discount: string;
};
