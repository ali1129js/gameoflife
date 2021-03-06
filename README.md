This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Following [React Project Tutorial - Game of Life](https://www.youtube.com/watch?v=PM0_Er3SvFQ)

### Many thanks to [Beau Carnes](https://github.com/beaucarnes) [@CarnesBeau](https://twitter.com/carnesbeau)

# [Conway's Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)


another example of the game
https://codepen.io/freeCodeCamp/pen/reGdqx

The universe of the Game of Life is an infinite two-dimensional orthogonal grid of square "cells", each of which is in one of two possible states, alive or dead, (or "populated" and "unpopulated" respectively). Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:

1. Any live cell with **fewer** than **two live** neighbours **dies** :skull:, as if caused by **underpopulation**.
2. Any live cell with **two or three live** neighbours **lives** on to the next **generation**.
3. Any live cell with **more than three live** neighbours **dies** :skull:, as if by **overpopulation**.
4. Any **dead** cell with exactly **three live** neighbours becomes a **live** cell, as if by **reproduction**.

The initial pattern constitutes the seed of the system. The first generation is created by applying the above rules simultaneously to every cell in the seed—births and deaths occur simultaneously, and the discrete moment at which this happens is sometimes called a tick (in other words, each generation is a pure function of the preceding one). The rules continue to be applied repeatedly to create further generations.


![ScreenShot](/src/ss.png)
