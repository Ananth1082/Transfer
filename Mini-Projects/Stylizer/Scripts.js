//et count=0;
let col="red";
function changeBG() {
  if(col==='blue'){
    document.body.style.backgroundColor='red';
    document.body.querySelector('button').innerHTML=`Change Background Color to ${col}`;
    col='red';

  }
  else{
    document.body.style.backgroundColor='blue';
    document.body.querySelector('button').innerHTML=`Change Background Color to ${col}`;
    col='blue';
  }
  document.body.querySelector('button').innerHTML=`Change Background Color to ${col}`;
  
}