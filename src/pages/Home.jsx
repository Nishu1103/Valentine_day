import React, { useEffect } from "react";
import "./home.css"; // Import your custom CSS for styling
import ProposeForm from "../components/ProposeForm";
import HeroImage from "../static/images/hero.svg";
import Data from "./data";

// useEffect(() => {
//     const fetchData = async () => {
//         try {
//             const response = await axios.get("http://localhost:5000/api/v1/Proposal/all");
//             const data_propsal = response.data;
//             console.log("Data:", data_propsal);
//         } catch (error) {
//             console.error("Error fetching data:", error);
//         }
//     };
//     fetchData();
// }, []);

const Home = ({ className = "" }) => (
    <>
    
    
    
    
    <header className={`hero ${className}`}>
        <div className="container">
            <div className="hero-content">
                <div className="hero-text">
                    <h1 className="hero-title">
                        Afraid To <span className="text-danger">Propose</span> {" "}  Someone?
                    </h1>
                    <p className="hero-description">
                        Don’t worry, I am here to help you. Enter your valentine's name and generate a propose link.
                    </p>
                    <ProposeForm className="hero-form" />
                    <p className="hero-credit">
                        Developed by
                        <a style={{color:"black"}} > Elvesh bhai hee heee</a>
                    </p>
                </div>
                <div className="hero-media">
                    <img  src={HeroImage} alt="Afraid To Propose Someone?" className="hero-image" />
                    
                </div>
            </div>
        </div>
    <Data></Data>
    </header>
    </>
);

export default Home;
