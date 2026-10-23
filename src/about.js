export function about() {
    const about = document.querySelector("#content");
    about.replaceChildren();

    const openingHours = [
        { day: "Monday", hours: "9 AM – 11 PM" },
        { day: "Tuesday", hours: "9 AM – 11 PM" },
        { day: "Wednesday", hours: "9 AM – 10:45 PM" },
        { day: "Thursday", hours: "9 AM – 11 PM" },
        { day: "Friday", hours: "9 AM – 11 PM" },
        { day: "Saturday", hours: "9 AM – 11 PM" },
        { day: "Sunday", hours: "9 AM – 11 PM" }
    ];

    const aboutSection = document.createElement("div");
    aboutSection.classList.add("about-section");

    // Schedule section
    const scheduleHeading = document.createElement("h2");
    scheduleHeading.textContent = "Opening Hours";
    aboutSection.appendChild(scheduleHeading);

    openingHours.forEach((item) => {
        const schedule = document.createElement("div");
        schedule.classList.add("schedule");

        const day = document.createElement("span");
        day.textContent = item.day;

        const time = document.createElement("time");
        time.textContent = item.hours;

        schedule.append(day, time);
        aboutSection.appendChild(schedule);
    });

    // Contact section
    const contacts = document.createElement("div");
    contacts.classList.add("contacts");

    const contactHeading = document.createElement("h2");
    contactHeading.textContent = "Contact";

    const mobile = document.createElement("div");
    mobile.textContent = "Mobile: 123456789";

    const email = document.createElement("div");
    email.textContent = "Email: xyz@gmail.com";

    contacts.append(contactHeading, mobile, email);
    aboutSection.appendChild(contacts);

    // Address section
    const addressSection = document.createElement("div");
    addressSection.classList.add("address");

    const addressHeading = document.createElement("h2");
    addressHeading.textContent = "Address";

    const address = document.createElement("div");
    address.textContent = "Suruchi, XYZ Road, ABC, Maharashtra";

    addressSection.append(addressHeading, address);
    aboutSection.appendChild(addressSection);

    about.appendChild(aboutSection);
}