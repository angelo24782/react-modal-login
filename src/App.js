import React, { useState } from "react";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { ModalContainer } from "./components/ModalContainer";

function App() {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  return (
    <div className="App">
      <NavBar openfn={openModal} />
      <ModalContainer show={open} />
    </div>
  );
}

export default App;
