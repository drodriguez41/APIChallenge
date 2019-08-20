// Requirements:

// You must provide the following:

// Pull data from an API that we have provided
// Utilize GET only
// Be as creative as you like
// Feel free to use Bootstrap, Material, Flexbox, CSS Grid, etc.
// Content should be visually appealing
// Nothing vulgar in nature please
 

// Please make your API different from the examples given in class.

 

// We expect you to demonstrate your knowledge and ability with APIs; please do not just provide simple CSS of HTML features/changes.  

// const url = 'https://ghibliapi.herokuapp.com/people'
var studioGhibliPeople = document.getElementById('characters');

fetch('https://ghibliapi.herokuapp.com/people') 
.then(function(response) {   
  return response.json(); 
})
.then(function(json) {
  let characterList = json.results; 

  for(p of people) {
    let listItem = document.createElement('li'); 
    listItem.innerHTML = '<p>' + p.name + '</p>';
    studioGhibliPeople.appendChild(listItem);  
  }

});