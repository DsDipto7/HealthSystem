// import React, { useEffect, useState } from "react";
// import axios from "axios";
// // import "./AppointmentTable.css"; // optional styling

// export default function MyAppointments() {
//   const [appointments, setAppointments] = useState([]);

//   useEffect(() => {
//     fetchAppointments();
//   }, []);

//   const fetchAppointments = async () => {
//     try {
//       const token = localStorage.getItem("accessToken");
//       const response = await axios.get("http://127.0.0.1:8000/api/appointments/my/", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setAppointments(response.data);
//     } catch (error) {
//       console.error("Error fetching appointments:", error);
//     }
//   };

//   return (
//     <div className="appointments-container">
//       <h2>Your Appointments</h2>
//       {appointments.length === 0 ? (
//         <p>No appointments yet.</p>
//       ) : (
//         <table className="appointment-table">
//           <thead>
//             <tr>
//               <th>Doctor</th>
//               <th>Date</th>
//               <th>Time</th>
//               <th>Reason</th>
//               <th>Status</th>
//               <th>Meeting</th>
//             </tr>
//           </thead>
//           <tbody>
//             {appointments.map((appt) => (
//               <tr key={appt.id}>
//                 <td>{appt.doctor.name}</td>
//                 <td>{appt.date}</td>
//                 <td>{appt.time}</td>
//                 <td>{appt.reason}</td>
//                 <td>{appt.status}</td>
//                 <td>
//                   {appt.status === "accepted" ? (
//                     <a
//                       href={`https://meet.jit.si/${appt.room}`}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       Join
//                     </a>
//                   ) : (
//                     "-"
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// }

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import styles from "./MyAppointments.module.css";

// export default function MyAppointments() {
//   const [appointments, setAppointments] = useState([]);

//   useEffect(() => {
//     fetchAppointments();
//   }, []);

//   const fetchAppointments = async () => {
//     try {
//       const token = localStorage.getItem("accessToken");
//       const response = await axios.get("http://127.0.0.1:8000/api/appointments/my/", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setAppointments(response.data);
//     } catch (error) {
//       console.error("Error fetching appointments:", error);
//     }
//   };

//   const deleteAppointment = async (id) => {
//     const confirmDelete = window.confirm("Are you sure you want to delete this appointment?");
//     if (!confirmDelete) return;

//     try {
//       const token = localStorage.getItem("accessToken");
//       await axios.delete(`http://127.0.0.1:8000/api/appointments/delete/${id}/`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setAppointments((prev) => prev.filter((a) => a.id !== id));
//     } catch (error) {
//       console.error("Failed to delete appointment", error);
//     }
//   };

//   return (
//     <div className={styles.appointmentsContainer}>
//       <h2>Your Appointments</h2>
//       {appointments.length === 0 ? (
//         <p>No appointments yet.</p>
//       ) : (
//         <table className={styles.appointmentTable}>
//           <thead>
//             <tr>
//               <th>Doctor</th>
//               <th>Date</th>
//               <th>Time</th>
//               <th>Reason</th>
//               <th>Status</th>
//               <th>Meeting</th>
//             </tr>
//           </thead>
//           <tbody>
//             {appointments.map((appt) => (
//               <tr key={appt.id}>
//                 <td>{appt.doctor.name}</td>
//                 <td>{appt.date}</td>
//                 <td>{appt.time}</td>
//                 <td>{appt.reason}</td>
//                 <td>
//                   {appt.status}
//                   <br />
//                   <button onClick={() => deleteAppointment(appt.id)}>
//                     Delete
//                   </button>
//                 </td>
//                 <td>
//                   {appt.status === "accepted" ? (
//                     appt.is_call_ended ? (
//                       <span>Call Ended</span>
//                     ) : appt.is_call_started ? (
//                       <span>Call Joined</span>
//                     ) : (
//                       <a
//                         href={`/videocall/${appt.doctor.id}/${appt.id}`}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         Join
//                       </a>
//                     )
//                   ) : (
//                     "-"
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// }


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import styles from "./MyAppointments.module.css";

// export default function MyAppointments() {
//   const [appointments, setAppointments] = useState([]);

//   useEffect(() => {
//     fetchAppointments();
//   }, []);

