var studioGhibliPeople = document.getElementById('characters');

const getFetch = () => {
return fetch('https://ghibliapi.herokuapp.com/people')

.then(res => res.json())
.then(function(data) { 
    let characters = data.results;
    return characters.map(function(character) {
    let li =  createNode('li'),
    img = createNode('img'),
    span = createNode('span');
    img.src = character.picture.medium;
    span.innerHTML = `${character.name.first} ${character.name.last}`;
    append(li, img);
    append(li, span);
    append(ul,li);
    })
})


.catch(function(error) {
   
});
    




// Adding 2 Elements
function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}}