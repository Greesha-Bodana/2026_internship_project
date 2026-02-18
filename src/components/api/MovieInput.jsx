import axios from "axios";
import React, { useState } from "react";

export const MovieInput = () => {
    const [movieName, setMovieName] = useState("");

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Enter A movie Name : </h1>
            <input type="text" placeholder="Enter movie name" value={movieName} onChange={(e) => setMovieName(e.target.value)}
                style={{ padding: "10px", width: "250px" }}>
            </input>
            <h3 style={{ marginTop: "20px" }}>
                Movie Name: {movieName}
            </h3>
        </div>
    );
};

