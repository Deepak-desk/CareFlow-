CareFlow - Smart Hospital Kiosk
<p align="center">
<!-- Use a relative path to the image inside your project -->
<img src="./assets/careflow-logo.png" alt="CareFlow Logo" width="120">
</p>

<h3 align="center">A modern, multi-language patient management kiosk designed to simplify the hospital experience.</h3>

<p align="center">
<!-- Use a relative path for the screenshot as well -->
<img src="./assets/careflow-screenshot.png" alt="CareFlow Application Screenshot" width="700">
<br>
<em>CareFlow's main dashboard in English.</em>
</p>
🌟 Introduction
CareFlow is a patient-facing web application designed to run on kiosks in a hospital lobby. It tackles the confusion and stress of hospital visits by providing a simple, intuitive, and multi-language interface for core patient services. From getting a consultation token to booking a bed, CareFlow streamlines the entire process, reducing wait times and improving patient satisfaction.

This project is built with vanilla HTML, CSS, and JavaScript (ES6), focusing on a clean, responsive design and a robust, object-oriented application structure without relying on external frameworks.

✨ Core Features
The application is packed with features designed to create a seamless patient journey:

📊 AI OPD Forecast: Displays a real-time prediction of patient traffic and average wait times, helping manage expectations.

🛌 Live Bed Availability & Booking: Shows the number of available beds across all wards and allows users to book a bed through an interactive dialog, complete with special service add-ons and multiple payment options.

🌐 Multi-Language Support: Full internationalization with support for English, Hindi, Tamil, and Malayalam. The entire UI, including doctor names, dynamically updates based on user selection.

👨‍⚕️ Dynamic Doctor List: Patients can view a list of available doctors, filter them by department, and see their status (Available, Busy, Not Arrived) and precise location (Room & Floor).

🎟️ Smart Token System:

General OPD Token: A large, prominent button for patients who need to see the next available doctor.

Doctor-Specific Token: Option to get a token for a specific doctor directly from their listing.

🚨 Emergency Alert System: A dedicated "Emergency" button that triggers a high-priority alert modal, instructing the user to proceed to the ER immediately.

👋 On-Demand Help Desk: A floating "Help Desk" button that assures users a staff member is on their way to provide assistance.

💳 Flexible Payment Options: The bed booking system simulates payment via UPI/QR Code or provides clear instructions for paying with cash at a designated machine.

🛠️ Tech Stack
This project is intentionally kept simple and accessible, using only core web technologies.

HTML5: For the semantic structure and layout of the application.

CSS3: For all styling, responsiveness, and the modern, clean user interface.

JavaScript (ES6): For all application logic, including the translation engine, state management, and dynamic DOM manipulation. All logic is encapsulated within a single CareFlowApp class for clean, maintainable code.

🚀 Getting Started
To run this project on your local machine, follow these simple steps:

Clone the repository:

git clone [https://github.com/your-username/careflow-kiosk.git](https://github.com/your-username/careflow-kiosk.git)

Navigate to the project directory:

cd careflow-kiosk

Open the index.html file:
Since this is a vanilla web project with no build steps, you can simply open the index.html file directly in your web browser.

On Windows, you can type start index.html in the command line.

On macOS, you can type open index.html in the command line.

Alternatively, just double-click the file in your file explorer.

⚙️ How It Works
The application's logic is self-contained and managed primarily by the CareFlowApp class in app.js.

Class-Based Architecture: All functionality, data, and state are managed within the CareFlowApp class. This includes event listeners, rendering functions, and modal management.

State Management: The application's state (doctor lists, bed availability, etc.) is stored in a this.data object within the class. In a real-world scenario, this would be replaced with API calls to a backend service.

Translation Engine: The this.translations object holds all the language strings. The setLanguage() method dynamically updates the text content of all elements with a data-lang attribute, providing seamless language switching.

Event-Driven UI: The application is fully interactive. All buttons and inputs have event listeners that call specific methods within the class to open modals, filter data, or update the UI.

📸 Screenshots
Multi-Language support in action.

Bed booking dialog with clear instructions for cash payment.

Doctor list showing translated names and locations.

Simple and clear token confirmation for the patient.

💡 Future Enhancements
This project serves as a strong foundation. Future improvements could include:

Backend Integration: Connect the application to a real backend (e.g., using Firebase or a Node.js/Express server) to manage data dynamically.

Real-time Updates: Implement WebSockets to update doctor availability and queue numbers in real-time without needing to refresh.

User Authentication: Add a simple login system for patients to view their appointment history.

Payment Gateway: Integrate a real payment gateway like Stripe or Razorpay for bed booking payments.

Admin Dashboard: Create a separate interface for hospital staff to manage doctor schedules, bed statuses, and patient queues.

📄 License
This project is licensed under the MIT License. See the LICENSE file for details.

Created with care to improve the patient experience.
