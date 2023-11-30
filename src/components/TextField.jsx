import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function TextBox() {
  const navigate = useNavigate();

  const [zip, setZip] = useState("");

  const onChangeZip = (e) => {
    setZip(e.target.value);
  };

  const handleSubmit = () => {
    navigate(`/weather/${zip}`);
    navigate(0);
  };

  return (
    <>
      <h1>5 Day Weather Forcast</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <TextField
            id="standard-basic"
            label="Enter Zip Code"
            variant="outlined"
            onChange={onChangeZip}
            size="small"
            fullWidth
          />
        </div>
        <div>
          <Button variant="outlined" onClick={handleSubmit}>
            <span style={{ margin: "1px" }}>Find</span>
          </Button>
        </div>
      </div>
    </>
  );
}

export default TextBox;
