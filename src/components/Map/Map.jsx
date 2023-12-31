import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery, Rating } from "@mui/material";
import { LocationOnOutlined } from "@mui/icons-material";
import useStyles from "./styles";


const Map = () => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width:600px)');
    const coordinates = { lat: 0, lng: 0 };
    return ( 
        <div className={ classes.mapContainer} >
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyDwc9cOGtunYsFYIj7HDr_hPWKCyxp5LEo' }}
                defaultCenter={coordinates}
                center= { coordinates }
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
            >

            </GoogleMapReact>

        </div>
     );
}
 
export default Map;