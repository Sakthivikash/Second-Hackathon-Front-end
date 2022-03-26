import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { API } from "./global";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import Button from '@mui/material/Button';

export function Theaters() {
  const { id } = useParams();
  console.log(id);
  const [movie, setmovie] = useState({});

  const getMovies = () => {
    fetch(`${API}/${id}`, { method: "GET" }) // promise
      .then((data) => data.json()) // Response object
      .then((mvs) => setmovie(mvs))
      .catch((err) => console.log(err));
  };

  useEffect(() => getMovies(), []);
  const history = useHistory();

  const showTiming= ["11:00 AM", "02:30 PM", "06:00 PM", "09:00 PM"];
  return (
    <div className="theater-box">
      <div className="header">
        <img className="head-img" src={movie.image}></img>
        <div className="content">
          <h1 style={{ margin: "20px" }}>{movie.name}</h1>
          <h3 style={{ margin: "20px" }}>{movie.stars}</h3>
          <h4 style={{ margin: "20px" }}>{movie.film}</h4>
        </div>
      </div>{" "}
      <hr />
      <div className="theaters-container">
        <ul className="theaters-list">
          <li className="theater">
            <span>
              <h2>AGS Cinemas: T.Nagar</h2>
              <span style={{margin: "5px"}}>
                   <PhoneAndroidIcon  style={{color: 'green'}} />
                <span style={{color: 'green'}}>M-Ticket</span>
              </span>
              <span style={{margin: "5px"}}>
                <FastfoodIcon style={{color: 'orange'}}/>
                <span style={{color: 'orange'}}>Food & Beverage</span>
              </span>
            </span>
            <span className="timing">
              {showTiming.map((time) => <ShowTiming time={time} id={id} />)}
              {/* <Button variant="outlined" onClick={()=> history.push(`/${id}/booking`)}>11:00 AM</Button>
              
              <Button variant="outlined" onClick={()=> history.push(`/${id}/booking`)}>06:00 PM</Button>
              <Button variant="outlined" onClick={()=> history.push(`/${id}/booking`)}>09:30 PM</Button> */}
            </span>
          </li>
          <li className="theater">
            <span>
              <h2>MAYAJAAL Multiplex: ECR, Chennai</h2>
              <span style={{margin: "5px"}}>
                   <PhoneAndroidIcon  style={{color: 'green'}} />
                <span style={{color: 'green'}}>M-Ticket</span>
              </span>
              <span style={{margin: "5px"}}>
                <FastfoodIcon style={{color: 'orange'}}/>
                <span style={{color: 'orange'}}>Food & Beverage</span>
              </span>
            </span>
            <span className="timing">
              {showTiming.map((time) => <ShowTiming time={time} id={id} />)}
              {/* <Button variant="outlined" onClick={()=> history.push(`/${id}/booking`)}>11:00 AM</Button>
              
              <Button variant="outlined" onClick={()=> history.push(`/${id}/booking`)}>06:00 PM</Button>
              <Button variant="outlined" onClick={()=> history.push(`/${id}/booking`)}>09:30 PM</Button> */}
            </span>
          </li>
          <li className="theater">
            <span>
              <h2>AGS Cinemas: Villivakkam</h2>
              <span style={{margin: "5px"}}>
                   <PhoneAndroidIcon  style={{color: 'green'}} />
                <span style={{color: 'green'}}>M-Ticket</span>
              </span>
              <span style={{margin: "5px"}}>
                <FastfoodIcon style={{color: 'orange'}}/>
                <span style={{color: 'orange'}}>Food & Beverage</span>
              </span>
            </span>
            <span className="timing">
              {showTiming.map((time) => <ShowTiming time={time} id={id} />)}
              {/* <Button variant="outlined" onClick={()=> history.push(`/${id}/booking`)}>11:00 AM</Button>
              
              <Button variant="outlined" onClick={()=> history.push(`/${id}/booking`)}>06:00 PM</Button>
              <Button variant="outlined" onClick={()=> history.push(`/${id}/booking`)}>09:30 PM</Button> */}
            </span>
          </li>
          <li className="theater">
            <span>
              <h2>AGS Cinemas OMR: Navlur</h2>
              <span style={{margin: "5px"}}>
                   <PhoneAndroidIcon  style={{color: 'green'}} />
                <span style={{color: 'green'}}>M-Ticket</span>
              </span>
              <span style={{margin: "5px"}}>
                <FastfoodIcon style={{color: 'orange'}}/>
                <span style={{color: 'orange'}}>Food & Beverage</span>
              </span>
            </span>
            <span className="timing">
              {showTiming.map((time) => <ShowTiming time={time} id={id} />)}
              {/* <Button variant="outlined" onClick={()=> history.push(`/${id}/booking`)}>11:00 AM</Button>
              
              <Button variant="outlined" onClick={()=> history.push(`/${id}/booking`)}>06:00 PM</Button>
              <Button variant="outlined" onClick={()=> history.push(`/${id}/booking`)}>09:30 PM</Button> */}
            </span>
          </li>
          <li className="theater">
            <span>
              <h2>Cinepolis: BSR Mail, OMR, Thoraipakkam</h2>
              <span style={{margin: "5px"}}>
                   <PhoneAndroidIcon  style={{color: 'green'}} />
                <span style={{color: 'green'}}>M-Ticket</span>
              </span>
              <span style={{margin: "5px"}}>
                <FastfoodIcon style={{color: 'orange'}}/>
                <span style={{color: 'orange'}}>Food & Beverage</span>
              </span>
            </span>
            <span className="timing">
              {showTiming.map((time) => <ShowTiming time={time} id={id} />)}
              {/* <Button variant="outlined" onClick={()=> history.push(`/${id}/booking`)}>11:00 AM</Button>
              
              <Button variant="outlined" onClick={()=> history.push(`/${id}/booking`)}>06:00 PM</Button>
              <Button variant="outlined" onClick={()=> history.push(`/${id}/booking`)}>09:30 PM</Button> */}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function ShowTiming({ time, id }){
  const history = useHistory();
  return (
    <Button variant="outlined" onClick={()=> history.push(`/${id}/booking/${time}`)}>{time}</Button>
  )
}