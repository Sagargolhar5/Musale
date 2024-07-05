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
        backgroundColor: "#e8eaee",
      }}
    >
      <h1>Our Clients</h1>
      <div
        style={{
          height: "35vh",
          width: "90%",
          boxShadow: "-3px 4px 24px 1px #BFBFBF",
          margin: "20px 10px",
          backgroundColor: "#fff",
          display:"flex",
          flexDirection:"row",
          alignItems:"center",
          justifyContent:"center"
        }}
      >
        {clients.map((data) => {
          return (
            <div >
              <img
                src={data.url}
                alt=""
                style={{
                  height: "180px",
                  width: "auto",
                  marginLeft:"15px"
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurClients;

const clients = [
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb_Xp8POaF0Km75HqCnEps75R-hW1kvc2JgQ&s",
  },
  {
    url: "https://roofwaterproofing.com/wp-content/uploads/2022/07/pwd.png",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOg3xVfDZtv17P0c1et0fpCjD-i9fjn4_vFg&s",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaO0JujCisirwUhtjPs82Yau1FAxUADcEEJSUvElOL7SHMkL5EYUjci2czDO-E8bsPeo0&usqp=CAU",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7wbHY-jtH7DLeS3j7W4Lw5t1WgEvO8mH2aQQbLn6jkzo_7TiKNxcTrxTwhG-tM2j_lHk&usqp=CAU",
  },
];
