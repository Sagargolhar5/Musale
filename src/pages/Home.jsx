import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  inputAdornmentClasses,
} from "@mui/material";
import data from "../data.json";
import "../App.css";
import Video from "../components/Video";
import OurClients from "../components/OurClients";
import SliderImage from "../components/SliderImage/SliderImage";
export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const incrementIndex = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(incrementIndex, 2000);
    return () => clearInterval(intervalId);
  }, [currentImageIndex]);

  return (
    <div style={{ paddingTop: "70px", overflowX: "hidden" }}>
      <SliderImage />
      <Container>
        <Box className="paper">
          <Box
            sx={{
              marginTop: "0",
              fontSize: "18px",
              fontWeight: 600,
              color: "gray",
            }}
          >
            NEWS |
          </Box>
          <Box className="scrolling-text">
            {
              "When you change your thoughts, remember to also change your world."
            }
          </Box>
        </Box>

        <Box sx={{ marginTop: 4 }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ color: "gray", fontSize: "50px", fontWeight: "bold" }}
          >
            AREA OF EXPERTISE
          </Typography>
          <Typography variant="body1">
            Musale construction has been a connoisseur of infrastructure
            development for the last 29 years! Our focus on excellence and
            precision has allowed us to revolutionize the construction industry.
            <br />
            <br />
            We take pride in being one of the oldest and most efficient
            companies in the construction industry and have unlocked many
            achievements in the stellar journey of twenty-nine years. Musale
            Construction has become a symbol of trust and innovation in the
            construction industry.
            <br />
            <br />
            Our operation domains can be classified into two major fields:
            Construction contract business and the second is the development of
            roads and highway networks across the country. We offer EPC services
            for reputed clients specializing in the roads and highways sector,
            including long stretch highways, dam, irrigation, Transport material
            supply, 2 stone crusher, 3 Petrol pump and a vivid range of building
            and other civil construction projects. The second branch of our
            business concerning the development of roads and highway projects is
            currently working on the hybrid annuity model ("HAM") basis (the
            "Annuity Business"), and through our Subsidiaries completed build,
            operate, transfer ("BOT") annuity projects.
          </Typography>
          <br></br>
          <br></br>

          <Grid container spacing={4}>
            {expertiseData.map((item, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Box sx={{ padding: 2 }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                      marginBottom: "10px",
                    }}
                  />
                  <Typography variant="h5" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography>{item.description}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            margin: "0 2px",
            padding: "20px",
            height: "400px",
            background:
              "url(" +
              "https://patelinfra.com/images/homepage/section_bg.jpg" +
              ")",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div
            style={{
              margin: "20px 20px 0 10px",
              width: "450px",
              height: "50px",
              padding: "20px 0 0 10px",
              gap: "0",
            }}
          >
            <h2
              style={{
                textAlign: "start",
                color: "#BFBFBF",
                fontFamily: "gilroyextrabold",
                fontSize: "65px",
                fontWeight: "bold",
                letterSpacing: 0.03,
              }}
            >
              OUR
            </h2>
            <h2
              style={{
                textAlign: "start",
                color: "#BFBFBF",
                fontFamily: "gilroyextrabold",
                fontSize: "65px",
                fontWeight: "bold",
                letterSpacing: 0.03,
              }}
            >
              PHILOSOPHY.
            </h2>
          </div>
          <div
            style={{
              padding: "20px 30px",
              margin: "20px 2px 20px 60px",
              width: "550px",
              color: "#fff",
              lineHeight: "1.5",
            }}
          >
            <ul>
              <li>
                To bring in a high level of execution skills, meet customer
                benchmarks serve customers and : through timely completion of
                projects without compromising on quality.
              </li>
              <li>To improve on existing quality-system in its operations.</li>
              <li>To achieve greater productivity and safety standards.</li>
              <li>
                To develop human resources and improve employee attitudes.
              </li>
              <li>
                To maintain good growth of net worth and build on the assets of
                the company.
              </li>
              <li>
                To be a market leader and a highly dependable services provider.
              </li>
              <li> To develop partnerships for growth and diversification.</li>
            </ul>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            margin: "20px 2px",
            height: "250px",
          }}
        >
          <div
            style={{
              margin: "20px 10px 0 10px",
              width: "450px",
              height: "250px",
              padding: "10px 20px 0 0",
              gap: "0",
            }}
          >
            <h2
              style={{
                textAlign: "start",
                color: "#BFBFBF",
                fontFamily: "gilroyextrabold",
                fontSize: "65px",
                fontWeight: "bold",
                letterSpacing: 0.03,
              }}
            >
              VISION &{" "}
            </h2>
            <br></br>
            <h2
              style={{
                textAlign: "start",
                color: "#BFBFBF",
                fontFamily: "gilroyextrabold",
                fontSize: "65px",
                fontWeight: "bold",
                letterSpacing: 0.03,
              }}
            >
              MISSION
            </h2>
          </div>
          <div
            style={{
              padding: "10px 50px",
              margin: "20px 50px",
              width: "600px",
            }}
          >
            <ul>
              <li>
                Musale Construction shall be a leading global enterprise in
                world class infrastructure development and environment
                management through sustainable growth.
              </li>
              <li>
                We shall ensure quality, reliability and continuous technology
                up gradation thereby enhancing the value of all our
                stakeholders.
              </li>
            </ul>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            margin: "0 2px",
            height: "250px",
          }}
        >
          <div
            style={{
              margin: "30px 10px 0 10px",
              width: "450px",
              height: "250px",
              padding: "10px 20px 0 0",
              gap: "0",
            }}
          >
            <h2
              style={{
                textAlign: "start",
                color: "#BFBFBF",
                fontFamily: "gilroyextrabold",
                fontSize: "65px",
                fontWeight: "bold",
                letterSpacing: 0.03,
              }}
            >
              VALUES
            </h2>
            <br></br>
          </div>
          <div
            style={{
              padding: "20px 40px",
              margin: "20px 50px",
              width: "600px",
            }}
          >
            <ul>
              <li>
                Musale Construction in achieving its vision shall promote high
                standards of :
              </li>
              <li>Integrity</li>
              <li>Customer Satisfaction</li>
              <li>Work Culture</li>
              <li>Employee Sense of Belonging</li>
              <li>Innovation</li>
              <li>Safety, Health & Environment</li>
            </ul>
          </div>
        </div>

        <Box sx={{ marginTop: 4 }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ color: "gray", fontSize: "50px", fontWeight: "bold" }}
          >
            Working Department
          </Typography>
          <Typography variant="body1" style={{ fontSize: "16px" }}>
            {clientData.map((client, index) => (
              <Typography key={index}>
                <Link href="#" underline="hover">
                  {client.name}
                </Link>
              </Typography>
            ))}
          </Typography>
        </Box>
      </Container>
      <OurClients />
      {/* Footer */}
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
}

// Data for Our Expertise section
const expertiseData = [
  {
    title: "Road Projects",

    image: "/Assets/road1.jpg",
  },
  {
    title: "Dam Projects",

    image: "/Assets/dam.jpg",
  },
  {
    title: "Irrigation Projects",

    image:
      "https://tse4.mm.bing.net/th?id=OIP.5wAfoU1wO8mIGVGEYStbBgHaEc&pid=Api&P=0&h=180",
  },
  {
    title: "Transport Material Supply",

    image:
      "https://tse2.mm.bing.net/th?id=OIP.b6_3ak0IhMYgV-VuOaZxYQHaD4&pid=Api&P=0&h=180",
  },
];

// Data for Client section
const clientData = [
  {
    name: "Pradhan Mantri Gram Sadak Yogna (PMGSY)",
  },
  {
    name: "Mukhya Mantri Gram Sadak Yogna (MMGSY)",
  },
  {
    name: "Public Works Department (PWD)",
  },
  {
    name: "Vidarbha Irrigation Development Corporation (VIDC)",
  },
];
