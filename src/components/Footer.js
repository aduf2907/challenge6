import "../css/style.css";
import list from "../assets/list-item.png";

function Footer() {
  return (
    <div className="container footer">
      <div className="row bawah">
        <div className="col-3">
          <p className="ft">
            Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000
          </p>
          <p className="ft">binarcarrental@gmail.com</p>
          <p className="ft">081-233-334-808</p>
        </div>
        <div className="col-3 ps-5">
          <p className="ft">Our services</p>
          <p className="ft">Why Us</p>
          <p className="ft">Testimonial</p>
          <p className="ft">FAQ</p>
        </div>
        <div className="col-3">
          <p className="ft">Connect with us</p>
          <img src={list} alt="" />
        </div>
        <div className="col-3">
          <p className="ft">Copyright Binar 2022</p>
          <div className="kotak"></div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
