import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Ambulance.css";
<<<<<<< HEAD

const Ambulance = () => {
  const [ambulances, setAmbulances] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAmbulances = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/ambulance/"); // Adjust API endpoint as needed
        setAmbulances(response.data);
      } catch (error) {
        setError("Failed to fetch ambulance data.");
      } finally {
        setLoading(false);
      }
    };

    fetchAmbulances();
  }, []);

  return (
    <div className="ambulance-container">
      <h2 className="ambulance-title">Available Ambulances</h2>

      {loading ? (
        <p className="loading-text">Loading ambulances...</p>
      ) : error ? (
        <p className="error-text">{error}</p>
      ) : ambulances.length === 0 ? (
        <p className="no-data-text">No ambulances available.</p>
      ) : (
        <div className="ambulance-list">
          {ambulances.map((ambulance) => (
            <div key={ambulance.id} className="ambulance-card">
              <h3 className="ambulance-type">{ambulance.type}</h3>
              <p className="ambulance-contact">
                📞 Contact: {ambulance.contact}
              </p>
            </div>
          ))}
        </div>
      )}
=======
import ambulanceImage from "../../assets/als-ambulance.webp";

// ✅ Toastify import
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Ambulance = () => {
  const [ambulanceTypes, setAmbulanceTypes] = useState([]);
  const [formData, setFormData] = useState({
    from_location: "",
    destination: "",
    ambulance_type: "",
    date: "",
    time: "",
    name: "",
    mobile: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/ambulance/")
      .then((res) => setAmbulanceTypes(res.data))
      .catch(() => setAmbulanceTypes([]));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.from_location) newErrors.from_location = "Required";
    if (!formData.destination) newErrors.destination = "Required";
    if (!formData.ambulance_type) newErrors.ambulance_type = "Required";
    if (!formData.date) newErrors.date = "Required";
    if (!formData.time) newErrors.time = "Required";
    if (!formData.name) newErrors.name = "Required";
    if (!formData.mobile.match(/^01[3-9]\d{8}$/))
      newErrors.mobile = "Invalid Bangladeshi mobile number";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    axios
      .post("http://127.0.0.1:8000/ambulance-request/request/", formData)
      .then(() => {
        toast.success("✅ Form submitted successfully!", {
          position: "top-center",
        });
        setFormData({
          from_location: "",
          destination: "",
          ambulance_type: "",
          date: "",
          time: "",
          name: "",
          mobile: "",
        });
        setErrors({});
      })
      .catch(() => {
        toast.error("❌ Submission failed. Please try again.", {
          position: "top-center",
        });
      });
  };

  return (
    <div className="ambulance-wrapper">
      {/* ✅ Toast container (must be inside JSX once) */}
      <ToastContainer />

      <h1 className="title">Ambulance Service</h1>
      <div className="ambulance-container">
        <div className="ambulance-left">
          <img src={ambulanceImage} alt="Ambulance" className="ambulance-img" />
          <div className="ambulance-info">
            <h2>Fast & Reliable Ambulance Services</h2>
            <p>
              We provide 24/7 emergency and scheduled ambulance services across
              Bangladesh. Our AC and Life Support Ambulances are equipped with
              oxygen, first aid, and trained personnel to ensure safe and secure
              patient transportation. Whether it’s within the city or
              inter-district, we aim to reach within <strong>30 minutes</strong>
              .
            </p>
            <p>
              📞 Hotline: <strong>999</strong> or <strong>01700-000000</strong>
            </p>
          </div>
        </div>

        <div className="separator"></div>

        <div className="ambulance-right">
          <h3>Request an Ambulance</h3>
          <form onSubmit={handleSubmit} className="ambulance-form">
            <input
              type="text"
              name="from_location"
              placeholder="From (e.g., Dhaka)"
              value={formData.from_location}
              onChange={handleChange}
            />
            {errors.from_location && (
              <span className="error">{errors.from_location}</span>
            )}

            <input
              type="text"
              name="destination"
              placeholder="Destination (e.g., Khulna)"
              value={formData.destination}
              onChange={handleChange}
            />
            {errors.destination && (
              <span className="error">{errors.destination}</span>
            )}

            <select
              name="ambulance_type"
              value={formData.ambulance_type}
              onChange={handleChange}
            >
              <option value="">Select Ambulance Type</option>
              {ambulanceTypes.map((type) => (
                <option key={type.id} value={type.type}>
                  {type.type}
                </option>
              ))}
            </select>
            {errors.ambulance_type && (
              <span className="error">{errors.ambulance_type}</span>
            )}

            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
            {errors.date && <span className="error">{errors.date}</span>}

            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
            />
            {errors.time && <span className="error">{errors.time}</span>}

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <span className="error">{errors.name}</span>}

            <input
              type="text"
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
            />
            {errors.mobile && <span className="error">{errors.mobile}</span>}

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
>>>>>>> 5885cfdf (Appoinmnet added)
    </div>
  );
};

export default Ambulance;
