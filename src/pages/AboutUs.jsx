import React, { useState } from "react";
import FinancialGrid from "../components/FinancialGrid";
import MachinaryIcon from "../components/MachinaryIcon";

const AboutUs = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ marginTop: "70px" }}>
      <img
        src="https://t3.ftcdn.net/jpg/05/06/32/62/240_F_506326245_2GtSGEjKLDtpHS0FSkEBs4gV34DmTtS5.jpg"
        alt="AboutUs Image"
        style={{
          width: "100%",
          height: "400px",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          marginBottom: "70px",
        }}
      />

      <div
        style={{ display: "flex", flexDirection: "row", margin: "10px 10px" }}
      >
        <div
          style={{
            width: "430px",
            paddingTop: "30px",
            margin: "15px 15px 0 15px",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              color: "#BFBFBF",
              fontFamily: "gilroyextrabold",
              fontSize: "55px",
              fontWeight: "bold",
              letterSpacing: 0.03,
            }}
          >
            OUR
          </h2>
          <h2
            style={{
              textAlign: "center",
              color: "#BFBFBF",
              fontFamily: "gilroyextrabold",
              fontSize: "55px",
              fontWeight: "bold",
              letterSpacing: 0.03,
            }}
          >
            COMPANY
          </h2>
        </div>
        <div>
          <div
            className="paragraph-container"
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "1000px",
              padding: "10px 10px 10px 70px",
            }}
          >
            <div className="column">
              <p style={{ width: "400px", margin: "0 20px" }}>
                Musale Construction was incorporated on 5th October 1989. The
                Company was established with an objective to engage in the
                business of fabrication, erection, and commissioning related
                works required for Infrastructure and Irrigation Project. M/s
                Musale Construction was formed as a partnership concern by
                Musale Family as partners, which came into existence since 1989.
                We are an integrated construction and infrastructure development
                and management company in Vidarbha Region. Since commencing our
                business in 1989, we have serviced a diverse range of
                construction and infrastructure projects in sectors as varied as
                transportation, irrigation, residential, commercial, and retail
                property. We are headquartered in Nagpur and have five branch
                offices to manage our business operations throughout Vidarbha.
              </p>
            </div>
            <div className="column" style={{ marginLeft: "20px" }}>
              <p>
                We operate principal business segments: a construction business
                which is operated by our Company. A majority of our development
                projects are public private partnerships and are operated by
                separate special-purpose vehicles promoted by our Company and
                the Government. We own a large fleet of sophisticated
                construction equipment, including: crushing plants, hot mix
                plants, wet mix plants, asphalt batching plants, concrete
                batching plants, excavators, rock breakers, graders, pavers,
                compactors, tower cranes, dozers, bar bending, and cutting
                machines. Our workforce, as at September 30, 2009, consisted of
                508 full-time employees on a standalone basis. Our workforce,
                machinery assets, financial net worth, and past execution
                capabilities enable us to undertake many large-scale projects.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="about-us"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <div
          className="container"
          style={{ margin: "0 auto", maxWidth: "800px" }}
        ></div>
        <div
          style={{
            height: "150px",
            padding: "10px 70px",
            alignItems: "center",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              color: "#BFBFBF",
              fontFamily: "gilroyextrabold",
              fontSize: "55px",
              fontWeight: "bold",
              letterSpacing: 0.03,
              padding: "10px",
            }}
          >
            OUR STRENGTH
          </h2>
        </div>
        <div
          style={{ display: "flex", flexDirection: "row", margin: "0 10px" }}
        >
          <div
            style={{
              margin: "5px 10px",
              width: "550px",
              height: "350px",
              padding: "5px 40px 5px 20px",
            }}
          >
            <h1
              style={{
                textAlign: "center",
                color: "#BFBFBF",
                fontFamily: "gilroyextrabold",
                fontSize: "55px",
                fontWeight: "bold",
                letterSpacing: 0.03,
                padding: "10px",
              }}
            >
              A TEAM YOU CAN TRUST.
            </h1>
            <p style={{ padding: "10px 35px", fontFamily: "Gilroy-Regular" }}>
              The workforce of Musale Construction is a marvel collection of
              dreamers, achievers, and believers in their respective domains of
              expertise. All the departments have the best minds and experience
              that gets together to plan, execute, and maintain any project.
              From a worker on-site to someone who holds the highest designation
              in Administration, our company strives together as a growing and
              flourishing corporate family.
            </p>
            <br></br>
          </div>
          <div
            style={{
              padding: "0px 10px 0 60px",
              margin: "0 40px",
              width: "1000px",
              flexDirection: "row",
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr 1fr",
              gap: "2px",
            }}
          >
            {icons.map((icon) => {
              return <FinancialGrid key={icon.id} data={icon} />;
            })}
          </div>
        </div>
        <MachinaryIcon />
      </div>
      <div
        style={{
          backgroundColor: "black",
          height: "100px",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          width: "100%",
          padding: "0 80px",
        }}
      >
        <div style={{ textAlign: "center", fontSize: "16px", color: "white" }}>
          © Copyright 2024 | Musale Construction
        </div>
        <div style={{ textAlign: "center", fontSize: "16px", color: "white" }}>
          Designed By Romo Technologies
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

const icons = [
  {
    id: "Technical & Plant Machinary",
    image: (
      <img
        style={{ width: "80px", height: "65px" }}
        src="	https://patelinfra.com/images/financila_info/financial_1.png"
      ></img>
    ),
    item: 535,
  },
  {
    id: "Store And Purchase",
    image: (
      <img
        style={{ width: "80px", height: "65px" }}
        src="	https://patelinfra.com/images/financila_info/financial_3.png"
      ></img>
    ),
    item: 191,
  },
  {
    id: "Hr and Admin",
    image: (
      <img
        style={{ width: "80px", height: "65px" }}
        src="https://patelinfra.com/images/financila_info/financial_5.png"
      ></img>
    ),
    item: 16,
  },
  {
    id: "Supervisor",
    image: (
      <img
        style={{ width: "80px", height: "65px" }}
        src="https://patelinfra.com/images/financila_info/financial_2.png"
      ></img>
    ),
    item: 5,
  },
  {
    id: "Finance And Account",
    image: (
      <img
        style={{ width: "80px", height: "65px" }}
        src="https://patelinfra.com/images/financila_info/financial_8.png"
      ></img>
    ),
    item: 55,
  },
  {
    id: "HSE",
    image: (
      <img
        style={{ width: "80px", height: "65px" }}
        src="https://patelinfra.com/images/financila_info/financial_9.png"
      ></img>
    ),
    item: 78,
  },
  {
    id: "IT",
    image: (
      <img
        style={{ width: "80px", height: "65px" }}
        src="	https://patelinfra.com/images/financila_info/financial_4.png"
      ></img>
    ),
    item: 22,
  },
  {
    id: "Marketing",
    image: (
      <img
        style={{ width: "80px", height: "65px" }}
        src="https://patelinfra.com/images/financila_info/financial_7.png"
      ></img>
    ),
    item: 10,
  },
  {
    id: "Legal",
    image: (
      <img
        style={{ width: "80px", height: "65px" }}
        src="https://patelinfra.com/images/financila_info/financial_10.png"
      ></img>
    ),
    item: 3,
  },
  {
    id: "Other",
    image: (
      <img
        style={{ width: "80px", height: "65px" }}
        src="https://patelinfra.com/images/financila_info/financial_6.png"
      ></img>
    ),
    item: 1937,
  },
];
