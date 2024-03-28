import React, { useState } from "react";
import "./CheckoutForm.css";

const CheckoutForm = ({ onConfirm }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleConfirm = (event) => {
    event.preventDefault();
    const userData = {
      name,
      phone,
      email,
    };
    onConfirm(userData);
  };

  return (
    <div className="checkout-form-container">
      <form onSubmit={handleConfirm} className="checkout-form">
        <label className="form-label">
          Nombre
          <input
            className="form-input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label className="form-label">
          Teléfono
          <input
            className="form-input"
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </label>
        <label className="form-label">
          Email
          <input
            className="form-input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <button type="submit" className="form-submit-button">
          Crear orden
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;