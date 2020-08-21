
// Selectors

const parent = document.querySelector('.modal-parent');
const btn = document.querySelector('button');
x = document.querySelector('.X');
 section = document.querySelector('section') ;

//Event 

btn.addEventListener('click', appear);
x.addEventListener('click', disappear);


// Function

function appear(){
  parent.style.display = "block";
  section.style.filter = "blur(10px)";

}


function disappear(){
  parent.style.display = "none";
  section.style.filter = "blur(0px)";
}
