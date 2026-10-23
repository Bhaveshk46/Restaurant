
export function menu() {
    const menuPage = document.querySelector("#content");
    menuPage.replaceChildren();

    const menu = document.createElement("div");
    menu.classList.add("menu");

    const menuHeading = document.createElement("div");
    menuHeading.classList.add("menu-heading");
    menuHeading.textContent = "MENU";

    const menuContent = document.createElement("div");
    menuContent.classList.add("menu-content");

    const items = [
        { name: "Butter Paneer Masala", price: "₹220" },
        { name: "Butter Naan", price: "₹40" },
        { name: "Buttermilk", price: "₹30" },
        { name: "Pav-bhaji", price: "₹200" },
        { name: "Masala papad", price: "₹50" },
    ];

    items.forEach((item) => {
        const menuItem = document.createElement("div");
        menuItem.classList.add("menu-item");

        const itemName = document.createElement("span");
        itemName.textContent = item.name;

        const itemPrice = document.createElement("span");
        itemPrice.textContent = item.price;

        menuItem.append(itemName, itemPrice);
        menuContent.appendChild(menuItem);
    });

    menu.append(menuHeading, menuContent);
    menuPage.appendChild(menu);
}
