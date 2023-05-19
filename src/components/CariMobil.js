import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import image from "../images/car04.min.jpg";
import "../css/style.css";

function CariMobil() {
  const url =
    "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json";
  const [cars, setCars] = useState([]);

  const getDataCars = async () => {
    const response = await fetch(url);
    const dataCars = await response.json();
    setCars(dataCars);
  };

  useEffect(() => {
    getDataCars();
  }, []);

  // const [query, setQuery] = useState("");

  console.log(cars.filter((cars) => cars.capacity.includes));

  // const image = image.map((img) => {
  //   return img;
  // });

  return (
    <div className="cariMobil">
      <div className="row container-cm shadow mx-auto rounded-3">
        <div className="col-2 my-auto ms-3">
          <form action="#">
            <label className="jdl">Tipe Driver</label> <br />
            <select name="driver" id="tipeDriver">
              <option value="jdl">Pilih Tipe Driver</option>
              <option value="sopir">Dengan Sopir</option>
              <option value="tdkSopir">Tanpa Sopir(lepas kunci)</option>
            </select>
          </form>
        </div>
        <div className="col-2 my-auto ms-5">
          <form action="#">
            <label for="" className="jdl">
              Tanggal
            </label>{" "}
            <br />
            <div id="datepicker">
              <input type="date" id="tanggal" name="tanggal" />
            </div>
          </form>
        </div>
        <div className="col-2 my-auto">
          <form action="#">
            <label for="" className="jdl ms-4">
              Waktu Jemput/Ambil
            </label>{" "}
            <br />
            <select name="waktu" id="waktu" className="ms-5">
              <option value="">Pilih Waktu</option>
              <option value="">08.00 WIB</option>
              <option value="">09.00 WIB</option>
              <option value="">10.00 WIB</option>
              <option value="">11.00 WIB</option>
              <option value="">12.00 WIB</option>
            </select>
          </form>
        </div>
        <div className="col-3 my-auto">
          <form action="#">
            <label for="" className="jdl-penumpang">
              Jumlah Penumpang (optional)
            </label>
            <br />
            <input
              type="number"
              name="penumpang"
              id="penumpang"
              placeholder="Jumlah Penumpang"
              // onChange={(e) => setQuery(e.target.value)}
            />
          </form>
        </div>
        <div className="col-2 my-auto">
          <button className="button-primary-cm fw-bold rounded-1">
            Cari Mobil
          </button>
        </div>
      </div>

      <div className="container-car">
        <div className="row">
          {cars.map((car) => {
            return (
              <div className="col-4">
                <CardCars
                  key={car.id}
                  manufacture={car.manufacture}
                  capacity={car.capacity}
                  description={car.description}
                  image={image}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function CardCars(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.image} style={{ height: "auto" }} />
      <Card.Body>
        <Card.Title key={props.id}>{props.manufacture}</Card.Title>
        <Card.Text>
          {props.description}
          <p>Capacity: {props.capacity}</p>
        </Card.Text>
        <Button variant="primary">Sewa Mobil</Button>
      </Card.Body>
    </Card>
  );
}

export default CariMobil;
