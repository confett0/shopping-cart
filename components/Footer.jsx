import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="footer-wrap">
        <img src="../src/assets/shared/desktop/logo.svg" />
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="">Headphones</NavLink>
          <NavLink to="">Speakers</NavLink>
          <NavLink to="">Earphones</NavLink>
        </nav>
        <p>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <div className="social-icons">
          <img src="../src/assets/shared/desktop/icon-facebook.svg" />
          <img src="../src/assets/shared/desktop/icon-twitter.svg" />
          <img src="../src/assets/shared/desktop/icon-instagram.svg" />
        </div>
        <p>Copyright 2021. All Rights Reserved</p>
      </div>
    </footer>
  );
}
