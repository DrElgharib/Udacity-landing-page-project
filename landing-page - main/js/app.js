/*
* Manipulating the DOM exercise.
* Exercise programmatically builds navigation,
* scrolls to anchors from navigation,
* and highlights section in viewport upon scrolling.
*
* Dependencies: None
*
* JS Version: ES2015/ES6
*
* JS Standard: ESlint
*
*/

/**
* Define Global Variables
*defining Sections and  lists Global variables
*/
const sections = document.querySelectorAll('section');
const lists = document.querySelector('ul');

/**
 * End Global Variables
 * Start Helper Functions
 *
*///building navigation function
function navigator() {
//looping through all of sections
  for (const section of sections) {
    //creating new elements of li and a
        const newlist = document.createElement("li");
        const links = document.createElement("a");
    //getting values from the section and store it in variables
        const navData = section.getAttribute("data-nav");
        const idAttribute = section.getAttribute('id');
    // add navbar style
        links.classList.add("menu__link");
    // get the href from the sections id
        links.setAttribute('href',idAttribute);
  // linking the name of sections with the data-nav
        const text = document.createTextNode(navData);
//creating EventListener on clicking with smooth scrolling
        links.addEventListener('click', scrolling);
        function scrolling(e)  {
          e.preventDefault();
          section.scrollIntoView({behavior : "smooth"})
        };
//appending each variable to its position
        links.append(text);
        newlist.append(links);
        lists.append(newlist);

  };
};

//excuting the function
navigator();


// adding event for activation of section in viewport
window.addEventListener('scroll' ,()=>{
//looping for all sections
for (const section of sections){
  //getting the top boundry of each section
  const rectangle = section.getBoundingClientRect().top
  // only if section is in viewport: add activation
   if (rectangle >= -150 && rectangle <= 150){
     section.classList.add('your-active-class');
// if not : remove activation from it
   }else{
     section.classList.remove('your-active-class');
   }
};
});
