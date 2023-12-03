let sudoku, rowProducts, colProducts, boxProducts;
rowProducts=[1,1,1,1,1,1,1,1,1];
colProducts=[1,1,1,1,1,1,1,1,1];
boxProducts=[[1,1,1],[1,1,1],[1,1,1]];
let P=1*2*3*5*7*11*13*17*19*23;
let count=0;

sudoku=[  [7,1,3,1,1,1,1,1,1],
          [1,1,1,1,5,19,1,1,1],
          [1,23,1,1,1,1,1,2,19],
          [1,1,1,1,1,1,13,1,2],
          [1,1,1,1,1,17,11,5,1],
          [1,1,1,2,3,1,1,1,1],
          [1,1,1,1,11,13,2,1,1],
          [1,1,5,23,7,1,1,1,1],
          [3,1,13,1,19,1,1,7,17]];
count=25;
console.log(sudoku);
getProducts();
getProducts();
console.log(rowProducts,colProducts,boxProducts);
solve();


/*function getSudoku(){
  let cell;
  sudoku=[[1,1,1,1,1,1,1,1,1],
          [1,1,1,1,1,1,1,1,1],
          [1,1,1,1,1,1,1,1,1],
          [1,1,1,1,1,1,1,1,1],
          [1,1,1,1,1,1,1,1,1],
          [1,1,1,1,1,1,1,1,1],
          [1,1,1,1,1,1,1,1,1],
          [1,1,1,1,1,1,1,1,1],
          [1,1,1,1,1,1,1,1,1]];
         
  for(let i=0;i<9;i++) {
    for(let j=0;j<9;j++) {
      cell=document.querySelector(`.subrow-${i+1}-subcol-${j+1}`);
      sudoku[i][j]=dict(cell.value);
      if(sudoku[i][j]!==1){count++;}
    }
  }
  getProducts();
  solve();
  console.log(sudoku);
}*/

function dict(c) {
  switch(c){
    case '':return 1;
    case '1':return 2;
    case '2':return 3;
    case '3':return 5;
    case '4':return 7;
    case '5':return 11;
    case '6':return 13;
    case '7':return 17;
    case '8':return 19;
    case '9':return 23;
  }
}

function getProducts() {
  let p;
  for(let j=0;j<9;j++) {
    p=1;
    for(let i=0;i<9;i++) {
      p*=sudoku[i][j];
    }
    colProducts[j]=p;
  }

  for(let i=0;i<9;i++) {
    p=1;
    for(let j=0;j<9;j++) {
      p*=sudoku[i][j];
    }
    rowProducts[i]=p;
  }

  for (let boxRow = 0; boxRow < 3; boxRow++) {
    for (let boxCol = 0; boxCol < 3; boxCol++) {
      p = 1;
      for (let i = 3 * boxRow; i < 3 * boxRow + 3; i++) {
        for (let j = 3 * boxCol; j < 3 * boxCol + 3; j++) {
          p *= sudoku[i][j];
        }
      }
      boxProducts[boxRow][boxCol] = p;
    }
  }
}


function solve() {
  while(count<=81){
    for(let i=0;i<9;i++) {
      for(let j=0;j<9;j++) {
        if(sudoku[i][j]===1 && isPrime(HCF(P/rowProducts[i],P/colProducts[j],P/boxProducts[Math.floor(i/3)][Math.floor(j/3)]))) {
          sudoku[i][j]=HCF(P/rowProducts[i],P/colProducts[j],P/boxProducts[Math.floor(i/3)]);
          console.log(sudoku[i][j]);
          count++;
        }
      }
    }
  }
}

function HCF(a,b,c){
  let hcf;
  for (let i = 1; i <= a && i <= b && i<=c; i++) {
      if( a % i === 0 && b % i === 0 && c % i === 0) {
          hcf = i;
      }
    }
  return hcf;
}

function isPrime(a){            
  let i, flag = true;
  for(i = 2; i<= a; i++)
      if (a % i == 0) {
          flag = false;
          break;
      }
  if(a==1) return false;
  return flag;
}