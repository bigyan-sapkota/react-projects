import Images from "../assets";

const Nav = () => {
  return (
    <nav className="container">
      <div className="logo">
        <img src={Images.Logo} alt="logo" />
      </div>

      <ul>
        <li href="#">Menu</li>
        <li href="#">Location</li>
        <li href="#">About</li>
        <li href="#">Contact</li>
      </ul>

      <button>Login</button>
    </nav>
  );
};

export default Nav;
