import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  Polyline,
} from "react-google-maps";

import './entry.css'

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyBinn5RcjH8JVr1HqX4AW-PQPi3cU-S_4E&callback=initMap",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div className="map" />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={6} defaultCenter={props.defaultCenter}>
    {props.isMarkerShown && (
      <div>
        <Marker position={props.point1} />
        <Marker position={props.point2} />
        <Polyline defaultPath={[props.point1, props.point2]} />
      </div>
    )}
  </GoogleMap>
));
const Entry = props => {
  const { reset, fields, data: { point1, point2 } } = props
  const center = point1 && point2
    ? { lat: (point1.lat + point2.lat) / 2, lng: (point1.lng + point2.lng) / 2 }
    : { lat: 7.524, lng: -74.895 }
  return (
    <div>
      <div className="fields-form" >
        {fields()}
        <div style={{ margin: 20 }}>
          <Button type="submit" variant="contained" size="small" color="primary">
            Buscar
        </Button>
          <Button variant="outlined" size="small" color="primary" onClick={reset}>
            Cancelar
        </Button>
        </div>
      </div>
      <MyMapComponent
        isMarkerShown={point1 && point2}
        defaultCenter={center}
        point1={point1}
        point2={point2}
      />
    </div>
  )
}

Entry.propTypes = {
  fields: PropTypes.func.isRequired,
  data: PropTypes.object
}

export default Entry

