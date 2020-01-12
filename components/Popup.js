import React from "react";
import Popup from "reactjs-popup";
import NameForm from "../components/NameForm";
import Button from "@material-ui/core/Button";

const Popups = () => (
  <Popup
    header="Admin Deatils"
    trigger={
      <Button variant="contained" color="primary">
        Create User
      </Button>
    }
    modal
    closeOnDocumentClick
  >
    <span>
      {" "}
      <NameForm />
    </span>
  </Popup>
);

export default Popups;
