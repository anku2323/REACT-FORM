import React, { useState } from 'react';
import './App.css';

function Form() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [birthday, setBirthday] = useState("");
  const [address, setAddress] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      fname,
      lname,
      email,
      gender,
      password,
      confirmPassword,
      birthday,
      address,
    };
    console.log(formData);
    setSubmittedData(formData);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>User personal information:</legend>
          
          <label htmlFor="fname">First name:</label><br /><br />
          <input type="text" id="fname" name="fname" value={fname}
            onChange={(e) => setFname(e.target.value)}
          /><br /><br />
          
          <label htmlFor="lname">Last name:</label><br /><br />
          <input  type="text"  id="lname"  name="lname"  value={lname}
            onChange={(e) => setLname(e.target.value)}
          /><br /><br />
          
          <label htmlFor="email">Email:</label><br /><br />
          <input  type="email" id="email" name="email" value={email}
            onChange={(e) => setEmail(e.target.value)}
          /><br /><br />
          
          Gender:<br />
          <label htmlFor="male">Male</label>
          <input type="radio"  id="male" name="gender" value="male"
            onChange={(e) => setGender(e.target.value)}
          />
          
          <label htmlFor="female">Female</label>
          <input  type="radio" id="female" name="gender" value="female"
            onChange={(e) => setGender(e.target.value)}
          />
          
          <label htmlFor="other">Other</label>
          <input type="radio"id="other"name="gender"value="other"
            onChange={(e) => setGender(e.target.value)}
          /><br /><br />
          
          <label htmlFor="password">Password:</label><br /><br />
          <input  type="password" id="password" name="password"  value={password}
            onChange={(e) => setPassword(e.target.value)}
          /><br /><br />
          
          <label htmlFor="confirmPassword">Confirm Password:</label><br /><br />
          <input  type="password"  id="confirmPassword"  name="confirmPassword"  value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          /><br /><br />
          
          <label htmlFor="birthday">Enter your DOB:</label><br /><br />
          <input  type="date"  id="birthday"  name="birthday"  value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
          /><br /><br />
          
          <label htmlFor="address">Address:</label><br /><br />
          <textarea id="address" name="address" rows="5" cols="70" value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></textarea><br /><br />
          
          <input type="submit" id="submit" value="Submit" />
        </fieldset>
      </form>

      {submittedData && (
        <div className="submitted-data">
          <h2>Submitted Data:</h2>
          <p><strong>First Name:</strong> {submittedData.fname}</p>
          <p><strong>Last Name:</strong> {submittedData.lname}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Gender:</strong> {submittedData.gender}</p>
          <p><strong>Password:</strong> {submittedData.password}</p>
          <p><strong>Confirm Password:</strong> {submittedData.confirmPassword}</p>
          <p><strong>Birthday:</strong> {submittedData.birthday}</p>
          <p><strong>Address:</strong> {submittedData.address}</p>
        </div>
      )}
    </div>
  );
}

export default Form ;
