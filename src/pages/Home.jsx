import CategoryLinks from "../components/CategoryLinks";

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
      <section>
        <CategoryLinks />
      </section>
      <section className="orange-area">
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
    </>
  );
}
