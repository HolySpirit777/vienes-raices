import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { CardActionArea } from "@mui/material";
import img from "../../static/images/cards/dove.jpg";
import "./Properties.css";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

function Properties() {
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px 10px",
            width: 700,
          }}
        >
          <Card sx={{ maxWidth: 445 }}>
            <CardActionArea>
              <CardMedia component="img" height="140" src={img} alt="dove" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Dove
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Columbidae is a bird family consisting of pigeons and doves.
                  It is the only family in the order Columbiformes.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card sx={{ maxWidth: 445 }}>
            <CardActionArea>
              <CardMedia component="img" height="140" src={img} alt="dove" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Dove
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Columbidae is a bird family consisting of pigeons and doves.
                  It is the only family in the order Columbiformes.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card sx={{ maxWidth: 445 }}>
            <CardActionArea>
              <CardMedia component="img" height="140" src={img} alt="dove" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Dove
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Columbidae is a bird family consisting of pigeons and doves.
                  It is the only family in the order Columbiformes.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card sx={{ maxWidth: 445 }}>
            <CardActionArea>
              <CardMedia component="img" height="140" src={img} alt="dove" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Dove
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Columbidae is a bird family consisting of pigeons and doves.
                  It is the only family in the order Columbiformes.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card sx={{ maxWidth: 445 }}>
            <CardActionArea>
              <CardMedia component="img" height="140" src={img} alt="dove" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Dove
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Columbidae is a bird family consisting of pigeons and doves.
                  It is the only family in the order Columbiformes.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>

        <Box sx={{ width: "%100" }}>

          <FormControl fullWidth>
            <InputLabel id="beds">Camas</InputLabel>

            <Select
              labelId="beds"
              id="beds"
              //   value={age}
              label="Age"
              //   onChange={handleChange}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel id="bathrooms">Banos</InputLabel>

            <Select
              labelId="bathrooms"
              id="bathrooms"
              //   value={age}
              label="Age"
              //   onChange={handleChange}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
            </Select>
          </FormControl >

          <FormControl component="fieldset">
              
            <RadioGroup
              aria-label="gender"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="dia"
                control={<Radio />}
                label="Precio por dia"
              />

              <FormControlLabel
                value="semana"
                control={<Radio />}
                label="Precio por semana"
              />

              <FormControlLabel
                value="mes"
                control={<Radio />}
                label="Precio por mes"
              />
            </RadioGroup>
          </FormControl>

        </Box>
      </Box>
    </div>
  );
}

export default Properties;
