import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function Infobox({ info }) {
  let hot_img = "https://cdn.wallpapersafari.com/20/82/5PjEgw.jpg";
  let cold_img =
    "https://media.istockphoto.com/id/1840143688/photo/snow-covered-mountain-forest.webp?b=1&s=170667a&w=0&k=20&c=Zf9KxZQBmUDL7jb5rSIQ4GyHn8TAWVb86n-wT9Q5UNE=";
  let rainy_img =
    "https://thumbs.dreamstime.com/b/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept-191493424.jpg";
  return (
    <div className="infobox">
      <br />
      <br />
      <Card sx={{ maxWidth: 345 }} className="card">
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image={
              info.humidity > 80
                ? rainy_img
                : info.temp > 40
                ? hot_img
                : cold_img
            }
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <div className="temp">Temperature : {info.temp} &deg;C</div>
              <div className="temp">Humidity : {info.humidity}%</div>
              <span>Max temp :{info.maxtemp}&deg;C</span> &nbsp;&nbsp;&nbsp;
              <span>Min temp :{info.mintemp}&deg;C</span>
              <div className="temp">Feelslike : {info.feelslike}</div>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
