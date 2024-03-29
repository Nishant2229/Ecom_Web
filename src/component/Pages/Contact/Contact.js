import React from "react";
import classes from "../Signup/Signup.module.css";

const Contact = () => {
  const url = "https://shopping-2e169-default-rtdb.firebaseio.com/contacts/";
  const email = localStorage.getItem("userEmail").split("@");
  const newUrl = url + email[0] + ".json";

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const data = {
      name: name,
      email: email,
      phone: phone,
    };
    fetch(newUrl, { method: "POST", body: JSON.stringify(data) })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to save data to Firebase.");
        }
        return response.json();
      })
      .then((responseData) => {
        alert("Thanks For Your Intrest, We will contact you shortly! ");
      })
      .catch((error) => {
        console.error("Error saving data to Firebase:", error);
      });
    event.target.reset();
  };

  return (
    <div className={classes.container}>
      <div className={classes.signupcard}>
        <h1>Contact Us</h1>
        <form id="contact-form" onSubmit={handleSubmit}>
          <div className={classes.control}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
            <br />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
            <br />
            <label htmlFor="phone">Phone Number:</label>
            <input type="tel" id="phone" name="phone" />
            <br />
            <button className={classes.btn}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
