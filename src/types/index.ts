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

export type ICart = {
  id: string;
  name: string;
  price: number;
  photo: string;
  discount: string | null;
  quantity: number;
  size: string;
};

export type IUser ={
  firstName: String;
  lastName: String;
  userName: String;
  phone: String;
  email: String;
}

