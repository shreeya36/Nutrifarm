let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let categoryMenu =document.querySelector('.category-menu');
let categoryItem =document.querySelectorAll('.item');


window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});


categoryMenu.addEventListener('click' , (event) =>{
   if(event.target.classList.contains("menu")){
      
    //deactivate exiting active menu
    categoryMenu.querySelector(".active").classList.remove('active');

    // activate new menu
    event.target.classList.add('active');
    let itemValue = event.target.getAttribute('data-filter');

    categoryItem.forEach((item) => {
       if(item.classList.contains(itemValue)){
           item.classList.add('show');
           item.classList.remove('hide');
       }
       else{
        item.classList.add('hide');
        item.classList.remove('show'); 
       }
    });
   }
});



let countDate = new Date('Septmber 30 , 2021 00:00:00').getTime();

function CountDown(){

    let now = new Date().getTime();
    gap = countDate - now;

    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    let d = Math.floor(gap / (day));
    let h = Math.floor((gap % (day)) / (hour));
    let m = Math.floor((gap % (hour)) / (minute));
    let s = Math.floor((gap % (minute)) / (second));

    document.getElementById('day').innerText=d;
    document.getElementById('hrs').innerText=h;
    document.getElementById('min').innerText=m;
    document.getElementById('sec').innerText=s;
}

setInterval(function()  {
    CountDown()
}, 1000);