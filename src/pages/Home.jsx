import CategoryLinks from "../components/CategoryLinks";
import BeforeFooterArea from "../components/BeforeFooterArea";

export default function Home() {
  return (
    <>
      <section className="hero-area">
        <div className="home-product-card">
          <p className="overline">New Product</p>
          <h1>XX99 Mark II Headphones</h1>
          <p>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <button className="orange">See product</button>
        </div>
      </section>
        <div className="content-wrap">
          <CategoryLinks />
                <section className="orange-area area">
                <img src="./src/assets/home/desktop/image-speaker-zx9.png" />
          <div className="home-product-card">
            <h1>ZX9 SPEAKER</h1>
            <p>
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <button className="black">See product</button>
          </div>
                </section>
                <section className="grey-area area">
          <div className="home-product-card">
            <h4>ZX7 SPEAKER</h4>
            <button className="clear">See product</button>
          </div>
                </section>
                <section className="black-area area">
          <img src="./src/assets/home/desktop/image-earphones-yx1.jpg" />
          <div className="card-wrap">
            <div className="home-product-card">
              <h4>YX1 EARPHONES</h4>
              <button className="clear">See product</button>
            </div>
          </div>
                </section>
                <BeforeFooterArea />
        </div>
    </>
  );
}
