import { useState } from "react";
import Button from "./Button";
import Filter from "./Filter";

import "./Navbar.css";
import { Autocomplete } from "@react-google-maps/api";
export default function Navbar({ filter, setcoordinate, type }) {
  const [autoComplete, setAutoComplete] = useState();

  const onLoad = (auto) => {
    setAutoComplete(auto);
  };

  const onPlaceChanged = () => {
    const lat = autoComplete.getPlace().geometry.location.lat();
    const lng = autoComplete.getPlace().geometry.location.lng();
    setcoordinate({ lat, lng });
  };

  return (
    <section className="container-fluid">
      <nav class="navbar bg-white">
        <div class="container-fluid g-4">
          {type === "hotels" ? (
            <Button className="col-2 col-lg-2"></Button>
          ) : (
            ""
          )}

          <Autocomplete
            onLoad={onLoad}
            onPlaceChanged={onPlaceChanged}
            className="col-12 col-md-6"
          >
            <form role="search">
              <input
                class="form-control roundedcommon shadow"
                type="search"
                placeholder="Search"
                aria-label="Search"
              ></input>
            </form>
          </Autocomplete>
          <Filter className="col-2 col-lg-2" filter={filter} />
        </div>
      </nav>
    </section>
  );
}
