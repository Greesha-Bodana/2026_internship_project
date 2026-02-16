import React from "react";
import { useForm } from "react-hook-form";

export const FormDemo6 = () => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm({ mode: "onChange" });

    const password = watch("password") || "";

    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasDigit = /[0-9]/.test(password);
    const hasSpecial = /[^A-Za-z0-9]/.test(password);
    const hasLength = password.length >= 8;

    return (
        <div style={{ textAlign: "center" }}>
            <form>
                <label>Password:</label>
                <input type="password" placeholder="Enter password"{...register("password")} />

                <div style={{ marginTop: "10px", textAlign: "left", width: "250px", marginInline: "auto" }}>
                    <p style={{ color: hasUpper ? "green" : "black" }}>1 char cap</p>
                    <p style={{ color: hasLower ? "green" : "black" }}>1 char small</p>
                    <p style={{ color: hasDigit ? "green" : "black" }}>1 char digit</p>
                    <p style={{ color: hasSpecial ? "green" : "black" }}>1 char special</p>
                    <p style={{ color: hasLength ? "green" : "black" }}>8 char</p>
                </div>
            </form>
        </div>
    );
};
