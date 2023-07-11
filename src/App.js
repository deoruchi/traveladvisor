import CardContainer from "./Components/CardComponent/CardContainer";
import Map from "./Components/Map/Map";
import Navbar from "./Components/navbar/Navbar";
import "./App.css";
import { CardList } from "./Components/CardComponent/CardList";
import { useEffect, useState } from "react";
import { mapData } from "./Components/Api/ApiCalls";
function App() {
  const [tripdata, setTripdata] = useState(); //datas
  const [coordinate, setCoordinate] = useState({}); //coordinates of the places
  const [bound, setBound] = useState({});
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(false); //loading or not
  const [filter, setFilter] = useState("hotels"); //filter

  useEffect(() => {
    //seetting the current location of the user ;)

    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinate({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    //getting the data from the rapid api
    if (bound.sw && bound.ne) {
      setLoading(true);
      mapData(filter, bound.sw, bound.ne).then((data) => {
        setTripdata(data);
        setLoading(false);
      });
    }
  }, [filter, bound]); //adding dependecdies as the location changes

  return (
    <div className="App  ">
      <Navbar filter={setFilter} setcoordinate={setCoordinate} type={filter} />
      <hr></hr>
      <section className="container-fluid my-4 controlsize ">
        <div className="row  ">
          <div className="col-md-5 col-12 ">
            <CardList
              cardData={tripdata}
              childvalue={selected}
              load={loading}
            />
          </div>
          <div className="col-md-7 col-12 controlsize map ">
            <Map
              setCoordinate={setCoordinate}
              setBound={setBound}
              coordinate={coordinate}
              places={tripdata}
              setchild={setSelected}
              type={filter}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
