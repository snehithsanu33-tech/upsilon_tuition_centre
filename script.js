// ================= ADMISSION FORM =================

const admissionForm = document.getElementById("admissionForm");

if (admissionForm) {

    admissionForm.addEventListener("submit", function (event) {

        // Stop the form from refreshing the page
        event.preventDefault();

        // Get values
        const studentName = document.getElementById("studentName").value.trim();
        const parentName = document.getElementById("parentName").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const selectedClass = document.getElementById("class").value;
        const message = document.getElementById("message").value.trim();

        // Check student name
        if (studentName === "") {
            alert("Please enter the student's name.");
            return;
        }

        // Check parent name
        if (parentName === "") {
            alert("Please enter the parent/guardian name.");
            return;
        }

        // Check phone
        if (phone === "") {
            alert("Please enter a phone number.");
            return;
        }

        // Check phone length
        if (!/^[0-9]{10}$/.test(phone)) {
            alert("Please enter a valid 10-digit phone number.");
            return;
        }

        // Check class
        if (selectedClass === "") {
            alert("Please select a class.");
            return;
        }

        // ================= SUCCESS =================

        const whatsappMessage =
    "Hello Upsilon Tuition Centre,%0A%0A" +
    "*New Admission Enquiry*%0A%0A" +
    "Student Name: " + encodeURIComponent(studentName) + "%0A" +
    "Parent/Guardian Name: " + encodeURIComponent(parentName) + "%0A" +
    "Phone Number: " + encodeURIComponent(phone) + "%0A" +
    "Class: " + encodeURIComponent(selectedClass) + "%0A" +
    "Message: " + encodeURIComponent(message || "No message") + "%0A%0A" +
    "Please contact me regarding admission.";

const whatsappURL =
    "https://wa.me/918606738323?text=" + whatsappMessage;

window.open(whatsappURL, "_blank");

admissionForm.reset();
    });
};


// ================= MOBILE MENU =================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.querySelector(".nav-menu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", function () {

        navMenu.classList.toggle("active");

        const isOpen = navMenu.classList.contains("active");

        menuToggle.setAttribute("aria-expanded", isOpen);
    });

    const navLinks = document.querySelectorAll(".nav-menu a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navMenu.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");
        });
    });
}