import React from "react";
import { FaMapMarkerAlt, FaBiking, FaClipboardList, FaShareAlt } from 'react-icons/fa'
import { useHistory } from "react-router";
import "./index.css";

const LandingPage = () => {
  const history = useHistory();

  return <div className="landing-page">
    <div className="hero">
      <p>Start Building your customized date now!</p>
      <button onClick={() => history.push('/dashboard')}>
        Try Demo
      </button>
    </div>
    <div className="walk-through">
      <h2>How it Works</h2>
      <div>
        {
          [
            { icon: <FaMapMarkerAlt size={25} />, paragraph: "Put your location in to get places near you.", title: "Location" },
            { icon: <FaBiking size={25} />, paragraph: "Select the activities that are near you to start building your perfect date!", title: "Activities" },
            { icon: <FaClipboardList size={25} />, paragraph: "Review your itinerary to make sure everything is perfect.", title: "Itinerary" },
            { icon: <FaShareAlt size={25} />, paragraph: "Time to share that date with that special someone and prepare for a good time. ", title: "Share" }
          ].map((d, i) => (
            <div key={i} className="card">
              {d.icon}
              <h2>{d.title}</h2>
              <p>{d.paragraph}</p>
            </div>
          ))
        }
      </div>

    </div>
  </div>;
};

export default LandingPage;
