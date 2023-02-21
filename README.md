# vonN

A place to hold some code to play with cellular automata rules for a 2d von Neumann neighborhood 

multiple implementations in different folders.

1. sketch0 -- simply adds the NSEW neighborhood and cannot set rules for individual neighbors. (adding up you can not tell which 1, 2 3 neighbors are live or dead) The rules in the sketch are a living cell with 0 or 4 neighbors dies, and a dead cell with 1 or 4 neighbors comes to life: live at https://greggelong.github.io/vonN/sketch0 
Some notes on rules:  if you start with a single living cell you better have a rule that brings to life a dead cell with one neighbor.  A death rule for live cells with 0 neighbors has a strong influence over other death rules.

2. sketch1 -- checks the four neighbors as if they are a four digit binary number.  Then I can set 16 separate rules, from 0 to 15. 
north is 1, east is 2, south is 4, and west is 8.  for example this lets me set a rule for coming to life if a dead cell has two neighbors that are opposite, a count that is 10 (east and west) or a count of 5 (north and south). At the moment it is pretty messy. I have 16 rules for live cells and 15 rules for dead cells in switch cases.  I will put some interactive DOM element for the user to choose.  live at: https://greggelong.github.io/vonN/sketch1

3. sketch2 -- alters sketch1 to have the grid keep track of the generation in which the cell come alive and maps to HSB color. live at: https://greggelong.github.io/vonN/sketch2

4. sketch3 -- added a javascript object to the 2d array to keep track of cell generations and states.  This version has an interesting rule set that almost tells a story.  This same rule set can be altered slightly to tell different stories.
live cells die 1,2,4,8,15  dead cells come to life 1,2,4,7,8,11,13,14. live at: https://greggelong.github.io/vonN/sketch3

5. sketch4 -- is the same rule set as sketch 3 but on an a grid with an odd number of cells. live https://greggelong.github.io/vonN/sketch4

6. Note about symmetry and a-symmetry.  I am not implementing an infinite grid of cells. My grid has bounds. The even or oddness of the number of cells in the grid effects the patters the CA creates.  (I first found this with Langton's ant simulations https://greggelong.github.io/antTurtle/).  Grids with an even number of cells create a-symmetric patterns from rule sets. Grids with odd numbers of cells will create symmetric patters for that same rule set. You can see this demonstrated in sketch 3 and sketch 4.  Even and a-symmetric  https://greggelong.github.io/vonN/sketch3    Odd and symmetric https://greggelong.github.io/vonN/sketch4

7. Note: We can think of grid size as the organisms bounds, the same code produces different results, some organisms would have an advantage for their oddness or evenness.  

8. more notes on symmetry and asymmetry
- an odd grid size and an odd starting  will create the a type asymmetric filling
- an odd grid size and even starting cell will not create asymmetirc filling
- an even grid size and odd starting point creates asymmetric filling
- an even grid size and even starting point creates asymmetric filling

- cannot create symmetric non filling with even grid
- odd grids can create both based whether or not the starting grid is even or odd

