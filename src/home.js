export function home() {
    const Home = document.querySelector("#content");
    Home.replaceChildren();
    const heading = document.createElement("div");
    heading.classList.add("heading");
    heading.textContent = "Suruchi";
    const Subheading = document.createElement("div");
    Subheading.classList.add("subHeading");
    Subheading.textContent = "Apnepan Ka Swad, Har Plate Ke Saath.";
    Home.appendChild(heading);
    Home.appendChild(Subheading);
}