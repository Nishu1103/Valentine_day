import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./data.css";

export default function data() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:10000/api/v1/Proposal/all"
                );
                const data_propsal = response.data;
                console.log("Data:", data_propsal);
                setData(data_propsal);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, [1000]);
    return (
        <div className="carddd">
            {data && (
                <div>
                    <p>Total Proposal Sent: {data.count}</p>
                    <p>
                        Recent Proposals by:{" "}
                        {data.Proposal &&
                            data.Proposal.map((proposal, index) => (
                                <li key={index}>{proposal}</li>
                            ))}{" "}
                    </p>
                </div>
            )}
        </div>
    );
}
