import React from "react";

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img ui centered medium circular image"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
        <h6>By your's truly, Carlitos Redding. Fueled by a lot of coffee and frustration!</h6>
      </header>
    </section>
  );
}