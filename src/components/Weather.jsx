import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const APIKEY = import.meta.env.VITE_API_KEY;

function Weather() {
  const { id } = useParams();

  console.log(id);

  const [weatherData, setWeatherData] = useState({});
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const getAllData = async () => {
      try {
        const response = await axios.get(
          `http://api.openweathermap.org/data/2.5/forecast?zip=${id},In&appid=${APIKEY}&units=metric`
        );
        console.log(response.data);
        setWeatherData(response.data);
        setStatus(response.status);
      } catch (error) {
        console.log(error);
      }
    };

    getAllData();
  }, [id]);

  if (status === 200) {
    return (
      <div style={{ margin: "25px" }}>
        <div>
          <h2>{weatherData.city.name}</h2>
        </div>
        <div>
          <h3>{weatherData.city.country}</h3>
        </div>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Date & Time</TableCell>
                <TableCell align="right">Current Temp</TableCell>
                <TableCell align="right">Max Temp</TableCell>
                <TableCell align="right">Min Temp</TableCell>
                <TableCell align="right">Humidity</TableCell>
                <TableCell align="right">Weather</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {weatherData.list.map((data) => (
                <TableRow
                  key={data.dt}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {data.dt_txt}
                  </TableCell>
                  <TableCell align="right">{data.main.temp}</TableCell>
                  <TableCell align="right">{data.main.temp_max}</TableCell>
                  <TableCell align="right">{data.main.temp_min}</TableCell>
                  <TableCell align="right">{data.main.humidity}</TableCell>
                  <TableCell align="right">{data.weather[0].main}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }

  return (
    <>
      <h2>Wrong ZIP Code</h2>
    </>
  );
}

export default Weather;
