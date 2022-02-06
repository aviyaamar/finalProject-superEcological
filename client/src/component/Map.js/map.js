import React, { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
// import { Room } from "@material-ui/icons";
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

const Mapo = () => {


mapboxgl.accessToken = 'pk.eyJ1IjoiYXZpeWFhbWFyIiwiYSI6ImNremI5d2pkYzA3cDkyd25yeTRmdDdjcGEifQ.9lQkBdqS86qdCQ9bVGp8uw';
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 37.7577,
    longitude: 35.4376,
    zoom: 5,
  });
  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
      >
        <Marker
          latitude={41.008469}
          longitude={28.980261}
          offsetLeft={-20}
          offsetTop={-10}
        >
          {/* <Room style={{fontSize: viewport.zoom * 7, color: "slateblue"}}/> */}
        </Marker>
      </ReactMapGL>
    </div>
  );
};

export default Mapo;