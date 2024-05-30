import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function Infobox({info}) {
  return (
    <div className="infobox">
        <br /><br />
      <Card sx={{ maxWidth: 345 }} className="card">
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://images.pexels.com/photos/912364/pexels-photo-912364.jpeg?cs=srgb&dl=pexels-brett-sayles-912364.jpg&fm=jpg"
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
