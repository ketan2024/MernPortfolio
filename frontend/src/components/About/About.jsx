import React from 'react';
import "./About.css";
import { Typography } from "@mui/material";
const About = () => {
  return (
    <div className="about">
        <div className="aboutContainer"><Typography>this is simple quote</Typography></div>
        <div className="aboutContainer2">
            <div>
                <img src="https://tse3.mm.bing.net/th?id=OIP.3mMigJ4qYKbzgFMRDTUF-gHaFj&pid=Api&P=0"
                 alt="Jai Shree Ram"
                 className="aboutAvatar"
                 />

                <Typography variant="h4"
                style={{ margin: "1vmax 0", color: "black" }}>Jai Shree Ram</Typography>
                <Typography>Full Stack Developer</Typography>
                <Typography style={{ margin: "1vmax 0"}}>I am a Student</Typography>

            </div>
           <div>
           <Typography
            style={{
              wordSpacing: "5px",
              lineHeight: "50px",
              letterSpacing: "5px",
              textAlign: "right",
            }}
          >
            Jai Shree Ram   
          </Typography>
           </div>
        </div>

    </div>
      );
};

export default About;

