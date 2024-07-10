import "./footer.css";
const Footer = () => {
  return (
    <footer
      className="footer"
      style={{ position: "absolute", bottom: "0", left: "0", width: "100%" }}
    >
      <div className="footer-content">
        <p>&copy; 2024 My Website</p>
        <nav className="footer-nav">
          <ul>
            <li>
              <a href="#privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="#terms">Terms of Service</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
