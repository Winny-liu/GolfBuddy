import React, { useState } from "react";

const UserForm = ({ onNewUserSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [handicap, setHandicap] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleHandicapChange = (event) => {
    setHandicap(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = {
      username: name,
      email: email,
      password: password,
      age: age,
      gender: gender,
      handicap: handicap,
      review: [],
    };
    onNewUserSubmit(user);
    setName("");
    setEmail("");
    setPassword("");
    setAge("");
    setGender("");
    setHandicap("");
  };

  return (
    <>
      <div className="new-user-form">
        <h4>CREATE NEW USER</h4>
        <form className="form-container" onSubmit={handleSubmit}>
          <input
            className="user-form-inputs"
            type="text"
            id="name"
            placeholder="ENTER NAME.."
            value={name}
            onChange={handleNameChange}
            required
          />
          <input
            className="user-form-inputs"
            type="text"
            id="email"
            placeholder="ENTER EMAIL.."
            value={email}
            onChange={handleEmailChange}
            required
          />
          <input
            className="user-form-inputs"
            type="password"
            id="password"
            placeholder="PASSWORD.."
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <input
            className="user-form-inputs"
            type="text"
            id="age"
            placeholder="ENTER age.."
            value={age}
            onChange={handleAgeChange}
            required
          />
          <input
            className="user-form-inputs"
            type="text"
            id="gender"
            placeholder="ENTER gender.."
            value={gender}
            onChange={handleGenderChange}
            required
          />
          <input
            className="user-form-inputs"
            type="text"
            id="handicap"
            placeholder="handicap.."
            value={handicap}
            onChange={handleHandicapChange}
            required
          />

          <input type="submit" value="submit" />
        </form>
      </div>
    </>
  );
};

export default UserForm;
