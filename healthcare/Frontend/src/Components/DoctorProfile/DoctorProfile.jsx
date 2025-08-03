
<<<<<<< HEAD
// //updated jsx file for doctor profile and with  update functionality  ===2nd==== modification
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./DoctorProfile.css";
=======
// //updated on 21/05/2025 that don't modify other files css   and protected

// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import styles from "./DoctorProfile.module.css";
>>>>>>> 5885cfdf (Appoinmnet added)

// export default function DoctorProfile() {
//   const navigate = useNavigate();
//   const [doctor, setDoctor] = useState(null);
//   const [formData, setFormData] = useState({});

//   useEffect(() => {
//     const doctorData = localStorage.getItem("doctor");
//     if (doctorData) {
//       const parsed = JSON.parse(doctorData);
//       setDoctor(parsed);
//       setFormData(parsed);
//     } else {
//       navigate("/doctorlogin");
//     }
//   }, [navigate]);

//   if (!doctor) return <p>Loading profile...</p>;

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleFileChange = (e) => {
//     setFormData((prev) => ({ ...prev, photo: e.target.files[0] }));
//   };

//   const handleUpdate = async (e) => {
//     e.preventDefault();
//     const form = new FormData();
//     for (const key in formData) {
//       form.append(key, formData[key]);
//     }

//     try {
//       const response = await fetch(
//         `http://127.0.0.1:8000/doctor_auth/update/${doctor.doctor_id}/`,
//         {
//           method: "PUT",
//           body: form,
//         }
//       );

//       if (response.ok) {
//         alert("Profile updated successfully!");
//         const updatedDoctor = await response.json();
//         localStorage.setItem("doctor", JSON.stringify(updatedDoctor));
//       } else {
//         alert("Failed to update profile.");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };
<<<<<<< HEAD

//   return (
//     <div class="doctor-profile">
//       <div className="profile-wrapper">
//         <h2>DOCTOR'S Profile</h2>
//         <div className="profile-card">
=======
  

//   return (
//     <div className={styles.doctorProfile}>
//       <div className={styles.profileWrapper}>
//         <h2 className={styles.title}>DOCTOR'S Profile</h2>
//         <div className={styles.profileCard}>
>>>>>>> 5885cfdf (Appoinmnet added)
//           {doctor.photo_url && (
//             <img
//               src={`http://127.0.0.1:8000${doctor.photo_url}`}
//               alt="Doctor"
<<<<<<< HEAD
//               className="profile-photo"
//             />
//           )}
//           <form onSubmit={handleUpdate} encType="multipart/form-data">
//             <label>New Username:</label>
=======
//               className={styles.profilePhoto}
//             />
//           )}
//           <form
//             onSubmit={handleUpdate}
//             encType="multipart/form-data"
//             className={styles.form}
//           >
//             <label>Name:</label>
>>>>>>> 5885cfdf (Appoinmnet added)
//             <input
//               name="name"
//               value={formData.name || ""}
//               onChange={handleChange}
//             />
<<<<<<< HEAD
//             <small>* you can keep it or update it with proper validation</small>

            
=======
//             <small>* You can keep it or update it with proper validation</small>
>>>>>>> 5885cfdf (Appoinmnet added)

//             <label>Profile Image:</label>
//             <input type="file" onChange={handleFileChange} />

//             <label>Specialist:</label>
//             <input
//               name="specialist"
//               value={formData.specialist || ""}
//               onChange={handleChange}
//             />

//             <label>Qualification:</label>
//             <input
//               name="qualification"
//               value={formData.qualification || ""}
//               onChange={handleChange}
//             />

//             <label>College Name:</label>
//             <input
//               name="college_name"
//               value={formData.college_name || ""}
//               onChange={handleChange}
//             />

//             <label>Experience:</label>
//             <input
//               name="experience"
//               value={formData.experience || ""}
//               onChange={handleChange}
//             />

//             <label>Consultation Fee:</label>
//             <input
//               name="consultation_fee"
//               value={formData.consultation_fee || ""}
//               onChange={handleChange}
//             />

//             <label>Available Time:</label>
//             <input
//               name="available_time"
//               value={formData.available_time || ""}
//               onChange={handleChange}
//             />

//             <label>Bio:</label>
//             <textarea
//               name="bio"
//               value={formData.bio || ""}
//               onChange={handleChange}
//             ></textarea>

<<<<<<< HEAD
//             <button type="submit" className="update-btn">
//               Update Profile
//             </button>
//           </form>
//           <button
//             className="logout-btn"
=======
//             <button type="submit" className={styles.updateBtn}>
//               Update Profile
//             </button>
//           </form>

//           <button
//             className={styles.logoutBtn}
>>>>>>> 5885cfdf (Appoinmnet added)
//             onClick={() => {
//               localStorage.clear();
//               navigate("/doctorlogin");
//             }}
//           >
//             Logout
//           </button>
<<<<<<< HEAD
=======
        
>>>>>>> 5885cfdf (Appoinmnet added)
//         </div>
//       </div>
//     </div>
//   );
// }

<<<<<<< HEAD


//updated on 21/05/2025 that don't modify other files css   and protected

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
=======
// updated on 21/05/2025


import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { JitsiMeeting } from "@jitsi/react-sdk";  // ✅ Import Jitsi SDK
>>>>>>> 5885cfdf (Appoinmnet added)
import styles from "./DoctorProfile.module.css";

export default function DoctorProfile() {
  const navigate = useNavigate();
  const [doctor, setDoctor] = useState(null);
  const [formData, setFormData] = useState({});
<<<<<<< HEAD
=======
  const [showMeeting, setShowMeeting] = useState(false); // ✅ Track if meeting should open
>>>>>>> 5885cfdf (Appoinmnet added)

  useEffect(() => {
    const doctorData = localStorage.getItem("doctor");
    if (doctorData) {
      const parsed = JSON.parse(doctorData);
      setDoctor(parsed);
      setFormData(parsed);
    } else {
      navigate("/doctorlogin");
    }
  }, [navigate]);

  if (!doctor) return <p>Loading profile...</p>;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, photo: e.target.files[0] }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = new FormData();
    for (const key in formData) {
      form.append(key, formData[key]);
    }

    try {
      const response = await fetch(
        `http://127.0.0.1:8000/doctor_auth/update/${doctor.doctor_id}/`,
        {
          method: "PUT",
          body: form,
        }
      );

      if (response.ok) {
        alert("Profile updated successfully!");
        const updatedDoctor = await response.json();
        localStorage.setItem("doctor", JSON.stringify(updatedDoctor));
      } else {
        alert("Failed to update profile.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

<<<<<<< HEAD
=======
  // ✅ Start video call handler
  const startCall = () => {
    setShowMeeting(true); // Show the meeting iframe
  };

>>>>>>> 5885cfdf (Appoinmnet added)
  return (
    <div className={styles.doctorProfile}>
      <div className={styles.profileWrapper}>
        <h2 className={styles.title}>DOCTOR'S Profile</h2>
        <div className={styles.profileCard}>
          {doctor.photo_url && (
            <img
              src={`http://127.0.0.1:8000${doctor.photo_url}`}
              alt="Doctor"
              className={styles.profilePhoto}
            />
          )}
<<<<<<< HEAD
          <form
            onSubmit={handleUpdate}
            encType="multipart/form-data"
            className={styles.form}
          >
            <label>Name:</label>
            <input
              name="name"
              value={formData.name || ""}
              onChange={handleChange}
            />
            <small>* You can keep it or update it with proper validation</small>

            <label>Profile Image:</label>
            <input type="file" onChange={handleFileChange} />

            <label>Specialist:</label>
            <input
              name="specialist"
              value={formData.specialist || ""}
              onChange={handleChange}
            />

            <label>Qualification:</label>
            <input
              name="qualification"
              value={formData.qualification || ""}
              onChange={handleChange}
            />

            <label>College Name:</label>
            <input
              name="college_name"
              value={formData.college_name || ""}
              onChange={handleChange}
            />

            <label>Experience:</label>
            <input
              name="experience"
              value={formData.experience || ""}
              onChange={handleChange}
            />

            <label>Consultation Fee:</label>
            <input
              name="consultation_fee"
              value={formData.consultation_fee || ""}
              onChange={handleChange}
            />

            <label>Available Time:</label>
            <input
              name="available_time"
              value={formData.available_time || ""}
              onChange={handleChange}
            />

            <label>Bio:</label>
            <textarea
              name="bio"
              value={formData.bio || ""}
              onChange={handleChange}
            ></textarea>

            <button type="submit" className={styles.updateBtn}>
              Update Profile
            </button>
          </form>

          <button
            className={styles.logoutBtn}
            onClick={() => {
              localStorage.clear();
              navigate("/doctorlogin");
            }}
          >
            Logout
          </button>
=======

          {/* ✅ Show form only if not in meeting */}
          {!showMeeting ? (
            <>
              <form
                onSubmit={handleUpdate}
                encType="multipart/form-data"
                className={styles.form}
              >
                <label>Name:</label>
                <input
                  name="name"
                  value={formData.name || ""}
                  onChange={handleChange}
                />
                <small>* You can keep it or update it with proper validation</small>

                <label>Profile Image:</label>
                <input type="file" onChange={handleFileChange} />

                <label>Specialist:</label>
                <input
                  name="specialist"
                  value={formData.specialist || ""}
                  onChange={handleChange}
                />

                <label>Qualification:</label>
                <input
                  name="qualification"
                  value={formData.qualification || ""}
                  onChange={handleChange}
                />

                <label>College Name:</label>
                <input
                  name="college_name"
                  value={formData.college_name || ""}
                  onChange={handleChange}
                />

                <label>Experience:</label>
                <input
                  name="experience"
                  value={formData.experience || ""}
                  onChange={handleChange}
                />

                <label>Consultation Fee:</label>
                <input
                  name="consultation_fee"
                  value={formData.consultation_fee || ""}
                  onChange={handleChange}
                />

                <label>Available Time:</label>
                <input
                  name="available_time"
                  value={formData.available_time || ""}
                  onChange={handleChange}
                />

                <label>Bio:</label>
                <textarea
                  name="bio"
                  value={formData.bio || ""}
                  onChange={handleChange}
                ></textarea>
                {/* <button
                  className={styles.viewAppointmentsBtn}
                  onClick={() => navigate("/doctor-appointments")}
                >
                  View Patient Appointments
                </button> */}



                <button type="submit" className={styles.updateBtn}>
                  Update Profile
                </button>
              </form>

              <button
                className={styles.videoCallBtn}
                onClick={() => navigate("/doctor-appointments")}
              >
                 View Patient Appointments
              </button>

              <button
                className={styles.logoutBtn}
                onClick={() => {
                  localStorage.clear();
                  navigate("/doctorlogin");
                }}
              >
                Logout
              </button>
            </>
          ) : (
            // ✅ Show Jitsi Meeting when call starts
            <JitsiMeeting
              domain="meet.jit.si"
              roomName={`doctor_${doctor.doctor_id}_meeting`}
              configOverwrite={{
                startWithAudioMuted: true,
                disableModeratorIndicator: true,
                startScreenSharing: true,
                enableEmailInStats: false,
              }}
              interfaceConfigOverwrite={{
                DISABLE_JOIN_LEAVE_NOTIFICATIONS: true,
              }}
              userInfo={{
                displayName: doctor.name,
              }}
              getIFrameRef={(iframeRef) => {
                iframeRef.style.height = "600px";
                iframeRef.style.width = "100%";
              }}
            />
          )}
>>>>>>> 5885cfdf (Appoinmnet added)
        </div>
      </div>
    </div>
  );
}
