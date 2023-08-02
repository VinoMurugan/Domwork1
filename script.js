let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
  document.getElementById('main-title').textContent = "DOM's Homepage";

  // Part 2
  document.body.style.backgroundColor = "#87CEEB"; 
  
  
  // Part 3
  const favoriteThingsList = document.getElementById('favorite-things');
  const lastListItem = favoriteThingsList.lastElementChild;
  
  if (lastListItem) {
    favoriteThingsList.removeChild(lastListItem);
  }

  // Part 4
  const specialTitles = document.querySelectorAll('.special-title');

  specialTitles.forEach((element) => {
    element.style.fontSize = '2rem';
  });

  // Part 5
  const pastRacesList = document.getElementById('past-races');
  const listItems = pastRacesList.getElementsByTagName('li');
  
  for (let i = 0; i < listItems.length; i++) {
    if (listItems[i].textContent === 'Chicago') {
      pastRacesList.removeChild(listItems[i]);
      break; // Stop the loop since "Chicago" is removed
    }
  }

  // Part 6
  const newCity = 'New York'; // Replace 'New York' with the name of the city you want to add

  // Access the Past Races list using getElementById()
  const racesList = document.getElementById('past-races');

  // Create a new <li> element
  if (racesList) {
  const newLiElement = document.createElement('li');

  // Set the text content of the new <li> element to the name of the city
  newLiElement.textContent = newCity;

  // Append the new <li> element to the Past Races list
  pastRacesList.appendChild(newLiElement);
  }
  // Part 7
  // Create a new .blog-post <div> element
const newBlogPostDiv = document.createElement('div');
newBlogPostDiv.classList.add('blog-post');

// Create a new <h2> element with the city name
const newH2Element = document.createElement('h2');
newH2Element.textContent = newCity;

// Create a new <p> element with some text describing the city's adventures
const newParagraphElement = document.createElement('p');
newParagraphElement.textContent = `Exploring the amazing city of ${newCity}.`;

// Append the elements in the desired order
newBlogPostDiv.appendChild(newH2Element);
newBlogPostDiv.appendChild(newParagraphElement);

// Add the new .blog-post div to the DOM
const mainContent = document.querySelector('.main'); // Assuming .main is the container for blog posts
mainContent.appendChild(newBlogPostDiv);


  // Part 8
  const newQuotes= function() {
    const quotes = [
      // ... (list of quotes)
      "This time it ain't just about being fast. - Luke Hobbs",
      "Ride or die, remember? - Letty Ortiz",
      "I don't run from anyone. - Deckard Shaw",
    ];
    document.querySelector('#quote-of-the-day').innerText = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  
  // Add the click event handler to the #quote-title element
  const quoteTitleElement = document.querySelector('#quote-title');
  quoteTitleElement.addEventListener('click', newQuotes);

  // Part 9
  const blogPostElements = document.querySelectorAll('.blog-post');

  blogPostElements.forEach((element) => {
    element.addEventListener('mouseout', () => {
      element.classList.toggle('purple');
    });
  
    element.addEventListener('mouseenter', () => {
      element.classList.toggle('white');
    });
  });



});
