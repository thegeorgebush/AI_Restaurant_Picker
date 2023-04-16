import { useMemo, useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { Card, CardContent, Typography, Grid, CardMedia, Skeleton, Button, ButtonGroup, TextField } from "@mui/material";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';

const App = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [photoURL, setPhotoURL] = useState('');
  const [distance, setDistance] = useState("600");
  const [userInput, setUserInput] = useState("sushi")
  const [textSearchRestaurants, setTextSearch] = useState([]);
  const { isLoaded } = useLoadScript({
  googleMapsApiKey: "AIzaSyBmgfx3EDMQVgTWKGcan92c1Urw8D1Wb4E",
  });

  useEffect(() => {
  /*nearbySearch*/ const URL = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=25.7219760708435,-80.44324854212381&radius=${distance}&type=restaurant&key=AIzaSyBmgfx3EDMQVgTWKGcan92c1Urw8D1Wb4E`;
  //const URL = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyBaIcwczDUfoS-EVggPiYAZKpQ1IrioB1M&location=-33.8670522,151.1957362&radius=5000&type=restaurant";
  /*textSearch*/ //const URL = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurant&location=25.7219760708435,-80.44324854212381&radius=${distance}&key=AIzaSyBaIcwczDUfoS-EVggPiYAZKpQ1IrioB1M`
  axios.get(URL)
    .then(response => {
      setRestaurants(response.data.results);
      console.log(response.data);
    }).catch(error => {
      console.log(error.message);
    });
    
  
/*
  const URL2 = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=${userInput}restaurant&location=25.7219760708435,-80.44324854212381&rankby=distance&key=AIzaSyBmgfx3EDMQVgTWKGcan92c1Urw8D1Wb4E`
  axios.get(URL2)
    .then(response => {
      setTextSearch(response.data.results);
      console.log("TEXT SEARCH RESPONSE:")
      console.log(response.data);
    }).catch(error => {
      console.log(error.message);
    });
    */
  }, [distance]);

  
/*
  useEffect(() => {
    const getPhotos = async (URL) => {
      try {
        const response = await axios.get(URL);
        setPhotoURL(response.config.url);
      } catch (error) {
        console.log(error.message);
      }
    };

    restaurants.forEach((restaurant) => {
      if (restaurant.photos) {
        const photoReference = restaurant.photos[0].photo_reference;
        const photoUrl = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoReference}&key=AIzaSyBaIcwczDUfoS-EVggPiYAZKpQ1IrioB1M`;
        getPhotos(photoUrl);
      }
    });
  }, [restaurants]);
  




  try {
    const response = await axios.get(
      "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json",
      {
        params: {
          location: "25.7219760708435,-80.44324854212381",
          radius: "500",
          type: "restaurant",
          key: "AIzaSyBaIcwczDUfoS-EVggPiYAZKpQ1IrioB1M",
        },
      }
    );

    console.log(JSON.stringify(response.data));
  } catch (error) {
    console.log(error);
  }
*/
const handleSubmit = (e) => {
  e.preventDefault();
  const URL = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=${userInput}_restaurant&location=25.7219760708435,-80.44324854212381&radius=${distance}&key=AIzaSyBmgfx3EDMQVgTWKGcan92c1Urw8D1Wb4E`
  axios.get(URL)
    .then(response => {
      setTextSearch(response.data.results);
      console.log("TEXT SEARCH RESPONSE:")
      console.log(response.data);
    }).catch(error => {
      console.log(error.message);
    });
}

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <div>
    <Grid container spacing={1}>
    {restaurants.map((restaurant, index) => (

      /*textSearchRestaurants.find(restaurantId => restaurantId.place_id === restaurant.place_id)*/ true ?(
      <Grid item xs={3} key={restaurant.place_id}>
        <Card>
          {photoURL ?
            <CardMedia
              component="img"
              height="194"
              //image={photoURL}
              alt={restaurant.name}
            />
            :
            <Skeleton variant="rect" width={210} height={118} />
          }
          <CardContent>
            <Typography variant="h5" component="h2">
              {restaurant.name}
            </Typography>
            <Typography color="textSecondary">
              Price Level: {restaurant.price_level}
            </Typography>
            <Typography variant="body2" component="p">
              Rating: {restaurant.rating}
            </Typography>
          </CardContent>
        </Card>
      </Grid>) : null
      ))}
      <Grid item>
        <DirectionsWalkIcon/>
        <ButtonGroup>
          <Button onClick={() => setDistance("600")}>5</Button>
          <Button onClick={() => setDistance("800")}>10</Button>
          <Button onClick={() => setDistance("1200")}>15</Button>
        </ButtonGroup></Grid>
        <Grid item>
          <DirectionsCarIcon/>
          <ButtonGroup>
          <Button onClick={() => setDistance("8000")}>10</Button>
          <Button onClick={() => setDistance("1200")}>15</Button>
          <Button onClick={() => setDistance("16000")}>20</Button>
        </ButtonGroup></Grid>
        <Grid item>
          <form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <TextField id="filled-basic" label="I'm feeling sushi" variant="filled"  value={userInput} onChange={(e) => {setUserInput(e.target.value);}}/>
            <Button variant="outlined" type="submit">
                Submit
            </Button>
          </form>
        </Grid>
    </Grid>
    <Map restaurants={textSearchRestaurants} />
    </div>
  );
};

export default App;

function Map ({ restaurants }) {
  /*
  var request = {
    location: map.getCenter(),
    radius: '500',
    query: 'Google Sydney'
  };
*/
  return  (
    <GoogleMap
      zoom={14.8}
      center={{ lat: 25.7219760708435, lng: -80.44324854212381 }}
      mapContainerClassName="map-container"
    >
      <MarkerF position={{ lat: 25.7219760708435, lng: -80.44324854212381 }} />
      {restaurants.map((restaurant) => (
        <MarkerF
          key={restaurant.place_id}
          position={{
            lat: restaurant.geometry.location.lat,
            lng: restaurant.geometry.location.lng,
          }}
        />
      ))}
    </GoogleMap>
  );
};
