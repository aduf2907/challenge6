import "../css/style.css";
import Hero from "./Hero";
import Navigation from "./Navigation";
import service from "../assets/img_service.png";
import circle from "../assets/circle.png";
import complete from "../assets/icon_complete.png";
import price from "../assets/icon_price.png";
import hrs from "../assets/icon_24hrs.png";
import profesi from "../assets/icon_professional.png";
import testi from "../assets/testi.png";
import Footer from "./Footer";

function Landingpage() {
  return (
    <div>
      <Navigation />
      <Hero />
      {/* Service */}
      <div className="container service">
        <div className="row">
          <div className="col-6">
            <img src={service} alt="" />
          </div>
          <div className="col-6" id="service">
            <h2 className="fw-bold mb-4">
              Best Car Rental for any kind of trip in (Lokasimu)!
            </h2>
            <p>
              Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
              lebih murah dibandingkan yang lain, kondisi mobil baru, serta
              kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
              wedding, meeting, dll.
            </p>
            <p>
              <img src={circle} alt="" className="me-3" />
              Sewa Mobil Dengan Supir di Bali 12 Jam
            </p>
            <p>
              <img src={circle} alt="" className="me-3" />
              Sewa Mobil Lepas Kunci di Bali 24 Jam
            </p>
            <p>
              <img src={circle} alt="" className="me-3" />
              Sewa Mobil Jangka Panjang Bulanan
            </p>
            <p>
              <img src={circle} alt="" className="me-3" />
              Gratis Antar - Jemput Mobil di Bandara
            </p>
            <p>
              <img src={circle} alt="" className="me-3" />
              Layanan Airport Transfer / Drop In Out
            </p>
          </div>
        </div>
      </div>
      {/* Service End */}

      {/* Why Us */}
      <div className="container">
        <h2 className="fw-bold mb-4 why-us-title">Why Us?</h2>
        <p>Mengapa harus pilih Binar Car Rental?</p>
        <div className="row">
          <div className="col-3">
            <div className="border border-2 rounded mt-4">
              <img src={complete} alt="" />
              <h3 className="fw-bold mt-3">Mobil Lengkap</h3>
              <p className="why-us-text mt-4">
                Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
                terawat
              </p>
            </div>
          </div>
          <div className="col-3">
            <div className="border border-2 rounded mt-4">
              <img src={price} alt="" />
              <h3 className="fw-bold mt-3">Harga Murah</h3>
              <p className="why-us-text mt-4">
                Harga murah dan bersaing, bisa bandingkan harga kami dengan
                rental mobil lain
              </p>
            </div>
          </div>
          <div className="col-3">
            <div className="border border-2 rounded mt-4">
              <img src={hrs} alt="" />
              <h3 className="fw-bold mt-3">Layanan 24 Jam</h3>
              <p className="why-us-text mt-4">
                Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
                tersedia di akhir minggu
              </p>
            </div>
          </div>
          <div className="col-3">
            <div className="border border-2 rounded mt-4">
              <img src={profesi} alt="" />
              <h3 className="fw-bold mt-3">Sopir Profesional</h3>
              <p className="why-us-text mt-4">
                Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
                tepat waktu
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Why Us End */}

      {/* Testimonial */}
      <div className="container mb-5">
        <div className="text-center">
          <h2 className="fw-bold testi-title mb-4">Testimonial</h2>
          <p className="testi-text mb-4">
            Berbagai review positif dari para pelanggan kami
          </p>
        </div>
        <div className="owl-carousel owl-theme">
          <div className="item">
            <img src={testi} alt="" />
          </div>
        </div>
      </div>
      {/* Testimonial End */}

      {/* Banner */}
      <div className="container mt-4">
        <div className="border rounded-3 mx-auto banner-custom text-center text-white">
          <h2 className="fw-bold mb-4">Sewa Mobil di (Lokasimu) Sekarang</h2>
          <p className="banner-text mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
          <button className="button-primary fw-bold rounded-1">
            Mulai Sewa Mobil
          </button>
        </div>
      </div>
      {/* Banner End */}

      {/* FAQ */}
      <div className="container">
        <div className="row">
          <div className="col-5">
            <h2 className="mb-4 faq-title fw-bold">
              Frequently Asked Question
            </h2>
            <p className="faq-p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
          <div className="col-7">
            <div className="accordion" id="accordionPanelsStayOpenExample">
              <div className="accordion-item mb-3">
                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOne"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseOne"
                  >
                    Apa saja syarat yang dibutuhkan?
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingOne"
                >
                  <div className="accordion-body">
                    <strong>This is the first item's accordion body.</strong> It
                    is shown by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>
              <div className="accordion-item mb-3">
                <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseTwo"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseTwo"
                  >
                    Berapa hari minimal sewa mobil lepas kunci?
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingTwo"
                >
                  <div className="accordion-body">
                    <strong>This is the second item's accordion body.</strong>{" "}
                    It is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>
              <div className="accordion-item mb-3">
                <h2
                  className="accordion-header"
                  id="panelsStayOpen-headingThree"
                >
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseThree"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseThree"
                  >
                    Berapa hari sebelumnya sabaiknya booking sewa mobil?
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingThree"
                >
                  <div className="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It
                    is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>
              <div className="accordion-item mb-3">
                <h2
                  className="accordion-header"
                  id="panelsStayOpen-headingThree"
                >
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseThree"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseThree"
                  >
                    Apakah Ada biaya antar-jemput?
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingThree"
                >
                  <div className="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It
                    is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>
              <div className="accordion-item mb-3">
                <h2
                  className="accordion-header"
                  id="panelsStayOpen-headingThree"
                >
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseThree"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseThree"
                  >
                    Bagaimana jika terjadi kecelakaan
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingThree"
                >
                  <div className="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It
                    is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* FAQ End*/}

      <Footer />
    </div>
  );
}

export default Landingpage;
