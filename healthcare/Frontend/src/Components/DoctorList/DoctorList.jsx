<<<<<<< HEAD
=======

>>>>>>> 5885cfdf (Appoinmnet added)
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./DoctorList.css";

// export default function Doctor() {
//   const [doctors, setDoctors] = useState([]);
//   const [loading, setLoading] = useState(false);
<<<<<<< HEAD
=======
//   const [selectedDoctor, setSelectedDoctor] = useState(null);
//   const [formData, setFormData] = useState({
//     date: "",
//     time: "",
//     reason: "",
//   });
>>>>>>> 5885cfdf (Appoinmnet added)

//   useEffect(() => {
//     fetchDoctors();
//   }, []);

//   const fetchDoctors = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get("http://127.0.0.1:8000/doctor/");
//       setDoctors(response.data);
//     } catch (error) {
//       console.error("Error fetching doctors:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

<<<<<<< HEAD
=======
//   const handleInputChange = (e) => {
//     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleAppointmentSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const token = localStorage.getItem("accessToken");
//       const response = await axios.post(
//         "http://127.0.0.1:8000/api/appointments/",
//         {
//           doctor_email: selectedDoctor.email,
//           date: formData.date,
//           time: formData.time,
//           reason: formData.reason,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       alert("Appointment requested successfully!");
//       setSelectedDoctor(null); // Close form
//     } catch (error) {
//       console.error("Error creating appointment:", error);
//       alert("Failed to request appointment.");
//     }
//   };

>>>>>>> 5885cfdf (Appoinmnet added)
//   return (
//     <div className="doctor-container">
//       <h2 className="doctor-title">Available Doctors</h2>

//       {loading ? (
//         <p>Loading doctors...</p>
//       ) : (
//         <div className="doctor-row">
//           {doctors.map((doctor) => (
<<<<<<< HEAD
//             <div className="doctor-card" key={doctor.id}>
=======
//             <div
//               className="doctor-card"
//               key={doctor.id}
//               onClick={() => setSelectedDoctor(doctor)}
//               style={{ cursor: "pointer" }}
//             >
>>>>>>> 5885cfdf (Appoinmnet added)
//               <img
//                 src={`http://127.0.0.1:8000${doctor.photo}`}
//                 alt={doctor.name}
//                 className="doctor-image"
//               />
//               <h3 className="doctor-name">{doctor.name}</h3>
<<<<<<< HEAD
//               <p>
//                 <strong>Email:</strong> {doctor.email}
//               </p>
//               <p>
//                 <strong>College:</strong> {doctor.college_name}
//               </p>
//               <p>
//                 <strong>Qualification:</strong> {doctor.qualification}
//               </p>
//               <p>
//                 <strong>Specialist:</strong> {doctor.specialist}
//               </p>
=======
//               <p><strong>Email:</strong> {doctor.email}</p>
//               <p><strong>College:</strong> {doctor.college_name}</p>
//               <p><strong>Qualification:</strong> {doctor.qualification}</p>
//               <p><strong>Specialist:</strong> {doctor.specialist}</p>
//               <p><strong>Bio:</strong> {doctor.bio}</p>
//               <p><strong>Experience:</strong> {doctor.experience} Years</p>
//               <p><strong>Consultation Fee:</strong> {doctor.consultation_fee}</p>
//               <p><strong>Available Time:</strong> {doctor.available_time}</p>
>>>>>>> 5885cfdf (Appoinmnet added)
//             </div>
//           ))}
//         </div>
//       )}
<<<<<<< HEAD
=======

//       {selectedDoctor && (
//         <div className="appointment-form">
//           <h3>Book Appointment with Dr. {selectedDoctor.name}</h3>
//           <form onSubmit={handleAppointmentSubmit}>
//             <input
//               type="date"
//               name="date"
//               value={formData.date}
//               onChange={handleInputChange}
//               required
//             />
//             <input
//               type="time"
//               name="time"
//               value={formData.time}
//               onChange={handleInputChange}
//               required
//             />
//             <textarea
//               name="reason"
//               placeholder="Reason for appointment"
//               value={formData.reason}
//               onChange={handleInputChange}
//               required
//             />
//             <button type="submit">Request Appointment</button>
//             <button type="button" onClick={() => setSelectedDoctor(null)}>Cancel</button>
//           </form>
//         </div>
//       )}
>>>>>>> 5885cfdf (Appoinmnet added)
//     </div>
//   );
// }

