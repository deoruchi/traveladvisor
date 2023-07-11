import GoogleMapReact from "google-map-react";
// import { MdHotel } from "react-icons/md";
// import Markers from "./Markers";
import { FaMapMarkerAlt } from "react-icons/fa";
//import { CiForkAndKnife } from "react-icons/ci";

export default function Map(props) {
  return (
    <>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={props.coordinate}
        center={props.coordinate}
        zoom={15}
        margin={[50, 50, 50, 50]}
        onChange={(e) => {
          props.setCoordinate({ lat: e.center.lat, lon: e.center.lng });
          props.setBound({
            sw: e.marginBounds.sw,
            ne: e.marginBounds.ne,
          });
        }}
        onChildClick={(child) => {
          props.setchild(child);
        }}
      >
        {props.places?.map((place, i) => {
          return (
            <FaMapMarkerAlt
              lat={Number(place.latitude)}
              lng={Number(place.longitude)}
              key={i}
              style={{
                cursor: "pointer",
                position: "relative",
              }}
            />
          );
        })}
      </GoogleMapReact>
    </>
  );
}
