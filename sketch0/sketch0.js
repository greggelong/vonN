let grid = [];
let nextGrid = [];
let cnv;
let gsz = 100;
let sz = 6;
let img;
let gen =1


function setup() {
  cnv = createCanvas(600, 600);
  let cx = (windowWidth - cnv.width) / 2;
  let cy = (windowHeight - cnv.height) / 2;
  
  cnv.position(cx, cy);
  makeGrid();
  //showGrid();
  //update();
  //showGrid();
  frameRate(8);
  noStroke();
}

function draw(){
  showGrid();
  updateGrid();
  //if (frameCount% 30==0){
   // makeGrid()
 // }
 gen++

}

function makeGrid() {
  for (let j = 0; j < gsz; j++) {
    grid[j] = [];
    for (let i = 0; i < gsz; i++) {
      //print(img.get(i*sz,j*sz))
     //let st = random([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1])  
      // print("hello")
     grid[j][i] = 0
      
    }
  }
  // set one cell alive
  grid[50][50]=1;
  //grid[31][30]=1;
  //grid[29][30]=1;

  for (let j = 0; j < gsz; j++) {
    nextGrid[j] = [];
    for (let i = 0; i < gsz; i++) {
      nextGrid[j][i] = grid[j][i];
    }
  }
}

function updateGrid() {
  // if a cell is alive then  x+1,y, x,y+1, x+1,y+1 come alive 
  
  for (let j = 1; j < gsz - 1; j++) {
    for (let i = 1; i < gsz - 1; i++) {
      //check east west of alive cell
      // 5 alive cases
      let n =  (grid[j-1][i])+(grid[j+1][i])+(grid[j][i+1])+(grid[j][i-1])
      
      if (grid[j][i]==1) {
        if ( n==4 || n==0){
          // if 1 or 4 die
          nextGrid[j][i] = 0
        } else{
          // else 
          nextGrid[j][i] = 1
        }
        
      }
      // 5 dead cases 
      else {
         
        if (n == 1 || n== 4){
          // if 4 neighbors come to life
          nextGrid[j][i] = 1
        } else{
          nextGrid[j][i] = 0
        }
      }
    }
  
  }
  // copy new grid into old grid

  for (let j = 0; j < gsz; j++) {
    for (let i = 0; i < gsz; i++) {
      grid[j][i] = nextGrid[j][i];
    }
  }
}

function showGrid() {
  for (let j = 0; j < gsz; j++) {
    for (let i = 0; i < gsz; i++) {
      if (grid[j][i] ==1){
        
        fill(0,255,0)
      }else{
      fill(0,0,0)
      }
      rect(i * sz, j * sz, sz, sz);
    }
  }
}

function keyPressed() {
  // this will download the first 25 seconds of the animation!
  if (key === 's') {
    saveGif('glitchbig6.gif',8);
  }
}