let grid = [];
let nextGrid = [];
let cnv;
let gsz = 100;
let sz = 6;
let img;
let gen =1
let clr = 90


function setup() {
  cnv = createCanvas(600, 600);
  let cx = (windowWidth - cnv.width) / 2;
  let cy = (windowHeight - cnv.height) / 2;
  
  cnv.position(cx, cy);
  makeGrid();
  //showGrid();
  //update();
  //showGrid();
  colorMode(HSB,clr)
  frameRate(1);
  noStroke();
}

function draw(){
  showGrid();
  updateGrid();
  //if (frameCount% 30==0){
   // makeGrid()
 // }
 gen++
 showGrid()
 noLoop()

}

function makeGrid() {
  for (let j = 0; j < gsz; j++) {
    grid[j] = [];
    for (let i = 0; i < gsz; i++) {
      //print(img.get(i*sz,j*sz))
     //let st = random([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1])  
      // print("hello")
     grid[j][i] = {st:0 ,gn:1}
      
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
      nextGrid[j][i] = grid[j][i];
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
      let current = grid[j][i]
      if (grid[j-1][i].st ==1) n+=1
      if (grid[j][i+1].st ==1) n+=2
      if (grid[j+1][i].st ==1) n+=4
      if (grid[j][i-1].st ==1) n+=8
      
      // now you can make specific rules from 0 to 15
      // live cells hold the generation in which they were born
      // ***** rules for live cells******
      let ccgen = grid[j][i].gn  // current value of the gen which cell born
      if (current.st ==1) {  // if alive
        switch(n){
          case 0:
            nextGrid[j][i].st = 1;
            nextGrid[j][i].gn = ccgen;
            break;
          case 1:
            nextGrid[j][i].st = 1;
            nextGrid[j][i].gn = ccgen;
            break;
          case 2:
            nextGrid[j][i].st = 1;
            nextGrid[j][i].gn = ccgen;
            break;
          case 3:
            nextGrid[j][i].st = 1;
            nextGrid[j][i].gn = ccgen;
            break;
          case 4:
            nextGrid[j][i].st = 1;
            nextGrid[j][i].gn = ccgen;
            break;
          case 5:
            nextGrid[j][i].st = 0;
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
            nextGrid[j][i].st = 1;
            nextGrid[j][i].gn = ccgen;
            break;
          case 9:
            nextGrid[j][i].st = 1;
            nextGrid[j][i].gn = ccgen;
            break;
          case 10:
            nextGrid[j][i].st = 0;
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
            nextGrid[j][i].st = 1;
            nextGrid[j][i].gn = ccgen;
            break;
        }
      }
            // ***** rules for dead cells******
            // now put in this generation
      if (current.st==0) {
        switch(n){
          case 0:
            nextGrid[j][i].st = 0;
            break;
          case 1:
            nextGrid[j][i].st = 1;
            nextGrid[j][i].gn = gen;
            print("case1")
            break;
          case 2:
            nextGrid[j][i].st = 1;
            nextGrid[j][i].gn = gen;
            print("case2")
            break;
          case 3:
            nextGrid[j][i].st = 0;
            break;
          case 4:
            current.st = 1;
            current.gn = gen;
            print("case4")
            break;
          case 5:
            nextGrid[j][i].st = 0;
            break;
          case 6:
            nextGrid[j][i].st = 0;
            break;
          case 7:
            nextGrid[j][i].st = 0;
            break;
          case 8:
            nextGrid[j][i].st = 1;
            nextGrid[j][i].gn = gen;
            print("case8")
            break;
          case 9:
            nextGrid[j][i].st = 0;
            break;
          case 10:
            nextGrid[j][i].st = 0;
            break;
          case 11:
            nextGrid[j][i].st = 0;
            break;
          case 12:
            nextGrid[j][i].st = 0;
            break;
          case 13:
            nextGrid[j][i].st = 0;
            break;
          case 14:
            nextGrid[j][i].st = 0;
            break;
          case 15:
            nextGrid[j][i].st = 1;
            nextGrid[j][i].gn = gen;
            break;
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
      if (grid[j][i].st==1){  //is alive
        
        fill(grid[j][i].gn%clr,300,300)
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