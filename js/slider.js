// local wallpapers data
const walls = [
    {
      img:"./img/wallpaper/wall.jpg",
      },
    {
      img:"./img/wallpaper/tree.jpg",
      },
    {
      img:"./img/wallpaper/suntree.jpg",
    },
    {
      img:"./img/wallpaper/morning.jpg",
  
    },
    {
      img:"./img/wallpaper/afternoon.jpg",
    },
  ];
  

//   selecting Item

  const img = document.getElementById("wallpaper");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const randomBtn = document.querySelector(".random-btn");


//   set Starting Item

let currentItem = walls[1];

console.log(currentItem);

// show person based on item

const showPerson = () =>{
    const item = walls[currentItem];
    img.src = item.img;
}


// loadd event

const func = () => {
  showPerson()
};


// next button

const nextfunc = () =>{
    currentItem++;
    if(currentItem > walls.length -1){
        currentItem = 0;
    }
    showPerson();
} 

// previos button

const prevfunc = () =>{
    currentItem--;
    if ( currentItem < 0){
      currentItem = walls.length -1;
    }
    showPerson()   
};


const randomfunc = () => {
  currentItem = Math.floor(Math.random()* walls.length);
  showPerson();
}
 

// event listener section

nextBtn.addEventListener("click",nextfunc);
prevBtn.addEventListener("click",prevfunc);
randomBtn.addEventListener("click", randomfunc);




