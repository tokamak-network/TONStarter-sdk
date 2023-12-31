import { useState } from "react";
import ProjectImage from "../assets/ProjectImage.svg";
import "./overview.css";
import HeadTitle from "./public/HeadTitle";

function ProgressBar() {
  const [progress, setProgress] = useState(15); // State to manage progress

  // Function to increase progress
  const increaseProgress = () => {
    if (progress < 100) {
      setProgress(progress + 10); // Increase by 10% until 100%
    }
  };

  return (
    <div className="progress-container">
      <div className="progress-bar" style={{ width: `${progress}%` }}></div>
    </div>
  );
}

function Overview() {
  return (
    <section
      style={{
        marginTop: 40,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <header
        style={{
          width: 190,
          textAlign: "center",
          backgroundColor: "#F1F5F9",
          borderRadius: 10,
          padding: 8,
          fontSize: 18,
        }}
      >
        TONStarter{" "}
        <span style={{ color: "rgb(69, 214, 32)" }}>&nbsp;$Tokamak Bakery</span>
      </header>
      <img
        src={ProjectImage}
        alt={"ProjectImage"}
        style={{ width: 105, height: 105, marginTop: 20 }}
      />
      <article style={{ textAlign: "center" }}>
        <HeadTitle
          title="Public Round 1"
          style={{ margin: 0, marginBottom: 15 }}
        ></HeadTitle>
        <ProgressBar />
        <p style={{ textAlign: "right", fontSize: 12, fontWeight: "bold" }}>
          <span style={{ color: "rgb(69, 214, 32)" }}> 3,102,000 </span>
          OF 21,000,000 TKB SOLD
        </p>
      </article>
    </section>
  );
}

export default Overview;
