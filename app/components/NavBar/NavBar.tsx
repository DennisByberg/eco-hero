import "./NavBar.scss";
import Image from "next/image";
import logo from "../../images/logo.svg";
import accountImg from "../../images/account-img.svg";

function NavBar() {
  return (
    <nav className="navbar">
      <Image className="navbar__logo" src={logo} alt="" />
      <div className="navbar__links">
        <a href="#">eco hero</a>
        <a href="#">donation</a>
        <a href="#">kampanj</a>
        <a href="#">sponsorer</a>
        <a href="#">om oss</a>
        <a href="#">kontakt</a>
      </div>

      <div className="navbar__account">
        <a>mitt konto</a>
        <img src={accountImg} alt="" />
      </div>
    </nav>
  );
}
export default NavBar;
