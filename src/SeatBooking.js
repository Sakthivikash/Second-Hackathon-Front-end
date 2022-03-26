import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import LooksSixIcon from "@mui/icons-material/LooksOne";
import { useEffect, useState } from "react";
import { API } from "./global";

export function SeatBooking() {
  const { id, time } = useParams();
  console.log(id, time);
  const [disable, setDisable] =useState(false);
  const [movie, setmovie] = useState({});
  const getMovies = () => {
    fetch(`${API}/${id}`, { method: "GET" }) // promise
      .then((data) => data.json()) // Response object
      .then((mvs) => setmovie(mvs))
      .catch((err) => console.log(err));
  };

  useEffect(() => getMovies(), []);
  const history = useHistory();
  return (
    <div className="seatbooking-container">
      <div className="seatbooking-header">
        <div>
          <h1>{movie.name}</h1>
        </div>
        <div className="seatbooking-content">
          <span className="no-tickets">
            <span>No Of Tickets</span>
            <input type="number" name="no-of-tickets" className="seatno-inp" />
          </span>
          <span className="showtime">
            <span>Showtime</span>
            <span className="seat-time">{time}</span>
          </span>
        </div>
      </div>

        <div><p>3D Executive-Rs. 175</p></div>

        {/* seats to select */}
      <div className="seats-container">
        <div className="seats-box">
          <div className="seats-row">
            <a className="row-seats">A</a>
          </div>
          <div className="seats-row">
            <a className="row-seats">B</a>
          </div>
          <div className="seats-row">
            <a className="row-seats">C</a>
          </div>
          <div className="seats-row">
            <a className="row-seats">D</a>
          </div>
          <div className="seats-row">
            <a className="row-seats">F</a>
          </div>
          <div className="seats-row">
            <a className="row-seats">G</a>
          </div>
          <div className="seats-row">
            <a className="row-seats">H</a>
          </div>
          <div className="seats-row">
            <a className="row-seats">I</a>
          </div>
          <div className="seats-row">
            <a className="row-seats">J</a>
          </div>
          <div className="seats-row">
            <a className="row-seats">K</a>
          </div>
        </div>
        <div className="seats-box">
          <div className="seats-row">
            <a className="seatno" disabled={true} onClick={() => console.log(1)}>1</a>
            <a className="seatno" onClick={() => console.log(2)}>2</a>
            <a className="seatno" onClick={() => console.log(3)}>3</a>
            <a className="seatno" onClick={() => console.log(4)}>4</a>
            <a className="seatno" onClick={() => console.log(5)}>5</a>
          </div>
          <div className="seats-row">
            <a className="seatno" onClick={() => console.log(1)}>1</a>
            <a className="seatno" onClick={() => console.log(2)}>2</a>
            <a className="seatno" onClick={() => console.log(3)}>3</a>
            <a className="seatno" onClick={() => console.log(4)}>4</a>
            <a className="seatno" onClick={() => console.log(5)}>5</a>
          </div>
          <div className="seats-row">
            <a className="seatno" onClick={() => console.log(1)}>1</a>
            <a className="seatno" onClick={() => console.log(2)}>2</a>
            <a className="seatno" onClick={() => console.log(3)}>3</a>
            <a className="seatno" onClick={() => console.log(4)}>4</a>
            <a className="seatno" onClick={() => console.log(5)}>5</a>
          </div>
          <div className="seats-row">
            <a className="seatno" onClick={() => console.log(1)}>1</a>
            <a className="seatno" onClick={() => console.log(2)}>2</a>
            <a className="seatno" onClick={() => console.log(3)}>3</a>
            <a className="seatno" onClick={() => console.log(4)}>4</a>
            <a className="seatno" onClick={() => console.log(5)}>5</a>
          </div>
          <div className="seats-row">
            <a className="seatno" onClick={() => console.log(1)}>1</a>
            <a className="seatno" onClick={() => console.log(2)}>2</a>
            <a className="seatno" onClick={() => console.log(3)}>3</a>
            <a className="seatno" onClick={() => console.log(4)}>4</a>
            <a className="seatno" onClick={() => console.log(5)}>5</a>
          </div>
          <div className="seats-row">
            <a className="seatno" onClick={() => console.log(1)}>1</a>
            <a className="seatno" onClick={() => console.log(2)}>2</a>
            <a className="seatno" onClick={() => console.log(3)}>3</a>
            <a className="seatno" onClick={() => console.log(4)}>4</a>
            <a className="seatno" onClick={() => console.log(5)}>5</a>
          </div>
          <div className="seats-row">
            <a className="seatno" onClick={() => console.log(1)}>1</a>
            <a className="seatno" onClick={() => console.log(2)}>2</a>
            <a className="seatno" onClick={() => console.log(3)}>3</a>
            <a className="seatno" onClick={() => console.log(4)}>4</a>
            <a className="seatno" onClick={() => console.log(5)}>5</a>
          </div>
          <div className="seats-row">
            <a className="seatno" onClick={() => console.log(1)}>1</a>
            <a className="seatno" onClick={() => console.log(2)}>2</a>
            <a className="seatno" onClick={() => console.log(3)}>3</a>
            <a className="seatno" onClick={() => console.log(4)}>4</a>
            <a className="seatno" onClick={() => console.log(5)}>5</a>
          </div>
          <div className="seats-row">
            <a className="seatno" onClick={() => console.log(1)}>1</a>
            <a className="seatno" onClick={() => console.log(2)}>2</a>
            <a className="seatno" onClick={() => console.log(3)}>3</a>
            <a className="seatno" onClick={() => console.log(4)}>4</a>
            <a className="seatno" onClick={() => console.log(5)}>5</a>
          </div>
          <div className="seats-row">
            <a className="seatno" onClick={() => console.log(1)}>1</a>
            <a className="seatno" onClick={() => console.log(2)}>2</a>
            <a className="seatno" onClick={() => console.log(3)}>3</a>
            <a className="seatno" onClick={() => console.log(4)}>4</a>
            <a className="seatno" onClick={() => console.log(5)}>5</a>
          </div>
        </div>
        <div className="seats-box">
          <div className="seats-row">
            <a className="seatno" onClick={() => console.log(6)}>6</a>
            <a className="seatno" onClick={() => console.log(7)}>7</a>
            <a className="seatno" onClick={() => console.log(8)}>8</a>
            <a className="seatno" onClick={() => console.log(9)}>9</a>
            <a className="seatno" onClick={() => console.log(10)}>10</a>
          </div>
          <div className="seats-row">
            <a className="seatno" onClick={() => console.log(6)}>6</a>
            <a className="seatno" onClick={() => console.log(7)}>7</a>
            <a className="seatno" onClick={() => console.log(8)}>8</a>
            <a className="seatno" onClick={() => console.log(9)}>9</a>
            <a className="seatno" onClick={() => console.log(10)}>10</a>
          </div>
          <div className="seats-row">
            <a className="seatno" onClick={() => console.log(6)}>6</a>
            <a className="seatno" onClick={() => console.log(7)}>7</a>
            <a className="seatno" onClick={() => console.log(8)}>8</a>
            <a className="seatno" onClick={() => console.log(9)}>9</a>
            <a className="seatno" onClick={() => console.log(10)}>10</a>
          </div>
          <div className="seats-row">
            <a className="seatno" onClick={() => console.log(6)}>6</a>
            <a className="seatno" onClick={() => console.log(7)}>7</a>
            <a className="seatno" onClick={() => console.log(8)}>8</a>
            <a className="seatno" onClick={() => console.log(9)}>9</a>
            <a className="seatno" onClick={() => console.log(10)}>10</a>
          </div>
          <div className="seats-row">
            <a className="seatno" onClick={() => console.log(6)}>6</a>
            <a className="seatno" onClick={() => console.log(7)}>7</a>
            <a className="seatno" onClick={() => console.log(8)}>8</a>
            <a className="seatno" onClick={() => console.log(9)}>9</a>
            <a className="seatno" onClick={() => console.log(10)}>10</a>
          </div>
          <div className="seats-row">
            <a className="seatno" onClick={() => console.log(6)}>6</a>
            <a className="seatno" onClick={() => console.log(7)}>7</a>
            <a className="seatno" onClick={() => console.log(8)}>8</a>
            <a className="seatno" onClick={() => console.log(9)}>9</a>
            <a className="seatno" onClick={() => console.log(10)}>10</a>
          </div>
          <div className="seats-row">
            <a className="seatno" onClick={() => console.log(6)}>6</a>
            <a className="seatno" onClick={() => console.log(7)}>7</a>
            <a className="seatno" onClick={() => console.log(8)}>8</a>
            <a className="seatno" onClick={() => console.log(9)}>9</a>
            <a className="seatno" onClick={() => console.log(10)}>10</a>
          </div>
          <div className="seats-row">
            <a className="seatno" onClick={() => console.log(6)}>6</a>
            <a className="seatno" onClick={() => console.log(7)}>7</a>
            <a className="seatno" onClick={() => console.log(8)}>8</a>
            <a className="seatno" onClick={() => console.log(9)}>9</a>
            <a className="seatno" onClick={() => console.log(10)}>10</a>
          </div>
          <div className="seats-row">
            <a className="seatno" onClick={() => console.log(6)}>6</a>
            <a className="seatno" onClick={() => console.log(7)}>7</a>
            <a className="seatno" onClick={() => console.log(8)}>8</a>
            <a className="seatno" onClick={() => console.log(9)}>9</a>
            <a className="seatno" onClick={() => console.log(10)}>10</a>
          </div>
          <div className="seats-row">
            <a className="seatno" onClick={() => console.log(6)}>6</a>
            <a className="seatno" onClick={() => console.log(7)}>7</a>
            <a className="seatno" onClick={() => console.log(8)}>8</a>
            <a className="seatno" onClick={() => console.log(9)}>9</a>
            <a className="seatno" onClick={() => console.log(10)}>10</a>
          </div>
        </div>
      </div>
    </div>
  );
}
