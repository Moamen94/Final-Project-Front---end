import React, { useState } from "react";
import "../Style/HomeHeader.css";
import { GrSend } from "react-icons/gr";

const HomeHeader = () => {
  const [searchTerm, setSearchTerm] = useState(""); 

  const handleSearch = () => {
    if (searchTerm.trim() === "") {
      alert("Please enter a course name to search!");
      return;
    }
    console.log("Searching for:", searchTerm); 
    
  };

  return (
    <section className="home-header">
      <div className="home-header-content">
        <h1>
          Get <span className="highlight">smart</span>{" "}
          <span className="underline">opportunity for</span>{" "}
          your <br /> <span className="highlight">best future</span>
        </h1>
        <p>
          It is a long established fact that reader will be distracted readable
          content of a page when.
        </p>

      
        <div className="search-box">
          <input
            type="text"
            placeholder="Search Your Course Here"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // تحديث القيمة
          />
          <button onClick={handleSearch}>
            Search <GrSend />
          </button>
        </div>

   
        {searchTerm && (
          <p style={{ marginTop: "10px", color: "#333" }}>
            You are searching for: <b>{searchTerm}</b>
          </p>
        )}

        <div className="topics">
          <span>Popular Topic: </span>
          <a href="#">Business</a>, <a href="#">Data Science</a>,{" "}
          <a href="#">Digital Program</a>, <a href="#">Finance</a>
        </div>
      </div>
    </section>
  );
};

export default HomeHeader;

