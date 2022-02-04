import headerImg from './header-image.jpeg';

const homepage = () => {
    const homeContent = document.querySelector(".content");
  
    const homepageIntro = document.createElement("div");
    homepageIntro.classList.add("introduction");

    const headerImage = new Image();
    headerImage.src = headerImg;
    homepageIntro.appendChild(headerImage)
  
    const headerText = document.createElement("div");
    headerText.classList.add("header-text");
  
    const headline = document.createElement("h1");
    headline.textContent = "Canadian Cheesecake";
    headerText.appendChild(headline);
  
    const intro = document.createElement("h3");
    intro.textContent = "Come try it today. Just like grandma used to make!";
    headerText.appendChild(intro);
  
    const introTwo = document.createElement("h4");
    introTwo.textContent =
      "Our cheesecake is made fresh everyday, using dairy from 100% grass-fed cattle.";
    headerText.appendChild(introTwo);
  
    homepageIntro.appendChild(headerText);
  
    const background = document.createElement("div");
    background.classList.add("background");
  
    const backgroundContent = document.createElement("h5");
    backgroundContent.textContent =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt ante a sapien aliquam, at facilisis lacus ornare. Fusce id enim id leo semper sodales. Mauris urna mauris, volutpat facilisis massa non, sodales sodales purus. Integer semper et arcu quis tristique. Etiam a orci id massa vestibulum molestie rutrum eget sem. Donec auctor iaculis sapien. Phasellus lacinia enim lectus, et tincidunt erat gravida et. Duis iaculis nulla a nunc laoreet, viverra suscipit velit bibendum.";
    background.appendChild(backgroundContent);
  
    homeContent.appendChild(homepageIntro);
    homeContent.appendChild(background);
  };
  
  export { homepage };
  