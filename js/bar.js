let togNavSatus = false;

const navWid  = document.querySelector(".nav-sidebar");
const navText  = document.querySelector(".nav-sidebar ul");
const navBtn  = document.getElementById("btn");
const links = document.querySelector(".nav-sidebar ul li a");
// const main = document.querySelector("#main");

const toggleNav = () =>{
    if(togNavSatus === false){
        navText.style.visibility = "visible";
        navWid.style.width = "16em";
        navText.style.opacity = "1";
        togNavSatus = true;
    }
    else if(togNavSatus === true){
        navText.style.visibility = "hidden";
        navWid.style.width = "0";
        navText.style.opacity = "0";
        togNavSatus = false;
    }
};

const disBtn = () =>{
    if(togNavSatus === true){
        navText.style.visibility = "hidden";
        navWid.style.width = "0";
        navText.style.opacity = "0";
        togNavSatus = false;
    }
};



// const mydisBtn = () =>{
//     if(togNavSatus === true || togNavSatus === false){
//         navText.style.visibility = "hidden";
//         navWid.style.width = "3em";
//         navText.style.opacity = "0";
//         togNavSatus = false;
//     }
// };



navBtn.addEventListener('click',toggleNav);
// documents.addEventListener('click', mydisBtn);

