
import "./style.css";
import landingImage from "../../assets/Clothes/Hoodie.png";
import Card from "../../constants/Card";


function ProductPage() {
  return (
    // <section className="Cover-section">
    //   <div className="White-wrapper"></div>
    //   <div className="bg-holder">
    //     <div className="product-image-holder">
    //       <img src={landingImage} alt="" className="product-image" />
    //     </div>
    //     <div className="Content-holder">
    //         <h1 className="product-title">Winter Hoodie</h1>
    //         <h1 className="product-price"> RS <span>7000</span></h1>
    //         <div className="colorbox-container">
    //           <div className="color-box" style={{ backgroundColor:"#B4B4B2" }}></div>
    //           <div className="color-box" style={{ backgroundColor:"#cf0a2b" }}></div>
    //           <div className="color-box" style={{ backgroundColor:"#5be827" }}></div>
    //         </div>
    //         <div className="product-discription"></div>
    //     </div>
    //   </div>
    // </section>
    <div className="mx-auto h-screen flex justify-center items center">
      <Card/>
    </div>
  );
}

export default ProductPage;
