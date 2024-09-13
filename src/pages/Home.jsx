import CategoryLinks from "../../components/CategoryLinks";

export default function Home() {
  return (
    <>
      <section className="hero-area">
          <div className="home-product-card">
            <h6>New Product</h6>
            <h1>XX99 Mark II Headphones</h1>
            <p>
              Experience natural, lifelike audio and exceptional build quality made
              for the passionate music enthusiast.
            </p>
            <button className="orange">See product</button>
        </div>
      </section>
      <section>
        <CategoryLinks />
      </section>
    </>
  );
}
