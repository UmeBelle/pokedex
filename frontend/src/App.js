import LoginComponent from "./components/Section/LoginComponent/LoginComponent"  
import Pokedex from "./components/main/Pokemon";
import Card from "./components/Section/CardComponent/card-pokemon";
import "./App.css";
import POKE_ARRAY from "./data";
import React from "react";
import ReactDOM from "react-dom/client";
import auth from "./components/api/ApiAuth";
import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
async function prueba() {
  await auth.login();
}
useEffect(()=>{
  prueba()
},[])

  return (

    <BrowserRouter>
    <Routes>
      <Route path="/pokedex" element={<Pokedex POKE_ARRAY={POKE_ARRAY}/>}></Route>
      <Route path=":nombre" element={<Card/>}></Route>
      <Route path="/" element={<LoginComponent/>}></Route>
    </Routes>
  </BrowserRouter>

  );
}

export default App;
