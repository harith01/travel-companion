import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery, Rating } from "@mui/material";
import { LocationOnOutlined } from "@mui/icons-material";
import useStyles from "./styles";


const Map = ({ setCoordinates, setBounds, coordinates }) => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width:600px)');
    

    return ( 
        <div className={ classes.mapContainer} >
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyDwc9cOGtunYsFYIj7HDr_hPWKCyxp5LEo' }}
                defaultCenter={ coordinates }
                center= { coordinates }
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                onChange={(e) => {
                    setCoordinates({ lat: e.center.lat, lng: e.center.lng });
                    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
                }} 
            >

            </GoogleMapReact>

        </div>
     );
}
 
export default Map;