import axios from "axios";
import React, { useState } from "react";

function Weather() {
  var d = "https://api.openweathermap.org/data/2.5/weather?";
  var key = "&appid=0ddfc471a0c63f2e9d5172df7c5ad701&units=metric";
  const [data, setData] = useState(false);
  const [city, setCity] = useState("");
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [temp, setTemp] = useState("");
  const [feels, setFeels] = useState("");
  const [pressure, setPressure] = useState("");
  const [humidity, setHumidity] = useState("");
  const [visibility, setVisibility] = useState("");
  const [rise, setRise] = useState("");
  const [set, setSet] = useState("");
  const [latlong, setLatlong] = useState({
    latitude: "",
    longitude: "",
  });
  const [wind, setWind] = useState({
    direction: "",
    speed: "",
  });

  const format = (data) => {
    var dt = new Date(data * 1000);
    var hr = dt.getHours();
    var m = "0" + dt.getMinutes();
    var time = hr + ":" + m.slice(-2);
    time = time
      .toString()
      .match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

    if (time.length > 1) {
      // If time format correct
      time = time.slice(1); // Remove full string match value
      time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    return time.join("");
  };

  const getWeather = () => {
    setData(false);
    var res = city.split(" ").join("+");
    var url = d + "q=" + res + key;
    axios
      .get(url)
      .then((res) => {
        const data = res.data;

        setName(data.name);
        setDesc(data.weather[0].main);
        setTemp(data.main.temp);
        setFeels(data.main.feels_like);
        setPressure(data.main.pressure);
        setHumidity(data.main.humidity);
        setWind(data.wind);
        setLatlong(data.coord);
        setVisibility((data.visibility * 0.001).toFixed(1));
        const rise = format(data.sys.sunrise);
        const set = format(data.sys.sunset);
        setRise(rise);
        setSet(set);
        setData(true);
      })
      .catch(() => {});
  };

  return (
    <div className="weatherbox">
      <div class="description">
        <div>Weather</div>
        <div>Forecast</div>
        <div class="form-weather">
          <input
            type="text"
            name="place"
            placeholder="City..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            class="form-control"
          />
          <i
            class="fad fa-satellite-dish btnw"
            onClick={() => getWeather()}
          ></i>
        </div>
        <p>(Get data for any popular city.)</p>
      </div>
      <div className="weatherinfo">
        {data ? (
          <>
            <div className="bodyhead">
              <div className="d-flex justify-content-center align-items-center">
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{ marginRight: "25px", width: "30%" }}
                >
                  <i class="fas fa-place-of-worship fa-lg"></i>
                </div>
                <div>
                  <h4>{name}</h4>
                  <p style={{ marginLeft: "5px", fontSize: "15px" }}>{desc}</p>
                </div>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{ marginRight: "25px", width: "30%" }}
                >
                  <i class="fas fa-thermometer-half fa-lg"></i>
                </div>
                <div>
                  <h4>{temp}&deg; C</h4>
                  <p style={{ marginLeft: "5px", fontSize: "15px" }}>
                    Feels like: {feels}&deg; C
                  </p>
                </div>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{ marginRight: "25px", width: "30%" }}
                >
                  <i class="far fa-location fa-lg"></i>
                </div>
                <div>
                  <p
                    style={{
                      marginLeft: "5px",
                      fontSize: "15px",
                    }}
                  >
                    Lat: {latlong.lat.toFixed(2)}&deg;
                  </p>
                  <p
                    style={{
                      marginLeft: "5px",
                      fontSize: "15px",
                    }}
                  >
                    Lon: {latlong.lon.toFixed(2)}&deg;
                  </p>
                </div>
              </div>
            </div>
            <div className="cards">
              <div class="cardw">
                <h5 className="header">
                  <i class="fad fa-sunrise mr-5 fa-lg"></i> Sun Rise
                </h5>
                <p>{rise} AM</p>
                <p className="small">
                  Sunrise is the moment when the upper rim of the Sun appears on
                  the horizon in the morning.
                </p>
              </div>
              <div class="cardw">
                <h5 className="header">
                  <i class="fad fa-sunset mr-5 fa-lg"></i> Sun Set
                </h5>
                <p>{set} PM</p>
                <p className="small">
                  Sunset is the daily retreat of the Sun below the horizon due
                  to Earth's rotation.{" "}
                </p>
              </div>
              <div class="cardw">
                <h5 className="headerw">
                  <i class="fad fa-wind-turbine mr-5 fa-lg"></i> Wind
                </h5>
                <p>
                  {wind.speed} KPH <br />
                  {wind.deg}&deg; <i class="fal fa-compass ml-5"></i>
                </p>
                <p className="small">From north: 0° | From east: 90°</p>
              </div>
              <div class="cardw">
                <h5 className="header">
                  <i class="fad fa-dewpoint mr-5 fa-lg"></i> Humidity
                </h5>
                <p>{humidity} %</p>
                <p className="small">
                  Humidity is the concentration of water vapor present in the
                  air, invisible to the human eye.
                </p>
              </div>
              <div class="cardw">
                <h5 className="header">
                  <i class="fad fa-gem mr-5 fa-lg"></i> Pressure
                </h5>
                <p>{pressure} hPa</p>
                <p className="small">
                  The pressure exerted by the earth's atmosphere at any given
                  point on earth.
                </p>
              </div>
              <div class="cardw">
                <h5 className="header">
                  <i class="fad fa-eye mr-5 fa-lg"></i> Visibility
                </h5>
                <p>{visibility} KM</p>
                <p className="small">
                  The visibility is the measure of distance at which an object
                  or light can be clearly discerned.
                </p>
              </div>
            </div>
          </>
        ) : (
          <div className="d-flex">
            <div className="row bodyhead">Search a city...</div>
            <div>
              <i class="fad fa-spinner fast-spin"></i>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Weather;
