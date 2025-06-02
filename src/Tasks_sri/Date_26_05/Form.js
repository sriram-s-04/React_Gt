import React, { useState } from "react";
import "./Form.css"; // Assuming you have a CSS file for styling
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from 'react-router-dom';
// Importing necessary libraries and components
const CustomForm = () => {
  const [details, setDetails] = useState({
    Name: "",
    email: "",
    phonenumber: "",
    collegeName: "",
    collegeState: "",
    graduationYear: "",
    reactNativeExperience: 0,
    javascriptExperience: 0,
    image: null,
  });


  function handleChange(e) {
    console.log({ ...details, [e.target.name]: e.target.value });

    setDetails({ ...details, [e.target.name]: e.target.value });
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setDetails((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/Nav_details',{state: details});   
  }

  return (
    <div className="form_container">
      <div className="form_main_container">
        <div>
          <p>Full-Stack App Developer Hiring with Capabl for Students</p>
        </div>
        <hr />
        <div>
          <p>
            Remote Internship: Full-Stack App Developer (React Native - Android
            & iOS)
          </p>
          <p>Duration: 2 months | Stipend: ₹15,000 - ₹35,000</p>
          <p>Location: Remote | Certificate: Provided</p>
          <p>
            Join us as a Full-Stack Developer to build a next-gen mobile app.
            You'll work on front-end (React Native/Flutter), back-end
            (Node.js/Python), and cloud deployment (AWS/GCP). Responsibilities
            include API development, CI/CD, automation, wireframing, and
            documentation.
          </p>
          <p>Perks:</p>
          <ul>
            <li>Internship certificate</li>
            <li>Hands-on experience</li>
            <li>Competitive stipend</li>
          </ul>
          <p>Preferred Skills:</p>
          <ul>
            <li>1+ years in full-stack development</li>
            <li>Mobile frameworks & backend proficiency</li>
            <li>Cloud & automation experience</li>
            <li>Good to have: ML exposure, compliance/security practices</li>
          </ul>
          <p>
            Ideal for CS students or equivalent with strong problem-solving and
            teamwork skills. Apply now if you're passionate about impactful
            tech!
          </p>
        </div>

        <div className="form_selects">
          <input
            type="text"
            placeholder="Enter your Name"
            className="form_input"
            name="Name"
            onChange={handleChange}
          />
          <br />
          <input
            type="email"
            placeholder="Enter your Email"
            className="form_input"
            name="email"
            onChange={handleChange}
          />
          <br />
          <input
            type="text"
            placeholder="Enter your Mobile Number"
            className="form_input"
            name="phonenumber"
            onChange={handleChange}
          />
          <br />
          <label>
            College Name<span style={{ color: "red" }}>*</span>
          </label>
          <br />
          <input
            type="text"
            placeholder="Enter your College Name"
            className="form_input"
            name="collegeName"
            onChange={handleChange}
          />
          <br />
          <div className="form_selects_inner">
            <label>College State <span style={{ color: "red" }}>*</span></label>
            <Form.Select
              aria-label="Default select example"
              className="form_input_toggle"
              name="collegeState"
              onChange={handleChange}
            >
              <option> </option>
              <option>Andaman and Nicobar Islands</option>
              <option>Andhra Pradesh</option>
              <option>Arunachal Pradesh</option>
              <option>Assam</option>
              <option>Bihar</option>
              <option>Chandigarh</option>
              <option>Chhattisgarh</option>
              <option>Delhi</option>
              <option>Goa</option>
              <option>Gujarat</option>
              <option>Haryana</option>
              <option>Himachal Pradesh</option>
              <option>Jammu and Kashmir</option>
              <option>Jharkhand</option>
              <option>Karnataka</option>
              <option>Kerala</option>
              <option>Ladakh</option>
              <option>Lakshadweep</option>
              <option>Madhya Pradesh</option>
              <option>Maharashtra</option>
              <option>Manipur</option>
              <option>Meghalaya</option>
              <option>Mizoram</option>
              <option>Nagaland</option>
              <option>Odisha</option>
              <option>Puducherry</option>
              <option>Punjab</option>
              <option>Rajasthan</option>
              <option>Sikkim</option>
              <option>Tamil Nadu</option>
              <option>Telangana</option>
              <option>Tripura</option>
              <option>Uttar Pradesh</option>
              <option>Uttarakhand</option>
              <option>West Bengal</option>
            </Form.Select>

            <label>Graduation Year <span style={{ color: "red" }}>*</span></label>
            <Form.Select
              className="form_input_toggle"
              aria-label="Default select example"
              name="graduationYear"
              onChange={handleChange}
            >
              <option> </option>
              <option>2025</option>
              <option>2024</option>
            </Form.Select>
          </div>
          <br />
          <div>
            <label>
              React Native Experience <span style={{ color: "red" }}>*</span>
            </label>
            <div style={{ display: "flex", gap: "5px", margin: "10px 0" }}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((star) => (
                <span
                  key={star}
                  onClick={() =>
                    setDetails((prev) => ({
                      ...prev,
                      reactNativeExperience: star,
                    }))
                  }
                  style={{
                    cursor: "pointer",
                    fontSize: "24px",
                    color: details.reactNativeExperience >= star ? "gold" : "gray",
                  }}
                  role="button"
                  tabIndex={0}
                  onKeyPress={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setDetails((prev) => ({
                        ...prev,
                        reactNativeExperience: star,
                      }));
                    }
                  }}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
          <br />
          <div>
            <label>
              JavaScript/TypeScript <span style={{ color: "red" }}>*</span>
            </label>
            <div style={{ display: "flex", gap: "5px", margin: "10px 0" }}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((star) => (
                <span
                  key={star}
                  onClick={() =>
                    setDetails((prev) => ({
                      ...prev,
                      javascriptExperience: star,
                    }))
                  }
                  style={{
                    cursor: "pointer",
                    fontSize: "24px",
                    color: details.javascriptExperience >= star ? "gold" : "gray",
                  }}
                  role="button"
                  tabIndex={0}
                  onKeyPress={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setDetails((prev) => ({
                        ...prev,
                        javascriptExperience: star,
                      }));
                    }
                  }}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
          <br />
            <div>
              <input
                type="file"
                accept="image/*"
                className="form_input"
                onChange={handleImageChange }
              />
            </div>
          <div className="form_submit">
            <Button type="submit" onClick={handleSubmit}>Submit</Button>
          </div>
        </div>
      </div>
    </div>
  );
} // <-- Close the function here

export default CustomForm;
