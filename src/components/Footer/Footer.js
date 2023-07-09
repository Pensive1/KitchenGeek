import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <main className="footer__wrapper">
          <section className="footer__main-links">
            <Link>Feedback</Link>
            <Link>Suggestions</Link>
          </section>
          <section className="footer__att">
            <p className="footer__footnote">Created by Richard Acquaye</p>
          </section>
        </main>
      </footer>
    </>
  );
};

export default Footer;
