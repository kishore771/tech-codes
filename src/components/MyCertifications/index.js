import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import "./index.css";

const MyCertifications = () => {
  const certifications = [
    {
      id: 1,
      name: "Building static Websites using HTML, CSS and Bootstrap",
      organization: "Nxtwave",
      link: "https://drive.google.com/file/d/19d4HFhjS43WBPAJuskY1ZcWW5JQ7K3KH/view?usp=drive_link",
    },
    {
      id: 2,
      name: "Building Responsive Websites using Javascript",
      organization: "Nxtwave",
      link: "https://drive.google.com/file/d/1TVvQ-TW_f696Jpp1bQyRuCeoIywE7Hfj/view?usp=drive_link",
    },
    {
      id: 3,
      name: "Building React Apps",
      organization: "Nxtwave",
      link: "https://drive.google.com/file/d/1dB_PeVHSvM2lMAwMcJHMc3mwB_TD4dTo/view?usp=drive_link",
    },
    {
      id: 4,
      name: "Deloitte Job Simulation",
      organization: "Deloitte",
      link: "https://drive.google.com/file/d/1siOpsXf0AjJtlxHqH0rukVHH0quCA9l7/view?usp=drive_link",
    },
    {
      id: 4,
      name: "Deloitte Data Analyst Job Simulation",
      organization: "Deloitte",
      link: "https://drive.google.com/file/d/1C9H6gwfya67LdEWV-86Ebn9OOrISW_dr/view?usp=drive_link",
    },
  ];

  return (
    <div className="page-wrapper">
      <Header />
      <main className="certifications-container">
        <h1 className="header-title">My Certifications</h1>
        <div className="certifications-list">
          {certifications.map((certification) => (
            <div key={certification.id} className="certification-card">
              <h3 className="card-title">{certification.name}</h3>
              <p className="card-details">{certification.organization}</p>
              <a
                href={certification.link}
                className="card-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Certification
              </a>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MyCertifications;
