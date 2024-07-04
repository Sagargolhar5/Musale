import React from "react";

const OurClients = () => {
  return (
    <div 
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "30px 50px",
        backgroundColor: "#e8eaee" ,
      }}
    >
      <h1>Our Clients</h1>
      <div
        style={{
          height: "35vh",
          width: "90%",
          boxShadow: "-3px 4px 24px 1px #BFBFBF",
          margin: "20px 10px",
          backgroundColor:"#fff"
        }}
      ></div>
    </div>
  );
};

export default OurClients;
