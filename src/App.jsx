import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Proposal from "./pages/Proposal";
import { useEffect } from "react";
import "./static/styles/app.css";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import Data from "./pages/data";
 

function App() {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:10000/api/v1/Proposal/all"
                );
                const data_propsal = response.data;
                console.log("Data:", data_propsal);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/:id" element={<Proposal />} />
                <Route path="/" element={<Home />} />
            </Routes>
            {/* <Data></Data> */}
        
        </BrowserRouter>
        
    );
}

export default App;
