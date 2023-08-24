import Images from "../assets/index";

const Hero = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>

        <div className="hero-btn">
          <button>Shop Now</button>
          <button className="secondary-btn">Category</button>
        </div>

        <div className="shopping">
          <p>Also Available On</p>
          <div className="brand-icons">
            <img src={Images.Amazon} alt="amazon_logo" />
            <img src={Images.Flipkart} alt="flipkart_logo" />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src={Images.Shoe} alt="Shoe" />
      </div>
    </main>
  );
};

export default Hero;
