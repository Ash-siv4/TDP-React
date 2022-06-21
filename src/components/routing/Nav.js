import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <br />
      <Link to="/About">About</Link>
      <br />
      <Link to="/Shop">Shop</Link>
    </>
  );
};

export default Nav;