//   const fetchAppointments = async () => {
//     try {
//       const token = localStorage.getItem("accessToken");
//       const response = await axios.get("http://127.0.0.1:8000/api/appointments/my/", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setAppointments(response.data);
//     } catch (error) {
//       console.error("Error fetching appointments:", error);
//     }
//   };

//   const deleteAppointment = async (id) => {
//     const confirmDelete = window.confirm("Are you sure you want to delete this appointment?");
//     if (!confirmDelete) return;

//     try {
//       const token = localStorage.getItem("accessToken");
//       await axios.delete(`http://127.0.0.1:8000/api/appointments/delete/${id}/`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setAppointments((prev) => prev.filter((a) => a.id !== id));
//     } catch (error) {
//       console.error("Failed to delete appointment", error);
//     }
//   };

//   return (
//     <div className={styles.appointmentsContainer}>
//       <h2>Your Appointments</h2>
//       {appointments.length === 0 ? (
//         <p>No appointments yet.</p>
//       ) : (
//         <table className={styles.appointmentTable}>
//           <thead>
//             <tr>
//               <th>Doctor</th>
//               <th>Date</th>
//               <th>Time</th>
//               <th>Reason</th>
//               <th>Status</th>
//               <th>Meeting</th>
//             </tr>
//           </thead>
//           <tbody>
//             {appointments.map((appt) => (
//               <tr key={appt.id}>
//                 <td>{appt.doctor.name}</td>
//                 <td>{appt.date}</td>
//                 <td>{appt.time}</td>
//                 <td>{appt.reason}</td>
//                 <td>
//                   {appt.status}
//                   <br />
//                   <button onClick={() => deleteAppointment(appt.id)}>
//                     Delete
//                   </button>
//                 </td>
//                 <td>
//                   {appt.status === "accepted" ? (
//                     appt.is_call_ended ? (
//                       <span>Call Ended</span>
//                     ) : appt.is_call_started ? (
//                       <span>Call Joined</span>
//                     ) : (
//                       <a
//                         href={`https://meet.jit.si/${appt.room}`}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         Join
//                       </a>
//                     )
//                   ) : (
//                     "-"
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// }

//2nd version  

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import styles from "./MyAppointments.module.css";

// export default function MyAppointments() {
//   const [appointments, setAppointments] = useState([]);

//   useEffect(() => {
//     fetchAppointments();
//   }, []);

//   const fetchAppointments = async () => {
//     try {
//       const token = localStorage.getItem("accessToken");
//       const response = await axios.get("http://127.0.0.1:8000/api/appointments/my/", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setAppointments(response.data);
//     } catch (error) {
//       console.error("Error fetching appointments:", error);
//     }
//   };

//   const deleteAppointment = async (id) => {
//     const confirmDelete = window.confirm("Are you sure you want to delete this appointment?");
//     if (!confirmDelete) return;

//     try {
//       const token = localStorage.getItem("accessToken");
//       await axios.delete(`http://127.0.0.1:8000/api/appointments/delete/${id}/`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setAppointments((prev) => prev.filter((a) => a.id !== id));
//     } catch (error) {
//       console.error("Failed to delete appointment", error);
//     }
//   };

//   return (
//     <div className={styles.appointmentsContainer}>
//       <h2>Your Appointments</h2>
//       {appointments.length === 0 ? (
//         <p>No appointments yet.</p>
//       ) : (
//         <table className={styles.appointmentTable}>
//           <thead>
//             <tr>
//               <th>Doctor</th>
//               <th>Date</th>
//               <th>Time</th>
//               <th>Reason</th>
//               <th>Status</th>
//               <th>Meeting</th>
//             </tr>
//           </thead>
//           <tbody>
//             {appointments.map((appt) => (
//               <tr key={appt.id}>
//                 <td>{appt.doctor.name}</td>
//                 <td>{appt.date}</td>
//                 <td>{appt.time}</td>
//                 <td>{appt.reason}</td>
//                 <td>
//                   {appt.status}
//                   <br />
//                   <button onClick={() => deleteAppointment(appt.id)}>
//                     Delete
//                   </button>
//                 </td>
//                 <td>
//                   {appt.status === "accepted" ? (
//                     appt.is_call_ended ? (
//                       <span>Call Ended</span>
//                     ) : appt.is_call_started ? (
//                       <span>Call Joined</span>
//                     ) : appt.room ? (
//                       <a
//                         href={`https://meet.jit.si/${appt.room}`}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         Join
//                       </a>
//                     ) : (
//                       <span>Room not ready</span>
//                     )
//                   ) : (
//                     "-"
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// }