<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import axios from "axios";
=======


//2nd

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import "./DoctorList.css";

// export default function Doctor() {
//   const [doctors, setDoctors] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [selectedDoctor, setSelectedDoctor] = useState(null);
//   const [formData, setFormData] = useState({
//     date: "",
//     time: "",
//     reason: "",
//   });

//   const navigate = useNavigate(); // ✅ navigation hook

//   useEffect(() => {
//     fetchDoctors();
//   }, []);

//   const fetchDoctors = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get("http://127.0.0.1:8000/doctor/");
//       setDoctors(response.data);
//     } catch (error) {
//       console.error("Error fetching doctors:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleInputChange = (e) => {
//     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleAppointmentSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const token = localStorage.getItem("accessToken");
//       const response = await axios.post(
//         "http://127.0.0.1:8000/api/appointments/",
//         {
//           doctor_email: selectedDoctor.email,
//           date: formData.date,
//           time: formData.time,
//           reason: formData.reason,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       alert("Appointment requested successfully!");
//       setSelectedDoctor(null); // Close form
//     } catch (error) {
//       console.error("Error creating appointment:", error);
//       alert("Failed to request appointment.");
//     }
//   };

//   return (
//     <div className="doctor-container">
//       <h2 className="doctor-title">Available Doctors</h2>

//       {/* ✅ View My Appointments Button */}
//       <button
//         className="view-appointments-btn"
//         onClick={() => navigate("/my-appointments")}
//       >
//         View My Appointments
//       </button>

//       {loading ? (
//         <p>Loading doctors...</p>
//       ) : (
//         <div className="doctor-row">
//           {doctors.map((doctor) => (
//             <div
//               className="doctor-card"
//               key={doctor.id}
//               onClick={() => setSelectedDoctor(doctor)}
//               style={{ cursor: "pointer" }}
//             >
//               <img
//                 src={`http://127.0.0.1:8000${doctor.photo}`}
//                 alt={doctor.name}
//                 className="doctor-image"
//               />
//               <h3 className="doctor-name">{doctor.name}</h3>
//               <p><strong>Email:</strong> {doctor.email}</p>
//               <p><strong>College:</strong> {doctor.college_name}</p>
//               <p><strong>Qualification:</strong> {doctor.qualification}</p>
//               <p><strong>Specialist:</strong> {doctor.specialist}</p>
//               <p><strong>Bio:</strong> {doctor.bio}</p>
//               <p><strong>Experience:</strong> {doctor.experience} Years</p>
//               <p><strong>Consultation Fee:</strong> {doctor.consultation_fee}</p>
//               <p><strong>Available Time:</strong> {doctor.available_time}</p>
//             </div>
//           ))}
//         </div>
//       )}

//       {selectedDoctor && (
//         <div className="appointment-form">
//           <h3>Book Appointment with Dr. {selectedDoctor.name}</h3>
//           <form onSubmit={handleAppointmentSubmit}>
//             <input
//               type="date"
//               name="date"
//               value={formData.date}
//               onChange={handleInputChange}
//               required
//             />
//             <input
//               type="time"
//               name="time"
//               value={formData.time}
//               onChange={handleInputChange}
//               required
//             />
//             <textarea
//               name="reason"
//               placeholder="Reason for appointment"
//               value={formData.reason}
//               onChange={handleInputChange}
//               required
//             />
//             <button type="submit">Request Appointment</button>
//             <button type="button" onClick={() => setSelectedDoctor(null)}>
//               Cancel
//             </button>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// }

//3rd code 
// DoctorList.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
>>>>>>> 5885cfdf (Appoinmnet added)
import "./DoctorList.css";

export default function Doctor() {
  const [doctors, setDoctors] = useState([]);
<<<<<<< HEAD
=======
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
>>>>>>> 5885cfdf (Appoinmnet added)
  const [loading, setLoading] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    reason: "",
  });

