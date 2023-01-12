//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import Counter from "./component/counter.jsx";

//LAS VARIABLES
let meses = 0;
let semanas = 0;
let dias = 0;
let horas = 0;
let minutos = 0;
let segundos = 0;


setInterval(function(){
  segundos++;
  if (segundos === 60) {
    minutos++;
    segundos = 0;
  }
  if (minutos === 60) {
    horas++;
    minutos = 0;
  }
  if (horas === 24) {
    dias++;
    horas = 0;
  }
  if (dias === 7) {
    semanas++;
    dias = 0;
  }
  if (semanas === 4) {
    meses++;
    semanas = 0;
  }
  //render your react application
  ReactDOM.render(
    <Counter
      segundos={segundos}
      minutos={minutos}
      horas={horas}
      dias={dias}
      semanas={semanas}
      meses={meses}
    />,
    document.querySelector("#app")
  );
}, 1000);


//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));
