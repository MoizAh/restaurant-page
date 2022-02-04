const contact = () => {
    const contactContent = document.querySelector(".content");
  
    const contactContainer = document.createElement("div");
    contactContainer.classList.add("contact-container");
  
    const contactHeader = document.createElement("div");
    contactHeader.classList.add("contact-header");
    const contactTitle = document.createElement("h1");
    contactTitle.textContent = "Contact";
    contactHeader.appendChild(contactTitle);
  
    const contacts = [1, 2, 3];
  
    contacts.forEach((contact) => {
      const contactInfo = document.createElement("div");
      contactInfo.classList.add("contact-info");
      const infoPhone = document.createElement("h2");
      infoPhone.textContent = "(123) - 456 - 7890";
      const infoAddress = document.createElement("h4");
      infoAddress.textContent = "Fake Address, 1O1 2I3, Ontario, Canada";
      const infoEmail = document.createElement("h4");
      infoEmail.textContent = "fakeemail@fake.ca";
      contactInfo.appendChild(infoPhone);
      contactInfo.appendChild(infoAddress);
      contactInfo.appendChild(infoEmail);
      contactContainer.appendChild(contactInfo);
    });
  
    contactContent.appendChild(contactHeader);
    contactContent.appendChild(contactContainer);
  };
  
  export { contact };
  