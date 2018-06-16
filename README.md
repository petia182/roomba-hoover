# Hoover challenge

### Requirements

Write a web application that drives an imaginary robotic hoover (much like a Roomba) around an equally imaginary room based on:

- room dimensions as X and Y coordinates, identifying the top right corner of the room rectangle. This room is divided up in a grid based on these dimensions; a room that has dimensions X: 5 and Y: 5 has 5 columns and 5 rows, so 25 possible hoover positions. The bottom left corner is the point of origin for our coordinate system, so as the room contains all coordinates its bottom left corner is defined by X: 0 and Y: 0.
- an initial hoover position (X and Y coordinates like patches of dirt)

- locations of patches of dirt, also defined by X and Y coordinates identifying the bottom left corner of those grid positions.
The room will be rectangular, has no obstacles (except the room walls), no doors and all locations in the room will be clean (hoovering has no effect) except for the locations of the patches of dirt presented in the program input.

Placing the hoover on a patch of dirt ("hoovering") removes the patch of dirt so that patch is then clean for the remainder of the program run. The hoover is always on - there is no need to enable it.

Driving into a wall has no effect (the robot skids in place).

### Goal

The goal of the application is to take the room dimensions, the locations of the dirt patches, and the hoover location as input and to allow the user to navigate the robot around the room.

As a minimum you should build an interface with:

- A way to enter the following configuration:
- the room dimensions (length and width)
- the starting location of the robot (as coordinates)
- the locations of zero or more dirt patches
- Four buttons which will move the robot North, South, East and West
- A visual representation of the room state
- A text based representation of the robot's position within the room
- A text based representation of the number of dirt patches which have been hoovered

### Deliverable

The program:

- link to a running web page
- must run in all modern browsers
- can be written in any client side programming language. We are looking for a Senior React/Redux Engineer so using these technologies is preferable (unless you think we are missing out on the next big thing of course)
- can make use of any existing open source libraries that don't directly address the problem statement (use your best judgement)

### Run the project

#### Install dependencies

```
$ yarn
```

#### Start the development server:

```
$ yarn start
```
