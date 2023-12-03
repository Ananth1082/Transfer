document.addEventListener("DOMContentLoaded",()=>{
  let flappy = document.getElementById("flappy");
  let win = document.getElementById("window");

  moveFlappy();
  setInterval(gravity,10);
  setInterval(move , 10);
  setInterval(create,2000);

  function move(){
    let pillarList = document.querySelectorAll(".pillar");
    pillarList[0].style.backgroundColor="Red";
    pillarList.forEach((pillar)=>{
      let pos = parseInt(getComputedStyle(pillar).getPropertyValue("left"));
      pillar.style.left= `${pos-1}px`;
      if(pos < -50){
        pillar.remove();
      }
    });

  }
  function create() {
    let pillar = document.createElement("div");
    let pillar_top = document.createElement("div");
    let pillar_bottom = document.createElement("div");
   
    pillar_top.style.height = `${Math.floor(Math.random()*31)+15}%`;
    pillar_bottom.style.height = `${Math.floor(Math.random()*31)+15}%`;
    pillar.appendChild(pillar_top);
    pillar.appendChild(pillar_bottom);
    pillar.className = "pillar";
    pillar_top.className = "bottom-baby-pillar";
    pillar_bottom.className = "top-baby-pillar";
    win.appendChild(pillar);
  }
  

  function moveFlappy() {
  let canMove=true;
  document.addEventListener('keydown', function(event) {
    if (event.code === 'Space' && canMove) {
      let flappy_pos = parseInt(getComputedStyle(flappy).getPropertyValue("top"));
      flappy_pos -= 40;
      flappy.style.top = `${flappy_pos}px`;
      canMove = false; 
      setTimeout(() => {
        canMove = true; 
      }, 100); 
    }
  });
  }

  function gravity() {
    
  let flappy_pos = parseInt(getComputedStyle(flappy).getPropertyValue("top"));
  flappy_pos += 1;
    flappy.style.top=`${flappy_pos}px`;
  }

  function touch(pillar) {
  let R = flappy.getComputedStyle.getPropertyValue("width")/2;
  let flappy_left = flappy.getComputedStyle.getPropertyValue("left");
  let flappy_top = flappy.getComputedStyle.getPropertyValue("top");
  let pillar_left = pillar.getComputedStyle.getPropertyValue("left");
  let pillar_top = pillar.getComputedStyle.getPropertyValue("height");
  let Yf
  if(Yf < Yp && Xp-Xf<R) {
    //stop game
    
  } 
}
});

