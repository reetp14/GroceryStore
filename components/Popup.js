import React from "react";
import Popup from "reactjs-popup";
import NameForm from "../components/NameForm";
import Button from "@material-ui/core/Button";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../src/theme";

const Popups = () => (
  <ThemeProvider theme={theme}>
    <Popup
      header="Admin Deatils"
      trigger={
        <Button variant="contained" color="primary" fullWidth={false}>
          Create User
        </Button>
      }
      modal
      closeOnDocumentClick
    >
      <NameForm />
    </Popup>
  </ThemeProvider>
);

export default Popups;
