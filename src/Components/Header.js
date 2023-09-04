import {
  AppBar,
  Container,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { CryptoState } from "../CryptoContext";

const Header = () => {
  const history = useNavigate();
  const { currency, setCurrency } = CryptoState();

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };
  console.log(currency);
  return (
    <AppBar color="transparent" position="static">
      <Container>
        <Toolbar>
          <Typography onClick={() => history("/")}>Crypto Checker</Typography>
          <Select
            variant="outlined"
            style={{
              width: 100,
              height: 40,
              marginLeft: 15,
            }}
            value={currency}
            onChange={handleCurrencyChange}
          >
            <MenuItem value={"INR"}>INR</MenuItem>
            <MenuItem value={"USD"}>USD</MenuItem>
          </Select>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
