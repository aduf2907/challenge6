import "../css/style.css";
import car from "../assets/MercedesCar.png";

function Hero() {
  return (
    <div>
      <div className="hero container">
        <div className="row h-100">
          <div className="col-md-6 my-auto">
            <h1 className="hero-title">
              Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
            </h1>
            <p className="hero-parg">
              Selamat datang di Binar Car Rental. Kami menyediakan mobil
              kualitas <br /> terbaik dengan harga terjangkau. Selalu siap
              melayani kebutuhanmu <br /> untuk sewa mobil selama 24 jam.
            </p>
            <a href="/cars">
              <button className="button-primary fw-bold rounded-1">
                Mulai Sewa Mobil
              </button>
            </a>
          </div>

          <div className="col-6 position-relative">
            <div className="background-mobil position-absolute bottom-0 end-0"></div>
            <img
              src={car}
              alt=""
              className="position-absolute bottom-0 end-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
