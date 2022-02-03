import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="left">
        <a href="javascript:void(0);">Bit By Bit</a>
      </div>
      <div className="right">
        <ul>
          <li>
            <a href="javascript:void(0);">FAQ</a>
          </li>
          <li>
            <a href="javascript:void(0);">ABOUT</a>
          </li>
          <li>
            <a href="javascript:void(0);">EXPLORE</a>
          </li>
          <li>
            <a href="javascript:void(0);">BLOG</a>
          </li>
          <li>
            <a href="javascript:void(0);">MEMBERS</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
