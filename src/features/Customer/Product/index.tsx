import "./style.css";
import landingImage from "../../../assets/Clothes/kindpng_623334.png";
import { Button } from "antd";
import ClothesSlider from "../ClothesSlider";
import { useParams } from "react-router-dom";
import { getProductById, getProductByCategory } from "../../../api/Customer/product";
import { useEffect, useState } from "react";
import { IProduct } from "../../../types";

function ProductPage() {
   const {id} = useParams()
   const [productDetails , setProductDetails] = useState<IProduct>();
   const [simailarProducts , setSimilarProducts] = useState<IProduct[]>();

   useEffect(() =>{
      getProduct()
      ProductWithCategory()
   },[])
   useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

   const getProduct = async() =>{
    const res = await getProductById(id);
    setProductDetails(res?.data?.data)
   }

   const ProductWithCategory = async() =>{
    const res = await getProductByCategory(productDetails?.category_id?._id);
    setSimilarProducts(res?.data?.data)
   }
     const similarWithFilter = simailarProducts?.filter((product:IProduct) => product._id !== id)
  return (
    <div>
    <section className="Cover-section">
      <div className="White-wrapper"></div>
      <div className="bg-holder">
        <div className="product-image-holder relative">
          <img src={productDetails?.photo} alt="" className="product-image" />
         {productDetails?.discount && <div
            className="ribbon"
            style={{ boxShadow: "5px -5px 15px -9px rgba(0,0,0,0.45)" }}
          >
            <span className="ribbon-2"></span>
            <span className="discount-text "> {productDetails?.discount}%</span>
          </div>}
        </div>
        <div className="Content-holder w-1/2 text-primary flex justify-center items-start ">
          <div className="w-[70%]">
            <h1 className="text-4xl font-medium">{productDetails?.name} </h1>
            <h3 className="text-lg mt-2">
              {productDetails?.intro}
            </h3>
            <div className="flex items-center gap-1 mt-3">
              <i className="fa-regular fa-star text-[18px] text-secondary cursor-pointer"></i>
              <i className="fa-regular fa-star text-[18px] text-secondary cursor-pointer"></i>
              <i className="fa-regular fa-star text-[18px] text-secondary cursor-pointer"></i>
              <i className="fa-regular fa-star text-[18px] text-secondary cursor-pointer"></i>
              <i className="fa-regular fa-star text-[18px] text-secondary cursor-pointer"></i>
            </div>
            <div className="w-full h-[1px] bg-primary mt-2"></div>
            <h1 className="text-4xl font-medium mt-2">Rs.{productDetails?.price} </h1>
            <div>
              <h1 className="text-2xl  mt-10">Available Colors </h1>
              <div className="flex items-center justify-start gap-2 mt-5">
                <div className="w-7 h-7 rounded-full cursor-pointer bg-primary"></div>
                <div className="w-7 h-7 rounded-full cursor-pointer bg-dark"></div>
                <div className="w-7 h-7 rounded-full cursor-pointer bg-secondary"></div>
              </div>
            </div>
            {/* <h1 className="text-2xl  mt-10">Quantity </h1>
            <Row gutter={12}>
              <Col span={8}>
                <Slider
                  min={1}
                  max={5}
                  trackStyle={{ backgroundColor: "#6E52C7" }}
                  handleStyle={{ border: "#6E52C7", color: "#6E52C7" }}
                  onChange={onChange}
                  value={typeof inputValue === "number" ? inputValue : 0}
                />
              </Col>
              <Col span={4}>
                <input
                  min={1}
                  max={20}
                  style={{ margin: "0 16px" }}
                  value={inputValue}
                  className="shadow appearance-none border rounded border-[#bababa] w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </Col>
            </Row> */}
            <h1 className="text-2xl  mt-5 mb-3">Description </h1>
            <p className="">
              {productDetails?.description}
            </p>
            <div className="flex items-center gap-5">
            <Button type="primary" size="large" className="mt-12">
              + Add to Cart
            </Button>
            <Button  size="large" className="mt-12">
              Buy Now
            </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <ClothesSlider title={"Similar Products"} similarProducts={similarWithFilter}/>
    </div>
  );
}

export default ProductPage;
