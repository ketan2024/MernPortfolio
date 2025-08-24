import React from 'react';
import "./About.css";
import { Typography } from "@mui/material";
const About = () => {
  return (
    <div className="about">
        <div className="aboutContainer"><Typography>"Committed to staying ahead of the curve in the ever-evolving tech landscape."
</Typography></div>
        <div className="aboutContainer2">
            <div>
                <img src="/ketan.jpg"
                 alt="Ketan"
                 className="aboutAvatar"
                 />

                <Typography variant="h4"
                style={{ margin: "1vmax 0", color: "black" }}>Ketan Barahate</Typography>
                <Typography>MERN Stack Developer</Typography>
                <Typography style={{ margin: "1vmax 0"}}>I am a Student</Typography>

            </div>
           <div>
           <Typography
            style={{
              wordSpacing: "2px",
              lineHeight: "50px",
              letterSpacing: "3px",
              textAlign: "right",
            
            }}
          > As a dedicated MERN Stack Developer, I specialize in creating high-performance and user-friendly web applications. 
            Leveraging my expertise in MongoDB, Express.js, Next.js, React and Node.js, 
             I build scalable back-ends, develop interactive front-ends, and integrate seamless APIs.
              My focus is on delivering efficient and innovative solutions that address complex challenges and
              enhance user engagement.
          </Typography>
           </div>
        </div>

    </div>
      );
};

export default About;

