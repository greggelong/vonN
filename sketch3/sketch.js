let grid = [];
let nextGrid = [];
let cnv;
let gsz = 100;
let sz = 6;
let img;
let gen =0
let clr = 200


function setup() {
  cnv = createCanvas(600, 600);
  let cx = (windowWidth - cnv.width) / 2;
  let cy = (windowHeight - cnv.height) / 2;
  
  cnv.position(cx, cy);
  makeGrid();
  //showGrid();
  //update();
  //showGrid();
  //colorMode(HSB,clr)
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
 //noLoop()

}

function makeGrid() {
  for (let j = 0; j < gsz; j++) {
    grid[j] = [];
    for (let i = 0; i < gsz; i++) {
      //print(img.get(i*sz,j*sz))
     //let st = random([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1])  
      // print("hello")
     grid[j][i] = {st:0 ,gn:0}
      
    }
  }
  // set some cells alive
  //grid[25][25]=1;
  //grid[75][75]=1;
  grid[50][50].st=1;
  //grid[31][30]=1;
  //grid[29][30]=1;

  for (let j = 0; j < gsz; j++) {
    nextGrid[j] = [];
    for (let i = 0; i < gsz; i++) {
      nextGrid[j][i] = {st:0 ,gn:0}
    }
  }
}

function updateGrid() {
  // if a cell is alive then  x+1,y, x,y+1, x+1,y+1 come alive 
  
  for (let j = 1; j < gsz-1; j++) {
    for (let i = 1; i < gsz-1; i++) {
      // check neighbors line binary number to decimal 
      //   1
      //  8x2   
      //   4
      let n = 0 
      if (grid[j-1][i].st ==1) n+=1
      if (grid[j][i+1].st ==1) n+=2
      if (grid[j+1][i].st ==1) n+=4
      if (grid[j][i-1].st ==1) n+=8
      
      // now you can make specific rules from 0 to 15
      // live cells hold the generation in which they were born
      // ***** rules for live cells******
      let ccgen = grid[j][i].gn  // current value of the gen which cell born
      if (grid[j][i].st ==1) {  // if alive
        switch(n){
          case 0:
            nextGrid[j][i].st = 1;
            nextGrid[j][i].gn = ccgen;
            break;
          case 1:
            nextGrid[j][i].st = 0;
            nextGrid[j][i].gn = ccgen;
            break;
          case 2:
            nextGrid[j][i].st = 0;
            nextGrid[j][i].gn = ccgen;
            break;
          case 3:
            nextGrid[j][i].st = 1;
            nextGrid[j][i].gn = ccgen;
            break;
          case 4:
            nextGrid[j][i].st = 0;
            nextGrid[j][i].gn = ccgen;
            break;
          case 5:
            nextGrid[j][i].st = 1;
            nextGrid[j][i].gn = ccgen;
            break;
          case 6:
            nextGrid[j][i].st = 1;
            nextGrid[j][i].gn = ccgen;
            break;
          case 7:
            nextGrid[j][i].st = 1;
            nextGrid[j][i].gn = ccgen;
            break;
          case 8:
            nextGrid[j][i].st = 0;
            nextGrid[j][i].gn = ccgen;
            break;
          case 9:
            nextGrid[j][i].st = 1;
            nextGrid[j][i].gn = ccgen;
            break;
          case 10:
            nextGrid[j][i].st = 1;
            nextGrid[j][i].gn = ccgen;
            break;
          case 11:
            nextGrid[j][i].st = 1;
            nextGrid[j][i].gn = ccgen;
            break;
          case 12:
            nextGrid[j][i].st = 1;
            nextGrid[j][i].gn = ccgen;
            break;
          case 13:
            nextGrid[j][i].st = 1;
            nextGrid[j][i].gn = ccgen;
            break;
          case 14:
            nextGrid[j][i].st = 1;
            nextGrid[j][i].gn = ccgen;
            break;
          case 15:
            nextGrid[j][i].st = 0;
            nextGrid[j][i].gn = ccgen;
            break;
        }
      }
            // ***** rules for dead cells******
            // now put in this generation
      if (grid[j][i].st==0) {
        switch(n){
          case 0:
            nextGrid[j][i].st = 0;
            break;
          case 1:
            nextGrid[j][i].st = 1;
            nextGrid[j][i].gn = gen;
          
            break;
          case 2:
            nextGrid[j][i].st = 1;
            nextGrid[j][i].gn = gen;
          
            break;
          case 3:
            nextGrid[j][i].st = 0;
            break;
          case 4:
            nextGrid[j][i].st = 1;
            nextGrid[j][i].gn = gen;
            
            break;
          case 5:
            nextGrid[j][i].st = 0;
            break;
          case 6:
            nextGrid[j][i].st = 0;
            break;
          case 7:
            nextGrid[j][i].st = 1;
            nextGrid[j][i].gn = gen;
            break;
          case 8:
            nextGrid[j][i].st = 1;
            nextGrid[j][i].gn = gen;
            break;
          case 9:
            nextGrid[j][i].st = 0;
            break;
          case 10:
            nextGrid[j][i].st = 0;
            break;
          case 11:
            nextGrid[j][i].st = 1;
            nextGrid[j][i].gn = gen;
            break;
          case 12:
            nextGrid[j][i].st = 0;
            break;
          case 13:
            nextGrid[j][i].st = 1;
            nextGrid[j][i].gn = gen;
          case 14:
            nextGrid[j][i].st = 1;
            nextGrid[j][i].gn = gen;
            break;
          case 15:
            nextGrid[j][i].st = 0;
            nextGrid[j][i].gn = gen;
            break;
        }
      
    }
  
  }
}
  // copy new grid into old grid

  for (let j = 0; j < gsz; j++) {
    for (let i = 0; i < gsz; i++) {
      grid[j][i].st = nextGrid[j][i].st
      grid[j][i].gn = nextGrid[j][i].gn
      nextGrid[j][i] = {st:0,gn:0}
      
    }
  }
}

function showGrid() {
  for (let j = 0; j < gsz; j++) {
    for (let i = 0; i < gsz; i++) {
      if (grid[j][i].st==1){  //is alive
        
        fill(255-((grid[j][i].gn*2)%255),10,(grid[j][i].gn*2)%255)
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
    saveGif('vonN1.gif',35);
  }
}