<<<<<<< HEAD
=======
  const navigate = useNavigate();

>>>>>>> 5885cfdf (Appoinmnet added)
  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://127.0.0.1:8000/doctor/");
      setDoctors(response.data);
<<<<<<< HEAD
=======
      setFilteredDoctors(response.data);
>>>>>>> 5885cfdf (Appoinmnet added)
    } catch (error) {
      console.error("Error fetching doctors:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleAppointmentSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("accessToken");
<<<<<<< HEAD
      const response = await axios.post(
=======
      await axios.post(
>>>>>>> 5885cfdf (Appoinmnet added)
        "http://127.0.0.1:8000/api/appointments/",
        {
          doctor_email: selectedDoctor.email,
          date: formData.date,
          time: formData.time,
          reason: formData.reason,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Appointment requested successfully!");
<<<<<<< HEAD
      setSelectedDoctor(null); // Close form
=======
      setSelectedDoctor(null);
>>>>>>> 5885cfdf (Appoinmnet added)
    } catch (error) {
      console.error("Error creating appointment:", error);
      alert("Failed to request appointment.");
    }
  };

<<<<<<< HEAD
=======
  const handleSearchChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    const filtered = doctors.filter((doctor) =>
      doctor.specialist.toLowerCase().includes(value)
    );
    setFilteredDoctors(filtered);
  };

>>>>>>> 5885cfdf (Appoinmnet added)
  return (
    <div className="doctor-container">
      <h2 className="doctor-title">Available Doctors</h2>

<<<<<<< HEAD
=======
      {/* 🔍 Specialist Search */}
      <div className="doctor-search-container">
        <input
          type="text"
          placeholder="Search by specialist..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="doctor-search-input"
        />
        <button className="view-appointments-btn" onClick={() => navigate("/my-appointments")}>
          View My Appointments
        </button>
      </div>

>>>>>>> 5885cfdf (Appoinmnet added)
      {loading ? (
        <p>Loading doctors...</p>
      ) : (
        <div className="doctor-row">
<<<<<<< HEAD
          {doctors.map((doctor) => (
=======
          {filteredDoctors.map((doctor) => (
>>>>>>> 5885cfdf (Appoinmnet added)
            <div
              className="doctor-card"
              key={doctor.id}
              onClick={() => setSelectedDoctor(doctor)}
<<<<<<< HEAD
              style={{ cursor: "pointer" }}
=======
>>>>>>> 5885cfdf (Appoinmnet added)
            >
              <img
                src={`http://127.0.0.1:8000${doctor.photo}`}
                alt={doctor.name}
                className="doctor-image"
              />
              <h3 className="doctor-name">{doctor.name}</h3>
              <p><strong>Email:</strong> {doctor.email}</p>
              <p><strong>College:</strong> {doctor.college_name}</p>
              <p><strong>Qualification:</strong> {doctor.qualification}</p>
              <p><strong>Specialist:</strong> {doctor.specialist}</p>
              <p><strong>Bio:</strong> {doctor.bio}</p>
              <p><strong>Experience:</strong> {doctor.experience} Years</p>
              <p><strong>Consultation Fee:</strong> {doctor.consultation_fee}</p>
              <p><strong>Available Time:</strong> {doctor.available_time}</p>
            </div>
          ))}
        </div>
      )}

      {selectedDoctor && (
        <div className="appointment-form">
          <h3>Book Appointment with Dr. {selectedDoctor.name}</h3>
          <form onSubmit={handleAppointmentSubmit}>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              required
            />
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleInputChange}
              required
            />
            <textarea
              name="reason"
              placeholder="Reason for appointment"
              value={formData.reason}
              onChange={handleInputChange}
              required
            />
            <button type="submit">Request Appointment</button>
<<<<<<< HEAD
            <button type="button" onClick={() => setSelectedDoctor(null)}>Cancel</button>
=======
            <button type="button" onClick={() => setSelectedDoctor(null)}>
              Cancel
            </button>
>>>>>>> 5885cfdf (Appoinmnet added)
          </form>
        </div>
      )}
    </div>
  );
}
