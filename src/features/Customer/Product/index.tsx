import "./style.css";
import landingImage from "../../../assets/Clothes/kindpng_623334.png";
import { Button, Skeleton } from "antd";
import ClothesSlider from "../ClothesSlider";
import { useParams } from "react-router-dom";
import {
  getProductById,
  getProductByCategory,
} from "../../../api/Customer/product";
import { useEffect, useState } from "react";
import { IProduct } from "../../../types";

function ProductPage() {
  const { id } = useParams();
  const [loader, setLoader] = useState<boolean>(true);
  const [productDetails, setProductDetails] = useState<IProduct>();
  const [simailarProducts, setSimilarProducts] = useState<IProduct[]>();

  useEffect(() => {
    getProduct();
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, [id]);

  useEffect(() => {
    ProductWithCategory();
  }, [productDetails]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const getProduct = async () => {
    setLoader(true);
    const res = await getProductById(id);
    setProductDetails(res?.data?.data);
  };

  const ProductWithCategory = async () => {
    const res = await getProductByCategory(productDetails?.category_id?._id);
    setSimilarProducts(res?.data?.data);
  };
  const similarWithFilter = simailarProducts?.filter(
    (product: IProduct) => product._id !== id
  );

  const Loading = () => {
    return (
      <div className="flex justify-center items-center">
        <Skeleton.Image style={{ width: "500px", height: "500px" }} />
        <Skeleton
          active
          paragraph={{ rows: 15 }}
          className="px-10 py-28 w-1/2"
        />
      </div>
    );
  };

  const SliderLoading = () => {
    return (
      <div className="flex justify-center  items-center gap-10 mb-20 ">
        {["1", "2", "3", "4"].map((item) => {
          return (
            <div
              className="flex justify-center flex-col items-center mb-20 mx-5"
              key={item}
            >
              <Skeleton.Image
                active
                style={{ width: "250px", height: "250px" }}
              />
              <Skeleton
                active
                paragraph={{ rows: 5 }}
                style={{ width: "250px", height: "250px" }}
              />
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div>
      {loader ? (
        <Loading />
      ) : (
        <section className="Cover-section">
          <div className="White-wrapper"></div>
          <div className="bg-holder">
            <div className="product-image-holder relative cursor-pointer ">
              <img
                src={productDetails?.photo}
                alt=""
                className="product-image"
              />
              {productDetails?.discount && (
                <div
                  className="ribbon"
                  style={{ boxShadow: "5px -5px 15px -9px rgba(0,0,0,0.45)" }}
                >
                  <span className="ribbon-2"></span>
                  <span className="discount-text ">
                    {" "}
                    {productDetails?.discount}%
                  </span>
                </div>
              )}
            </div>

            <div className="Content-holder w-1/2  flex justify-center items-start ">
              <div className="flex flex-col"></div>
              <div className="w-[80%]">
                <h1 className="text-4xl font-medium">
                  {productDetails?.name}{" "}
                </h1>
                <h3 className="text-lg mt-2">{productDetails?.intro}</h3>
                <div className="flex items-center gap-1 mt-3">
                  <i className="fa-regular fa-star text-[18px]  cursor-pointer"></i>
                  <i className="fa-regular fa-star text-[18px]  cursor-pointer"></i>
                  <i className="fa-regular fa-star text-[18px]  cursor-pointer"></i>
                  <i className="fa-regular fa-star text-[18px]  cursor-pointer"></i>
                  <i className="fa-regular fa-star text-[18px]  cursor-pointer"></i>
                </div>
                <div className="w-full h-[1px] bg-[#000] mt-2"></div>
                <h1 className="text-4xl font-medium mt-2">
                  Rs.{productDetails?.price}{" "}
                </h1>
                <div>
                  <h1 className="text-2xl  mt-10">Available Colors </h1>
                  <div className="flex items-center justify-start gap-2 mt-5">
                    <div className="w-7 h-7 rounded-full cursor-pointer bg-primary"></div>
                    <div className="w-7 h-7 rounded-full cursor-pointer bg-dark"></div>
                    <div className="w-7 h-7 rounded-full cursor-pointer bg-secondary"></div>
                  </div>
                </div>
                <h1 className="text-2xl  mt-5 mb-3">Description </h1>
                <p className="">{productDetails?.description}</p>
                <div className="flex items-center gap-5">
                  <Button type="primary" size="large" className="mt-12">
                    + Add to Cart
                  </Button>
                  <Button size="large" className="mt-12">
                    Buy Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {loader ? (
        <SliderLoading />
      ) : (
        <ClothesSlider
          title={"Similar Products"}
          similarProducts={similarWithFilter}
        />
      )}
    </div>
  );
}

export default ProductPage;
