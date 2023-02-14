import axios from "axios";

const URL = process.env.REACT_APP_API_URL || "http://localhost:5000/";

export const addProduct = async (data: any) => {
  return await axios.post(URL + "product/addproduct", data);
};

export const getAllProduct = async () => {
  return await axios.get(URL + "product/getAllProduct");
};

// category api

export const getAllCategory = async () => {
  return await axios.get(URL + "category/getAllCategory");
};
