import { FaReact } from "react-icons/fa";
import { CiSearch, CiHeart } from "react-icons/ci";
import { SlBag } from "react-icons/sl";
import { IoMdContact } from "react-icons/io";
import "./index.css";

const Header = () => (
  <div className="bg_container">
    <div className="product_container">
      <FaReact className="logo_image" />
      <h1 className="heading">LOGO</h1>
      <div className="items_container">
        <CiSearch className="search" />
        <CiHeart className="search" />
        <SlBag className="search" />
        <IoMdContact className="search" />
        <select className="pro">
          <option selected>ENG</option>
          <option>TELUGU</option>
        </select>
      </div>
    </div>
    <div className="product_container">
      <p className="paragraph">SHOP</p>
      <p className="paragraph">SKILLS</p>
      <p className="paragraph">STORIES</p>
      <p className="paragraph">ABOUT</p>
      <p className="paragraph">CONTACT US</p>
    </div>
  </div>
);

export default Header;
