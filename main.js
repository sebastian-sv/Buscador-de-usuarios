let photo = document.querySelectorAll(".photo");
let img = document.getElementById("img");
const search = document.getElementById("search");

/* modal */

let modal = document.querySelector(".modal-app");
let cardImg = document.querySelector(".card-img");
cardImg.addEventListener("click",(e)=>{
  e.stopPropagation();
});

modal.addEventListener("click",()=>{
   modal.classList.remove("modal-app-active")
});

for (let images of photo){
    images.addEventListener("click",()=>{
      modal.classList.add("modal-app-active");
      img.src = images.src;
    });
};

/* search users */

let cards = document.querySelectorAll(".card-user");
let text = document.getElementById("search");
let error = document.getElementById("error");
search.addEventListener("keyup", e =>{
    if(e.key == "Enter"){
      let searchValue = search.value,
      value = searchValue.toLowerCase();
      cards.forEach(card =>{
        if(value === card.dataset.name){
          return card.style.display="block";
        }else{
          card.style.display ="none";
        }
      })
    }
});

search.addEventListener("keyup",()=>{
    if(search.value != "") return;
    cards.forEach(card =>{
      card.style.display="block";
    })
});

/* dark theme */
let theme = document.getElementById("theme");
let body = document.querySelector("body");
theme.addEventListener("click",()=>{
  body.classList.toggle("dark-theme");
  store(body.classList.contains('dark-theme'))
});

load();
function load(){
  const darkMode = localStorage.getItem("dark-theme");
  const btn = document.querySelector(".btn");
  if(!darkMode){
    store('false');
  }else if(darkMode == 'true'){
    body.classList.add("dark-theme");
      let chek = document.getElementById("theme");
      let checked = JSON.parse(localStorage.getItem("theme"));
      document.getElementById("theme").checked = checked;
  };
};

function store(value){
  localStorage.setItem('dark-theme',value);
  localStorage.setItem("theme",value);
};
