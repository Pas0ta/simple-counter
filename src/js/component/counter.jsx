import React from "react";
import PropTypes from "prop-types";


//Creo el componente del contador,le paso las props utilizando destructuring
const Counter = ({meses, semanas, dias, horas, minutos, segundos}) => {
  return (
    <>
      <div className="Container-fluid bg-dark text-white">
        <div className="row justify-content-center">
          <div className="col-2 p-2 me-1 rounded-3">
            <i className="far fa-clock #offset"></i>
          </div><span className="col-1 digit shadow p-2 me-1 rounded-3">
            {meses}</span>
          <span className="col-1 digit shadow p-2 me-1 rounded-3">
            {semanas}</span>
          <span className="col-1 digit shadow p-2 me-1 rounded-3">
            {dias}
          </span>
          <span className="col-1 digit shadow p-2 me-1 rounded-3">
            {horas}
          </span>
          <span className="col-1 digit shadow p-2 me-1 rounded-3">
            {minutos}
          </span>
          <span className="col-1 digit shadow p-2 rounded-3">
            {segundos}
          </span>
      </div>
      </div>
      <div>
      </div>
   </>
  )
};
Counter.propTypes = {
  meses: PropTypes.number,
  semanas: PropTypes.number,
  dias: PropTypes.number,
  horas: PropTypes.number,
  minutos: PropTypes.number,
  segundos: PropTypes.number,
};


export default Counter