//3rd version  
// MyAppointments.jsx


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import styles from "./MyAppointments.module.css";

// export default function MyAppointments() {
//   const [appointments, setAppointments] = useState([]);

//   useEffect(() => {
//     fetchAppointments();
//   }, []);

//   const fetchAppointments = async () => {
//     try {
//       const token = localStorage.getItem("accessToken");
//       const response = await axios.get("http://127.0.0.1:8000/api/appointments/my/", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setAppointments(response.data);
//     } catch (error) {
//       console.error("Error fetching appointments:", error);
//     }
//   };

//   const deleteAppointment = async (id) => {
//     const confirmDelete = window.confirm("Are you sure you want to delete this appointment?");
//     if (!confirmDelete) return;

//     try {
//       const token = localStorage.getItem("accessToken");
//       await axios.delete(`http://127.0.0.1:8000/api/appointments/delete/${id}/`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setAppointments((prev) => prev.filter((a) => a.id !== id));
//     } catch (error) {
//       console.error("Failed to delete appointment", error);
//     }
//   };

//   return (
//     <div className={styles.appointmentsContainer}>
//       <h2>Your Appointments</h2>
//       {appointments.length === 0 ? (
//         <p>No appointments yet.</p>
//       ) : (
//         <table className={styles.appointmentTable}>
//           <thead>
//             <tr>
//               <th>Doctor</th>
//               <th>Date</th>
//               <th>Time</th>
//               <th>Reason</th>
//               <th>Status</th>
//               <th>Meeting</th>
//             </tr>
//           </thead>
//           <tbody>
//             {appointments.map((appt) => (
//               <tr key={appt.id}>
//                 <td>{appt.doctor.name}</td>
//                 <td>{appt.date}</td>
//                 <td>{appt.time}</td>
//                 <td>{appt.reason}</td>
//                 <td>
//                   {appt.status}
//                   <br />
//                   <button onClick={() => deleteAppointment(appt.id)}>
//                     Delete
//                   </button>
//                 </td>
//                 <td>
//                   {appt.room && appt.status === "accepted" ? (
//                     <a
//                       href={`https://meet.jit.si/${appt.room}`}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       Join
//                     </a>
//                   ) : (
//                     <span>{appt.status === "accepted" ? "Room not ready" : "-"}</span>
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// }


//4th code 
// MyAppointments.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./MyAppointments.module.css";

export default function MyAppointments() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchAppointments();
  }, []);

  // ✅ Log appointments when updated
  useEffect(() => {
    console.log("Fetched appointments:", appointments);
  }, [appointments]);

  const fetchAppointments = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      const response = await axios.get("http://127.0.0.1:8000/api/appointments/my/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setAppointments(response.data);
    } catch (error) {
      console.error("Error fetching appointments:", error);
    }
  };

  const deleteAppointment = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this appointment?");
    if (!confirmDelete) return;

    try {
      const token = localStorage.getItem("accessToken");
      await axios.delete(`http://127.0.0.1:8000/api/appointments/delete/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setAppointments((prev) => prev.filter((a) => a.id !== id));
    } catch (error) {
      console.error("Failed to delete appointment", error);
    }
  };

  return (
    <div className={styles.appointmentsContainer}>
      <h2>Your Appointments</h2>
      {appointments.length === 0 ? (
        <p>No appointments yet.</p>
      ) : (
        <table className={styles.appointmentTable}>
          <thead>
            <tr>
              <th>Doctor</th>
              <th>Date</th>
              <th>Time</th>
              <th>Reason</th>
              <th>Status</th>
              <th>Meeting</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appt) => (
              <tr key={appt.id}>
                <td>{appt.doctor.name}</td>
                <td>{appt.date}</td>
                <td>{appt.time}</td>
                <td>{appt.reason}</td>
                <td>
                  {appt.status}
                  <br />
                  <button onClick={() => deleteAppointment(appt.id)}>
                    Delete
                  </button>
                </td>
                <td>
                  {appt.room && appt.status === "accepted" ? (
                    <a
                      href={`https://meet.jit.si/${appt.room}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Join
                    </a>
                  ) : (
                    <span>{appt.status === "accepted" ? "Room not ready" : "-"}</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
