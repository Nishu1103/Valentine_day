import React, { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import axios from "axios";
import LinkModal from "./LinkModal";
import ConfettiCannon from "./ConfettiCannon";
import createToast from "../utils/toast";

const ProposeForm = ({ className = "" }) => {
    const [to, setTo] = useState("");
    const [from, setFrom] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [modal, setModal] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    const [loading, setLoading] = useState(false); // State for loader

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Start loader

        try {
            const response = await axios.post(
                "https://valentine-b.onrender.com/api/v1/Proposal/m",
                {
                    to,
                    from,
                    email,
                    message,
                }
            );

            console.log("Response:", response.data);
            createToast(response.data, "Success");
            setModal(true);
            setShowConfetti(true);
        } catch (error) {
            console.error("Error:", error);
            createToast(error, "error");
        }

        setLoading(false); // Stop loader after response
    };

    return (
        <>
            <form className={`form_btn ${className}`} onSubmit={handleSubmit}>
                <InputGroup className="form_wrapper">
                    <Form.Control
                        value={to}
                        onChange={(e) => setTo(e.target.value)}
                        className="form_field"
                        placeholder="her/him name"
                    />
                    <br />
                    <Form.Control
                        value={from}
                        onChange={(e) => setFrom(e.target.value)}
                        className="form_field"
                        placeholder="Your Nick Name"
                    />
                </InputGroup>
                <InputGroup>
                    <Form.Control
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form_field"
                        placeholder="her/him Email"
                    />
                </InputGroup>
                <InputGroup>
                    <Form.Control
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="form_field"
                        placeholder=" Message for her/him"
                    />
                    <br />
                </InputGroup>
                <Button
                    className="form_btn"
                    variant="danger"
                    type="submit"
                    disabled={loading} // Disable button during loading
                >
                    {loading ? "Sending..." : "Propose Now"}
                </Button>
            </form>
            {showConfetti && <ConfettiCannon />}
            <LinkModal person={to} show={modal} hide={() => setModal(false)} />
        </>
    );
};

export default ProposeForm;
