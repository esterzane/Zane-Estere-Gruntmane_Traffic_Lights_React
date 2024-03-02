import React, { useState } from "react";

const Lights = ({ redLight, yellowLight, greenLight, purpleLight, onClickRed, onClickYellow, onClickGreen, onClickcycleLights, OnClickPurpleLight }) => {
  const [isPurpleVisible, setPurpleVisibility] = useState(true);

  let red = <i className={`sign ${redLight} fa-solid fa-circle fa-2xl`} style={{ color: "#cc1515" }}></i>;
  let yellow = <i className={`sign ${yellowLight} fa-solid fa-circle fa-2xl`} style={{ color: "#f6fa0d" }}></i>;
  let green = <i className={`sign ${greenLight} fa-solid fa-circle fa-2xl`} style={{ color: "#38f00f" }}></i>;
  let purple = <i className={`fa-solid fa-circle fa-2xl ${purpleLight}`} style={{ color: "#9711d4", display: isPurpleVisible ? "block" : "none" }}></i>
  let cycle = <i className={`fa-solid fa-spinner fa-spin fa-lg`} style={{ color: "#f7f7f8" }}></i>;


  const handleAddPurpleLight = () => {
    setPurpleVisibility(!isPurpleVisible);
  };


  return (

    <div className="container-fluid d-flex flex-column align-items-center">
      <div className="trafficHold col-sm-1 col-md-1 col-lg-1"></div>
      <div className="wrapper col-sm-1 col-md-1 col-lg-1">
        <div className="redLight" onClick={onClickRed}>{red}</div>
        <div className="yellowLight" onClick={onClickYellow}>{yellow}</div>
        <div className="greenLight" onClick={onClickGreen}>{green}</div>
        <div className="purpleLight" onClick={() => { OnClickPurpleLight(); handleAddPurpleLight(); }}>{purple}</div>
      </div>

      <div className="d-flex flex-row">
        <button className="cycleLight btn btn-dark mt-3 me-1" onClick={onClickcycleLights}>{cycle} </button>
        <button className="isPurpleVisible btn btn-dark mt-3 me-1" onClick={OnClickPurpleLight}>Purple On </button>
      </div>
    </div >


  );
};

export default Lights;
