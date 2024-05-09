import React from "react";
import { useState } from "react";
import ContactList from "./components/ContactList";
import "./index.css";

function App() {
  return (
    <>
      <div className="wrapper">
        <ContactList />
      </div>
    </>
  );
}

export default App;
