import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="left">
        <a href="#">Bit By Bit</a>
      </div>
      <div className="right">
        <ul>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">ABOUT</a>
          </li>
          <li>
            <a href="#">EXPLORE</a>
          </li>
          <li>
            <a href="#">BLOG</a>
          </li>
          <li>
            <a href="#">MEMBERS</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
