# vonN

A place to hold some code to play with cellular automata rules for a 2d von Neumann neighborhood 

multiple implementations in different folders.

1. sketch0 -- simply adds the NSEW neighborhood and cannot set rules for individual neighbors. (adding up you can not tell which 1, 2 3 neighbors are live or dead) The rules in the sketch are a living cell with 0 or 4 neighbors dies, and a dead cell with 1 or 4 neighbors comes to life: live at https://greggelong.github.io/vonN/sketch0 
Some notes on rules:  if you start with a single living cell you better have a rule that brings to life a dead cell with one neighbor.  A death rule for live cells with 0 neighbors has a strong influence over other death rules.

2. sketch1 -- checks the four neighbors as if they are a four digit binary number.  Then I can set 16 separate rules, from 0 to 15. 
north is 1, east is 2, south is 4, and west is 8.  for example this lets me set a rule for coming to life if a dead cell has two neighbors that are opposite, a count that is 10 (east and west) or a count of 5 (north and south). At the moment it is pretty messy. I have 16 rules for live cells and 15 rules for dead cells in switch cases.  I will put some interactive DOM element for the user to choose.  live at: https://greggelong.github.io/vonN/sketch1
