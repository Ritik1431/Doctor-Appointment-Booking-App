let appointments = [];
let appointmentId = 0;

const doctors = [
    { name: "Dr. Smith", id: 1 },
    { name: "Dr. Singh", id: 2 },
    { name: "Dr. Jaggi", id: 3 },
    { name: "Dr. Brown", id: 4 },
    { name: "Dr. Patel", id: 5 },
    { name: "Dr. Lee", id: 6 },
    { name: "Dr. Garcia", id: 7 },
    { name: "Dr. Kim", id: 8 },
    { name: "Dr. Chen", id: 9 },
    { name: "Dr. Kumar", id: 10 }
];

(function initializeDoctors() {
    const select = document.getElementById("doctorName");
    doctors.forEach(doctor => {
        const option = document.createElement("option");
        option.value = doctor.name;
        option.text = doctor.name;
        select.add(option);
    });
})();

function bookAppointment(patientName, doctorName, appointmentDate, appointmentTime) {
    appointmentId++;
    appointments.push({ id: appointmentId, patientName, doctorName, appointmentDate, appointmentTime });
    clearInputs();
    alert("Appointment Successfully Added.");
}

function showAppointments() {
    if (appointments.length == 0)
    {
        document.getElementById("appointmentDisplay").textContent = "No Appointments yet."
        return;
    }
    let output = "Appointments:\n";
    appointments.forEach(appointment => {
        output += `ID: ${appointment.id}, Patient: ${appointment.patientName}, Doctor: ${appointment.doctorName}, Date: ${appointment.appointmentDate}, Time: ${appointment.appointmentTime}\n`;
    });
    document.getElementById("appointmentDisplay").textContent = output;
}
function clearInputs() {
    const inputElements = document.querySelectorAll("input");
    inputElements.forEach(input => {
        input.value = "";
    });

    if (inputElements.length > 0)
    {
        inputElements[0].focus();
    }
}
function handleAppointment() {
    let patientName = document.getElementById("patientName").value;
    let doctorName = document.getElementById("doctorName").value;
    let appointmentDate = document.getElementById("appointmentDate").value;
    let appointmentTime = document.getElementById("appointmentTime").value;

    if (!patientName || !doctorName || !appointmentDate || !appointmentTime) {
        alert("Please fill in all details.");
        return;
    }

    bookAppointment(patientName, doctorName, appointmentDate, appointmentTime);
}
(function showDoctors() {
    let count = 0;
    let doctorCard = document.getElementById("doctorCards");
    let output = "";
    doctors.forEach(doc => {
        count++;
        output += `${count} )  ${doc.name} <br> `;
    });
    doctorCard.innerHTML = output;
})();
function cancelAppointment() {
    let cancelId = document.getElementById("cancelAppointmentId").value;
    cancelId = parseInt(cancelId, 10);
    if (isNaN(cancelId)) {
        alert("please enter the valid appointment ID");
    }
    const initialLength = appointments.length;
    appointments = appointments.filter(appointment => appointment.id !== cancelId);
    if (appointments.length === initialLength)
    {
        alert(`Appointment with ID ${cancelId} not found!!`);
    }
    else {
        alert(`Appointment with ID ${cancelId} has been canceled..`);
        showAppointments();
    }

}