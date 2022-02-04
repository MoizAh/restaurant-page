const menu = () => {
    const menuContent = document.querySelector(".content");
  
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");
  
    const menuHeader = document.createElement("div");
    menuHeader.classList.add("menu-header");
    const menuTitle = document.createElement("h1")
    menuTitle.textContent = "Cheesecake Menu";
    menuHeader.appendChild(menuTitle)
  
    const items = [1, 2, 3, 4, 5, 6, 7, 8];
  
    items.forEach((item) => {
      const menuItem = document.createElement("div");
      menuItem.classList.add("item");
      const itemTitle = document.createElement("h2");
      itemTitle.textContent = "Original Cheesecake";
      const itemSubtitle = document.createElement("h4");
      itemSubtitle.textContent = "Price: $6.99";
      const itemDesc = document.createElement("p");
      itemDesc.textContent =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id ipsum convallis, facilisis nunc eget, maximus arcu.";
      menuItem.appendChild(itemTitle);
      menuItem.appendChild(itemSubtitle);
      menuItem.appendChild(itemDesc);
      menuContainer.appendChild(menuItem);
    });
  
    menuContent.appendChild(menuHeader);
    menuContent.appendChild(menuContainer);
  };
  
  export { menu };
  