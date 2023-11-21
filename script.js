let count = 1;
let playerA = [];
let playerB = [];

let winArray = {
  wina1: [1, 2, 3],
  wina2: [4, 5, 6],
  wina3: [7, 8, 9],
  wina4: [1, 4, 7],
  wina5: [2, 5, 8],
  wina6: [3, 6, 9],
  wina7: [1, 5, 9],
  wina8: [3, 5, 7],
};

let stop = 0;

let [draw1, draw2, draw3, draw4, draw5, draw6, draw7, draw8] = [
  0, 0, 0, 0, 0, 0, 0, 0,
];

let [win1, win2, win3, win4, win5, win6, win7, win8] = [0, 0, 0, 0, 0, 0, 0, 0];

let [winn1, winn2, winn3, winn4, winn5, winn6, winn7, winn8] = [
  0, 0, 0, 0, 0, 0, 0, 0,
];

let [value1, value2, value3, value4, value5, value6, value7, value8, value9] = [
  0, 0, 0, 0, 0, 0, 0, 0, 0,
];

function clickbox1() {
  const box1 = document.getElementById("idbox1");
  value1++;
  if (value1 == 1) {
    count++;
    if (count % 2 == 0) {
      if (stop != 1) {
        box1.innerText = 0;
        playerA.push(1);
        if (playerA.length >= 3) {
          console.log(`A:${playerA}`);
          for (let i in winArray) {
            if (i == "wina1") {
              win1 = 0;
              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerA.includes(value[i]);
                if (checkWin == true) {
                  win1++;
                }
              }
              if (win1 == 3) {
                const winPlayer = document.getElementById("win");
                winPlayer.innerText = "You win!";
                stop = 1;
                break;
              }
              const len = playerA.length + playerB.length;
              if (len == 9) {
                if (win1 != 3) {
                  draw1++;
                }
              }
            }

            if (i == "wina2") {
              win2 = 0;
              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerA.includes(value[i]);
                if (checkWin == true) {
                  win2++;
                }
              }
              if (win2 == 3) {
                const winPlayer = document.getElementById("win");
                winPlayer.innerText = "You win!";
                stop = 1;
                break;
              }
              const len = playerA.length + playerB.length;
              if (len == 9) {
                if (win2 != 3) {
                  draw2++;
                }
              }
            }

            if (i == "wina3") {
              win3 = 0;
              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerA.includes(value[i]);
                if (checkWin == true) {
                  win3++;
                }
              }
              if (win3 == 3) {
                const winPlayer = document.getElementById("win");
                winPlayer.innerText = "You win!";
                stop = 1;
                break;
              }
              const len = playerA.length + playerB.length;
              if (len == 9) {
                if (win3 != 3) {
                  draw3++;
                }
              }
            }

            if (i == "wina4") {
              win4 = 0;
              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerA.includes(value[i]);
                if (checkWin == true) {
                  win4++;
                }
              }

              if (win4 == 3) {
                const winPlayer = document.getElementById("win");
                winPlayer.innerText = "You win!";
                stop = 1;
                break;
              }
              const len = playerA.length + playerB.length;
              if (len == 9) {
                if (win4 != 3) {
                  draw4++;
                }
              }
            }

            if (i == "wina5") {
              win5 = 0;
              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerA.includes(value[i]);
                if (checkWin == true) {
                  win5++;
                }
              }
              if (win5 == 3) {
                const winPlayer = document.getElementById("win");
                winPlayer.innerText = "You win!";
                stop = 1;
                break;
              }
              const len = playerA.length + playerB.length;
              if (len == 9) {
                if (win5 != 3) {
                  draw5++;
                }
              }
            }

            if (i == "wina6") {
              win6 = 0;
              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerA.includes(value[i]);
                if (checkWin == true) {
                  win6++;
                }
              }
              if (win6 == 3) {
                const winPlayer = document.getElementById("win");
                winPlayer.innerText = "You win!";
                stop = 1;
                break;
              }
              const len = playerA.length + playerB.length;
              if (len == 9) {
                if (win6 != 3) {
                  draw6++;
                }
              }
            }

            if (i == "wina7") {
              win7 = 0;
              const value = winArray[i];
              for (let i = 0; i < playerA.length; i++) {
                const checkWin = value.includes(playerA[i]);
                if (checkWin == true) {
                  win7++;
                }
              }
              if (win7 == 3) {
                const winPlayer = document.getElementById("win");
                winPlayer.innerText = "You win!";
                stop = 1;
                break;
              }
              const len = playerA.length + playerB.length;
              if (len == 9) {
                if (win7 != 3) {
                  draw7++;
                }
              }
            }

            if (i == "wina8") {
              win8 = 0;
              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerA.includes(value[i]);
                if (checkWin == true) {
                  win8++;
                }
              }
              if (win8 == 3) {
                const winPlayer = document.getElementById("win");
                winPlayer.innerText = "You win!";
                stop = 1;
                break;
              }
              const len = playerA.length + playerB.length;
              if (len == 9) {
                if (win8 != 3) {
                  draw8++;
                  console.log(draw8);
                }
              }
            }
          }
          if (
            draw1 == 1 &&
            draw2 == 1 &&
            draw3 == 1 &&
            draw4 == 1 &&
            draw5 == 1 &&
            draw6 == 1 &&
            draw7 == 1 &&
            draw8 == 1
          ) {
            const winPlayer = document.getElementById("win");
            winPlayer.innerText = "Draw!";
          }
        }
      }
    } else {
      if (stop != 1) {
        box1.innerText = "x";
        playerB.push(1);
        if (playerB.length >= 3) {
          console.log(`B:${playerB}`);
          for (let i in winArray) {
            if (i == "wina1") {
              winn1 = 0;
              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerB.includes(value[i]);
                if (checkWin == true) {
                  winn1++;
                }
                if (winn1 == 3) {
                  const winPlayer = document.getElementById("win");
                  winPlayer.innerText = "You Win!";
                  stop = 1;
                  break;
                }
              }
            }

            if (i == "wina2") {
              winn2 = 0;
              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerB.includes(value[i]);
                if (checkWin == true) {
                  winn2++;
                }
                if (winn2 == 3) {
                  const winPlayer = document.getElementById("win");
                  winPlayer.innerText = "You Win!";
                  stop = 1;
                  break;
                }
              }
            }

            if (i == "wina3") {
              winn3 = 0;
              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerB.includes(value[i]);
                if (checkWin == true) {
                  winn3++;
                }
                if (winn3 == 3) {
                  const winPlayer = document.getElementById("win");
                  winPlayer.innerText = "You Win!";
                  stop = 1;
                  break;
                }
              }
            }

            if (i == "wina4") {
              winn4 = 0;
              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerB.includes(value[i]);
                if (checkWin == true) {
                  winn4++;
                }
                if (winn4 == 3) {
                  const winPlayer = document.getElementById("win");
                  winPlayer.innerText = "You Win!";
                  stop = 1;
                  break;
                }
              }
            }

            if (i == "wina5") {
              winn5 = 0;
              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerB.includes(value[i]);
                if (checkWin == true) {
                  winn5++;
                }
                if (winn5 == 3) {
                  const winPlayer = document.getElementById("win");
                  winPlayer.innerText = "You Win!";
                  stop = 1;
                  break;
                }
              }
            }

            if (i == "wina6") {
              winn6 = 0;
              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerB.includes(value[i]);
                if (checkWin == true) {
                  winn6++;
                }
                if (winn6 == 3) {
                  const winPlayer = document.getElementById("win");
                  winPlayer.innerText = "You Win!";
                  stop = 1;
                  break;
                }
              }
            }

            if (i == "wina7") {
              winn7 = 0;
              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerB.includes(value[i]);
                if (checkWin == true) {
                  winn7++;
                }
                if (winn7 == 3) {
                  const winPlayer = document.getElementById("win");
                  winPlayer.innerText = "You Win!";
                  stop = 1;
                  break;
                }
              }
            }

            if (i == "wina8") {
              winn8 = 0;
              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerB.includes(value[i]);
                if (checkWin == true) {
                  winn8++;
                }
                if (winn8 == 3) {
                  const winPlayer = document.getElementById("win");
                  winPlayer.innerText = "You Win!";
                  stop = 1;
                  break;
                }
              }
            }
          }
        }
      }
    }
  }
}

function clickbox2() {
  const box2 = document.getElementById("idbox2");
  value2++;
  if (value2 == 1) {
    count++;
    if (count % 2 == 0) {
      if (stop != 1) {
        box2.innerText = 0;
        playerA.push(2);
        if (playerA.length >= 3) {
          console.log(`A:${playerA}`);
          for (let i in winArray) {
            if (i == "wina1") {
              win1 = 0;
              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerA.includes(value[i]);
                if (checkWin == true) {
                  win1++;
                }
              }
              if (win1 == 3) {
                const winPlayer = document.getElementById("win");
                winPlayer.innerText = "You Win!";
                stop = 1;
                break;
              }
              const len = playerA.length + playerB.length;
              if (len == 9) {
                if (win1 != 0) {
                  draw1++;
                }
              }
            }

            if (i == "wina2") {
              win2 = 0;
              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerA.includes(value[i]);
                if (checkWin == true) {
                  win2++;
                }
              }
              if (win2 == 3) {
                const winPlayer = document.getElementById("win");
                winPlayer.innerText = "You Win!";
                stop = 1;
                break;
              }
              const len = playerA.length + playerB.length;
              if (len == 9) {
                if (win2 != 0) {
                  draw2++;
                }
              }
            }

            if (i == "wina3") {
              win3 = 0;
              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerA.includes(value[i]);
                if (checkWin == true) {
                  win3++;
                }
              }
              if (win3 == 3) {
                const winPlayer = document.getElementById("win");
                winPlayer.innerText = "You Win!";
                stop = 1;
                break;
              }
              const len = playerA.length + playerB.length;
              if (len == 9) {
                if (win3 != 0) {
                  draw3++;
                }
              }
            }

            if (i == "wina4") {
              win4 = 0;
              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerA.includes(value[i]);
                if (checkWin == true) {
                  win4++;
                }
              }
              if (win4 == 3) {
                const winPlayer = document.getElementById("win");
                winPlayer.innerText = "You Win!";
                stop = 1;
                break;
              }
              const len = playerA.length + playerB.length;
              if (len == 9) {
                if (win4 != 0) {
                  draw4++;
                }
              }
            }

            if (i == "wina5") {
              win5 = 0;
              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerA.includes(value[i]);
                if (checkWin == true) {
                  win5++;
                }
              }
              if (win5 == 3) {
                const winPlayer = document.getElementById("win");
                winPlayer.innerText = "You Win!";
                stop = 1;
                break;
              }
              const len = playerA.length + playerB.length;
              if (len == 9) {
                if (win5 != 0) {
                  draw5++;
                }
              }
            }

            if (i == "wina6") {
              win6 = 0;
              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerA.includes(value[i]);
                if (checkWin == true) {
                  win6++;
                }
              }
              if (win6 == 3) {
                const winPlayer = document.getElementById("win");
                winPlayer.innerText = "You Win!";
                stop = 1;
                break;
              }
              const len = playerA.length + playerB.length;
              if (len == 9) {
                if (win6 != 0) {
                  draw6++;
                }
              }
            }

            if (i == "wina7") {
              win7 = 0;
              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerA.includes(value[i]);
                if (checkWin == true) {
                  win7++;
                }
              }
              if (win7 == 3) {
                const winPlayer = document.getElementById("win");
                winPlayer.innerText = "You Win!";
                stop = 1;
                break;
              }
              const len = playerA.length + playerB.length;
              if (len == 9) {
                if (win7 != 0) {
                  draw7++;
                }
              }
            }

            if (i == "wina8") {
              win8 = 0;
              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerA.includes(value[i]);
                if (checkWin == true) {
                  win8++;
                }
              }
              if (win8 == 3) {
                const winPlayer = document.getElementById("win");
                winPlayer.innerText = "You Win!";
                stop = 1;
                break;
              }
              const len = playerA.length + playerB.length;
              if (len == 9) {
                if (win8 != 0) {
                  draw8++;
                }
              }
            }
          }
          if (
            draw1 == 1 &&
            draw2 == 1 &&
            draw3 == 1 &&
            draw4 == 1 &&
            draw5 == 1 &&
            draw6 == 1 &&
            draw7 == 1 &&
            draw8 == 1
          ) {
            const winPlayer = document.getElementById("win");
            winPlayer.innerText = "Draw!";
          }
        }
      }
    } else {
      if (stop != 1) {
        box2.innerText = "x";
        playerB.push(2);
        if (playerB.length >= 3) {
          console.log(`B:${playerB}`);
          for (let i in winArray) {
            if (i == "wina1") {
              winn1 = 0;
              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerB.includes(value[i]);
                if (checkWin == true) {
                  winn1++;
                }
                if (winn1 == 3) {
                  const winPlayer = document.getElementById("win");
                  winPlayer.innerText = "You Win!";
                  stop = 1;
                  break;
                }
              }
            }

            if (i == "wina2") {
              winn2 = 0;

              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerB.includes(value[i]);
                if (checkWin == true) {
                  winn2++;
                }
                if (winn2 == 3) {
                  const winPlayer = document.getElementById("win");
                  winPlayer.innerText = "You Win!";
                  stop = 1;
                  break;
                }
              }
            }

            if (i == "wina3") {
              winn3 = 0;

              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerB.includes(value[i]);
                if (checkWin == true) {
                  winn3++;
                }
                if (winn3 == 3) {
                  const winPlayer = document.getElementById("win");
                  winPlayer.innerText = "You Win!";
                  stop = 1;
                  break;
                }
              }
            }

            if (i == "wina4") {
              winn4 = 0;

              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerB.includes(value[i]);
                if (checkWin == true) {
                  winn4++;
                }
                if (winn4 == 3) {
                  const winPlayer = document.getElementById("win");
                  winPlayer.innerText = "You Win!";
                  stop = 1;
                  break;
                }
              }
            }

            if (i == "wina5") {
              winn5 = 0;

              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerB.includes(value[i]);
                if (checkWin == true) {
                  winn5++;
                }
                if (winn5 == 3) {
                  const winPlayer = document.getElementById("win");
                  winPlayer.innerText = "You Win!";
                  stop = 1;
                  break;
                }
              }
            }

            if (i == "wina6") {
              winn6 = 0;

              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerB.includes(value[i]);
                if (checkWin == true) {
                  winn6++;
                }
                if (winn6 == 3) {
                  const winPlayer = document.getElementById("win");
                  winPlayer.innerText = "You Win!";
                  stop = 1;
                  break;
                }
              }
            }

            if (i == "wina7") {
              winn7 = 0;

              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerB.includes(value[i]);
                if (checkWin == true) {
                  winn7++;
                }
                if (winn7 == 3) {
                  const winPlayer = document.getElementById("win");
                  winPlayer.innerText = "You Win!";
                  stop = 1;
                  break;
                }
              }
            }

            if (i == "wina8") {
              winn8 = 0;

              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerB.includes(value[i]);
                if (checkWin == true) {
                  winn8++;
                }
                if (winn8 == 3) {
                  const winPlayer = document.getElementById("win");
                  winPlayer.innerText = "You Win!";
                  stop = 1;
                  break;
                }
              }
            }
          }
        }
      }
    }
  }
}

function clickbox3() {
  const box3 = document.getElementById("idbox3");
  value3++;
  if (value3 == 1) {
    count++;
    if (count % 2 == 0) {
      if (stop != 1) {
        box3.innerText = 0;
        playerA.push(3);
        if (playerA.length >= 3) {
          console.log(`A:${playerA}`);
          for (let i in winArray) {
            if (i == "wina1") {
              win1 = 0;
              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerA.includes(value[i]);
                if (checkWin == true) {
                  win1++;
                }
              }
              if (win1 == 3) {
                const winPlayer = document.getElementById("win");
                winPlayer.innerText = "You Win!";
                stop = 1;
                break;
              }
              const len = playerA.length + playerB.length;
              if (len == 9) {
                if (win1 != 0) {
                  draw1++;
                }
              }
            }

            if (i == "wina2") {
              win2 = 0;

              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerA.includes(value[i]);
                if (checkWin == true) {
                  win2++;
                }
              }
              if (win2 == 3) {
                const winPlayer = document.getElementById("win");
                winPlayer.innerText = "You Win!";
                stop = 1;
                break;
              }
              const len = playerA.length + playerB.length;
              if (len == 9) {
                if (win2 != 0) {
                  draw2++;
                }
              }
            }

            if (i == "wina3") {
              win3 = 0;

              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerA.includes(value[i]);
                if (checkWin == true) {
                  win3++;
                }
              }
              if (win3 == 3) {
                const winPlayer = document.getElementById("win");
                winPlayer.innerText = "You Win!";
                stop = 1;
                break;
              }
              const len = playerA.length + playerB.length;
              if (len == 9) {
                if (win3 != 0) {
                  draw3++;
                }
              }
            }

            if (i == "wina4") {
              win4 = 0;

              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerA.includes(value[i]);
                if (checkWin == true) {
                  win4++;
                }
              }
              if (win4 == 3) {
                const winPlayer = document.getElementById("win");
                winPlayer.innerText = "You Win!";
                stop = 1;
                break;
              }
              const len = playerA.length + playerB.length;
              if (len == 9) {
                if (win4 != 0) {
                  draw4++;
                }
              }
            }

            if (i == "wina5") {
              win5 = 0;
              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerA.includes(value[i]);
                if (checkWin == true) {
                  win5++;
                }
              }
              if (win5 == 3) {
                const winPlayer = document.getElementById("win");
                winPlayer.innerText = "You Win!";
                stop = 1;
                break;
              }
              const len = playerA.length + playerB.length;
              if (len == 9) {
                if (win5 != 0) {
                  draw5++;
                }
              }
            }

            if (i == "wina6") {
              win6 = 0;

              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerA.includes(value[i]);
                if (checkWin == true) {
                  win6++;
                }
              }
              if (win6 == 3) {
                const winPlayer = document.getElementById("win");
                winPlayer.innerText = "You Win!";
                stop = 1;
                break;
              }
              const len = playerA.length + playerB.length;
              if (len == 9) {
                if (win6 != 0) {
                  draw6++;
                }
              }
            }

            if (i == "wina7") {
              win7 = 0;

              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerA.includes(value[i]);
                if (checkWin == true) {
                  win7++;
                }
              }
              if (win7 == 3) {
                const winPlayer = document.getElementById("win");
                winPlayer.innerText = "You Win!";
                stop = 1;
                break;
              }
              const len = playerA.length + playerB.length;
              if (len == 9) {
                if (win7 != 0) {
                  draw7++;
                }
              }
            }

            if (i == "wina8") {
              win8 = 0;

              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerA.includes(value[i]);
                if (checkWin == true) {
                  win8++;
                }
              }
              if (win8 == 3) {
                const winPlayer = document.getElementById("win");
                winPlayer.innerText = "You Win!";
                stop = 1;
                break;
              }
              const len = playerA.length + playerB.length;
              if (len == 9) {
                if (win8 != 0) {
                  draw8++;
                }
              }
            }
          }
          if (
            draw1 == 1 &&
            draw2 == 1 &&
            draw3 == 1 &&
            draw4 == 1 &&
            draw5 == 1 &&
            draw6 == 1 &&
            draw7 == 1 &&
            draw8 == 1
          ) {
            const winPlayer = document.getElementById("win");
            winPlayer.innerText = "Draw!";
          }
        }
      }
    } else {
      if (stop != 1) {
        box3.innerText = "x";
        playerB.push(3);
        if (playerB.length >= 3) {
          console.log(`B:${playerB}`);
          for (let i in winArray) {
            if (i == "wina1") {
              winn1 = 0;

              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerB.includes(value[i]);
                if (checkWin == true) {
                  winn1++;
                }
                if (winn1 == 3) {
                  const winPlayer = document.getElementById("win");
                  winPlayer.innerText = "You Win!";
                  stop = 1;
                  break;
                }
              }
            }

            if (i == "wina2") {
              winn2 = 0;

              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerB.includes(value[i]);
                if (checkWin == true) {
                  winn2++;
                }
                if (winn2 == 3) {
                  const winPlayer = document.getElementById("win");
                  winPlayer.innerText = "You Win!";
                  stop = 1;
                  break;
                }
              }
            }

            if (i == "wina3") {
              winn3 = 0;

              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerB.includes(value[i]);
                if (checkWin == true) {
                  winn3++;
                }
                if (winn3 == 3) {
                  const winPlayer = document.getElementById("win");
                  winPlayer.innerText = "You Win!";
                  stop = 1;
                  break;
                }
              }
            }

            if (i == "wina4") {
              winn4 = 0;

              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerB.includes(value[i]);
                if (checkWin == true) {
                  winn4++;
                }
                if (winn4 == 3) {
                  const winPlayer = document.getElementById("win");
                  winPlayer.innerText = "You Win!";
                  stop = 1;
                  break;
                }
              }
            }

            if (i == "wina5") {
              winn5 = 0;

              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerB.includes(value[i]);
                if (checkWin == true) {
                  winn5++;
                }
                if (winn5 == 3) {
                  const winPlayer = document.getElementById("win");
                  winPlayer.innerText = "You Win!";
                  stop = 1;
                  break;
                }
              }
            }

            if (i == "wina6") {
              winn6 = 0;

              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerB.includes(value[i]);
                if (checkWin == true) {
                  winn6++;
                }
                if (winn6 == 3) {
                  const winPlayer = document.getElementById("win");
                  winPlayer.innerText = "You Win!";
                  stop = 1;
                  break;
                }
              }
            }

            if (i == "wina7") {
              winn7 = 0;

              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerB.includes(value[i]);
                if (checkWin == true) {
                  winn7++;
                }
                if (winn7 == 3) {
                  const winPlayer = document.getElementById("win");
                  winPlayer.innerText = "You Win!";
                  stop = 1;
                  break;
                }
              }
            }

            if (i == "wina8") {
              winn8 = 0;

              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerB.includes(value[i]);
                if (checkWin == true) {
                  winn8++;
                }
                if (winn8 == 3) {
                  const winPlayer = document.getElementById("win");
                  winPlayer.innerText = "You Win!";
                  stop = 1;
                  break;
                }
              }
            }
          }
        }
      }
    }
  }
}

function clickbox4() {
  const box4 = document.getElementById("idbox4");
  value4++;
  if (value4 == 1) {
    count++;
    if (count % 2 == 0) {
      if (stop != 1) {
        box4.innerText = 0;
        playerA.push(4);
        if (playerA.length >= 3) {
          console.log(`A:${playerA}`);
          for (let i in winArray) {
            if (i == "wina1") {
              win1 = 0;

              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerA.includes(value[i]);
                if (checkWin == true) {
                  win1++;
                }
              }
              if (win1 == 3) {
                const winPlayer = document.getElementById("win");
                winPlayer.innerText = "You Win!";
                stop = 1;
                break;
              }
              const len = playerA.length + playerB.length;
              if (len == 9) {
                if (win1 != 0) {
                  draw1++;
                }
              }
            }

            if (i == "wina2") {
              win2 = 0;

              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerA.includes(value[i]);
                if (checkWin == true) {
                  win2++;
                }
              }
              if (win2 == 3) {
                const winPlayer = document.getElementById("win");
                winPlayer.innerText = "You Win!";
                stop = 1;
                break;
              }
              const len = playerA.length + playerB.length;
              if (len == 9) {
                if (win2 != 0) {
                  draw2++;
                }
              }
            }

            if (i == "wina3") {
              win3 = 0;

              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerA.includes(value[i]);
                if (checkWin == true) {
                  win3++;
                }
              }
              if (win3 == 3) {
                const winPlayer = document.getElementById("win");
                winPlayer.innerText = "You Win!";
                stop = 1;
                break;
              }
              const len = playerA.length + playerB.length;
              if (len == 9) {
                if (win3 != 0) {
                  draw3++;
                }
              }
            }

            if (i == "wina4") {
              win4 = 0;

              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerA.includes(value[i]);
                if (checkWin == true) {
                  win4++;
                }
              }
              if (win4 == 3) {
                const winPlayer = document.getElementById("win");
                winPlayer.innerText = "You Win!";
                stop = 1;
                break;
              }
              const len = playerA.length + playerB.length;
              if (len == 9) {
                if (win4 != 0) {
                  draw4++;
                }
              }
            }

            if (i == "wina5") {
              win5 = 0;

              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerA.includes(value[i]);
                if (checkWin == true) {
                  win5++;
                }
              }
              if (win5 == 3) {
                const winPlayer = document.getElementById("win");
                winPlayer.innerText = "You Win!";
                stop = 1;
                break;
              }
              const len = playerA.length + playerB.length;
              if (len == 9) {
                if (win5 != 0) {
                  draw5++;
                }
              }
            }

            if (i == "wina6") {
              win6 = 0;

              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerA.includes(value[i]);
                if (checkWin == true) {
                  win6++;
                }
              }
              if (win6 == 3) {
                const winPlayer = document.getElementById("win");
                winPlayer.innerText = "You Win!";
                stop = 1;
                break;
              }
              const len = playerA.length + playerB.length;
              if (len == 9) {
                if (win6 != 0) {
                  draw6++;
                }
              }
            }

            if (i == "wina7") {
              win7 = 0;

              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerA.includes(value[i]);
                if (checkWin == true) {
                  win7++;
                }
              }
              if (win7 == 3) {
                const winPlayer = document.getElementById("win");
                winPlayer.innerText = "You Win!";
                stop = 1;
                break;
              }
              const len = playerA.length + playerB.length;
              if (len == 9) {
                if (win7 != 0) {
                  draw7++;
                }
              }
            }

            if (i == "wina8") {
              win8 = 0;

              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerA.includes(value[i]);
                if (checkWin == true) {
                  win8++;
                }
              }
              if (win8 == 3) {
                const winPlayer = document.getElementById("win");
                winPlayer.innerText = "You Win!";
                stop = 1;
                break;
              }
              const len = playerA.length + playerB.length;
              if (len == 9) {
                if (win8 != 0) {
                  draw8++;
                }
              }
            }
          }
          if (
            draw1 == 1 &&
            draw2 == 1 &&
            draw3 == 1 &&
            draw4 == 1 &&
            draw5 == 1 &&
            draw6 == 1 &&
            draw7 == 1 &&
            draw8 == 1
          ) {
            const winPlayer = document.getElementById("win");
            winPlayer.innerText = "Draw!";
          }
        }
      }
    } else {
      if (stop != 1) {
        box4.innerText = "x";
        playerB.push(4);
        if (playerB.length >= 3) {
          console.log(`B:${playerB}`);
          for (let i in winArray) {
            if (i == "wina1") {
              winn1 = 0;

              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerB.includes(value[i]);
                if (checkWin == true) {
                  winn1++;
                }
                if (winn1 == 3) {
                  const winPlayer = document.getElementById("win");
                  winPlayer.innerText = "You Win!";
                  stop = 1;
                  break;
                }
              }
            }

            if (i == "wina2") {
              winn2 = 0;

              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerB.includes(value[i]);
                if (checkWin == true) {
                  winn2++;
                }
                if (winn2 == 3) {
                  const winPlayer = document.getElementById("win");
                  winPlayer.innerText = "You Win!";
                  stop = 1;
                  break;
                }
              }
            }

            if (i == "wina3") {
              winn3 = 0;

              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerB.includes(value[i]);
                if (checkWin == true) {
                  winn3++;
                }
                if (winn3 == 3) {
                  const winPlayer = document.getElementById("win");
                  winPlayer.innerText = "You Win!";
                  stop = 1;
                  break;
                }
              }
            }

            if (i == "wina4") {
              winn4 = 0;

              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerB.includes(value[i]);
                if (checkWin == true) {
                  winn4++;
                }
                if (winn4 == 3) {
                  const winPlayer = document.getElementById("win");
                  winPlayer.innerText = "You Win!";
                  stop = 1;
                  break;
                }
              }
            }

            if (i == "wina5") {
              winn5 = 0;

              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerB.includes(value[i]);
                if (checkWin == true) {
                  winn5++;
                }
                if (winn5 == 3) {
                  const winPlayer = document.getElementById("win");
                  winPlayer.innerText = "You Win!";
                  stop = 1;
                  break;
                }
              }
            }

            if (i == "wina6") {
              winn6 = 0;

              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerB.includes(value[i]);
                if (checkWin == true) {
                  winn6++;
                }
                if (winn6 == 3) {
                  const winPlayer = document.getElementById("win");
                  winPlayer.innerText = "You Win!";
                  stop = 1;
                  break;
                }
              }
            }

            if (i == "wina7") {
              winn7 = 0;

              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerB.includes(value[i]);
                if (checkWin == true) {
                  winn7++;
                }
                if (winn7 == 3) {
                  const winPlayer = document.getElementById("win");
                  winPlayer.innerText = "You Win!";
                  stop = 1;
                  break;
                }
              }
            }

            if (i == "wina8") {
              winn8 = 0;
              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerB.includes(value[i]);
                if (checkWin == true) {
                  winn8++;
                }
                if (winn8 == 3) {
                  const winPlayer = document.getElementById("win");
                  winPlayer.innerText = "You Win!";
                  stop = 1;
                  break;
                }
              }
            }
          }
        }
      }
    }
  }
}

function clickbox5() {
  const box5 = document.getElementById("idbox5");
  value5++;
  if (value5 == 1) {
    count++;
    if (count % 2 == 0) {
      if (stop != 1) {
        box5.innerText = 0;
        playerA.push(5);
        if (playerA.length >= 3) {
          console.log(`A:${playerA}`);
          for (let i in winArray) {
            if (i == "wina1") {
              win1 = 0;

              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerA.includes(value[i]);
                if (checkWin == true) {
                  win1++;
                }
              }
              if (win1 == 3) {
                const winPlayer = document.getElementById("win");
                winPlayer.innerText = "You Win!";
                stop = 1;
                break;
              }
              const len = playerA.length + playerB.length;
              if (len == 9) {
                if (win1 != 0) {
                  draw1++;
                  console.log(draw1);
                }
              }
            }

            if (i == "wina2") {
              win2 = 0;

              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerA.includes(value[i]);
                if (checkWin == true) {
                  win2++;
                }
              }
              if (win2 == 3) {
                const winPlayer = document.getElementById("win");
                winPlayer.innerText = "You Win!";
                stop = 1;
                break;
              }
              const len = playerA.length + playerB.length;
              if (len == 9) {
                if (win2 != 0) {
                  draw2++;
                }
              }
            }

            if (i == "wina3") {
              win3 = 0;
              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerA.includes(value[i]);
                if (checkWin == true) {
                  win3++;
                }
              }
              if (win3 == 3) {
                const winPlayer = document.getElementById("win");
                winPlayer.innerText = "You Win!";
                stop = 1;
                break;
              }
              const len = playerA.length + playerB.length;
              if (len == 9) {
                if (win3 != 0) {
                  draw3++;
                  console.log(draw3);
                }
              }
            }

            if (i == "wina4") {
              win4 = 0;
              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerA.includes(value[i]);
                if (checkWin == true) {
                  win4++;
                }
              }
              if (win4 == 3) {
                const winPlayer = document.getElementById("win");
                winPlayer.innerText = "You Win!";
                stop = 1;
                break;
              }
              const len = playerA.length + playerB.length;
              if (len == 9) {
                if (win4 != 0) {
                  draw4++;
                }
              }
            }

            if (i == "wina5") {
              win5 = 0;
              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerA.includes(value[i]);
                if (checkWin == true) {
                  win5++;
                }
              }
              if (win5 == 3) {
                const winPlayer = document.getElementById("win");
                winPlayer.innerText = "You Win!";
                stop = 1;
                break;
              }
              const len = playerA.length + playerB.length;
              if (len == 9) {
                if (win5 != 0) {
                  draw5++;
                  console.log(draw5);
                }
              }
            }

            if (i == "wina6") {
              win6 = 0;
              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerA.includes(value[i]);
                if (checkWin == true) {
                  win6++;
                }
              }
              if (win6 == 3) {
                const winPlayer = document.getElementById("win");
                winPlayer.innerText = "You Win!";
                stop = 1;
                break;
              }
              const len = playerA.length + playerB.length;
              if (len == 9) {
                if (win6 != 0) {
                  draw6++;
                }
              }
            }

            if (i == "wina7") {
              win7 = 0;

              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerA.includes(value[i]);
                if (checkWin == true) {
                  win7++;
                }
              }
              if (win7 == 3) {
                const winPlayer = document.getElementById("win");
                winPlayer.innerText = "You Win!";
                stop = 1;
                break;
              }
              const len = playerA.length + playerB.length;
              if (len == 9) {
                if (win7 != 0) {
                  draw7++;
                }
              }
            }

            if (i == "wina8") {
              win8 = 0;

              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerA.includes(value[i]);
                if (checkWin == true) {
                  win8++;
                }
              }
              if (win8 == 3) {
                const winPlayer = document.getElementById("win");
                winPlayer.innerText = "You Win!";
                stop = 1;
                break;
              }
              const len = playerA.length + playerB.length;
              if (len == 9) {
                if (win8 != 0) {
                  draw8++;
                }
              }
            }
          }
          if (
            draw1 == 1 &&
            draw2 == 1 &&
            draw3 == 1 &&
            draw4 == 1 &&
            draw5 == 1 &&
            draw6 == 1 &&
            draw7 == 1 &&
            draw8 == 1
          ) {
            const winPlayer = document.getElementById("win");
            winPlayer.innerText = "Draw!";
          }
        }
      }
    } else {
      if (stop != 1) {
        box5.innerText = "x";
        playerB.push(5);
        if (playerB.length >= 3) {
          console.log(`B:${playerB}`);
          for (let i in winArray) {
            if (i == "wina1") {
              winn1 = 0;

              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerB.includes(value[i]);
                if (checkWin == true) {
                  winn1++;
                }
                if (winn1 == 3) {
                  const winPlayer = document.getElementById("win");
                  winPlayer.innerText = "You Win!";
                  stop = 1;
                  break;
                }
              }
            }

            if (i == "wina2") {
              winn2 = 0;

              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerB.includes(value[i]);
                if (checkWin == true) {
                  winn2++;
                }
                if (winn2 == 3) {
                  const winPlayer = document.getElementById("win");
                  winPlayer.innerText = "You Win!";
                  stop = 1;
                  break;
                }
              }
            }

            if (i == "wina3") {
              winn3 = 0;

              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerB.includes(value[i]);
                if (checkWin == true) {
                  winn3++;
                }
                if (winn3 == 3) {
                  const winPlayer = document.getElementById("win");
                  winPlayer.innerText = "You Win!";
                  stop = 1;
                  break;
                }
              }
            }

            if (i == "wina4") {
              winn4 = 0;

              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerB.includes(value[i]);
                if (checkWin == true) {
                  winn4++;
                }
                if (winn4 == 3) {
                  const winPlayer = document.getElementById("win");
                  winPlayer.innerText = "You Win!";
                  stop = 1;
                  break;
                }
              }
            }

            if (i == "wina5") {
              winn5 = 0;

              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerB.includes(value[i]);
                if (checkWin == true) {
                  winn5++;
                }
                if (winn5 == 3) {
                  const winPlayer = document.getElementById("win");
                  winPlayer.innerText = "You Win!";
                  stop = 1;
                  break;
                }
              }
            }

            if (i == "wina6") {
              winn6 = 0;

              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerB.includes(value[i]);
                if (checkWin == true) {
                  winn6++;
                }
                if (winn6 == 3) {
                  const winPlayer = document.getElementById("win");
                  winPlayer.innerText = "You Win!";
                  stop = 1;
                  break;
                }
              }
            }

            if (i == "wina7") {
              winn7 = 0;

              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerB.includes(value[i]);
                if (checkWin == true) {
                  winn7++;
                }
                if (winn7 == 3) {
                  const winPlayer = document.getElementById("win");
                  winPlayer.innerText = "You Win!";
                  stop = 1;
                  break;
                }
              }
            }

            if (i == "wina8") {
              winn8 = 0;

              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerB.includes(value[i]);
                if (checkWin == true) {
                  winn8++;
                }
                if (winn8 == 3) {
                  const winPlayer = document.getElementById("win");
                  winPlayer.innerText = "You Win!";
                  stop = 1;
                  break;
                }
              }
            }
          }
        }
      }
    }
  }
}

function clickbox6() {
  const box6 = document.getElementById("idbox6");
  value6++;
  if (value6 == 1) {
    count++;
    if (count % 2 == 0) {
      if (stop != 1) {
        box6.innerText = 0;
        playerA.push(6);
        if (playerA.length >= 3) {
          console.log(`A:${playerA}`);
          for (let i in winArray) {
            if (i == "wina1") {
              win1 = 0;
              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerA.includes(value[i]);
                if (checkWin == true) {
                  win1++;
                }
              }
              if (win1 == 3) {
                const winPlayer = document.getElementById("win");
                winPlayer.innerText = "You Win!";
                stop = 1;
                break;
              }
              const len = playerA.length + playerB.length;
              if (len == 9) {
                if (win1 != 0) {
                  draw1++;
                }
              }
            }

            if (i == "wina2") {
              win2 = 0;

              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerA.includes(value[i]);
                if (checkWin == true) {
                  win2++;
                }
              }
              if (win2 == 3) {
                const winPlayer = document.getElementById("win");
                winPlayer.innerText = "You Win!";
                stop = 1;
                break;
              }
              const len = playerA.length + playerB.length;
              if (len == 9) {
                if (win2 != 0) {
                  draw2++;
                }
              }
            }

            if (i == "wina3") {
              win3 = 0;

              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerA.includes(value[i]);
                if (checkWin == true) {
                  win3++;
                }
              }
              if (win3 == 3) {
                const winPlayer = document.getElementById("win");
                winPlayer.innerText = "You Win!";
                stop = 1;
                break;
              }
              const len = playerA.length + playerB.length;
              if (len == 9) {
                if (win3 != 0) {
                  draw3++;
                }
              }
            }

            if (i == "wina4") {
              win4 = 0;

              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerA.includes(value[i]);
                if (checkWin == true) {
                  win4++;
                }
              }
              if (win4 == 3) {
                const winPlayer = document.getElementById("win");
                winPlayer.innerText = "You Win!";
                stop = 1;
                break;
              }
              const len = playerA.length + playerB.length;
              if (len == 9) {
                if (win4 != 0) {
                  draw4++;
                }
              }
            }

            if (i == "wina5") {
              win5 = 0;

              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerA.includes(value[i]);
                if (checkWin == true) {
                  win5++;
                }
              }
              if (win5 == 3) {
                const winPlayer = document.getElementById("win");
                winPlayer.innerText = "You Win!";
                stop = 1;
                break;
              }
              const len = playerA.length + playerB.length;
              if (len == 9) {
                if (win5 != 0) {
                  draw5++;
                }
              }
            }

            if (i == "wina6") {
              win6 = 0;

              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerA.includes(value[i]);
                if (checkWin == true) {
                  win6++;
                }
              }
              if (win6 == 3) {
                const winPlayer = document.getElementById("win");
                winPlayer.innerText = "You Win!";
                stop = 1;
                break;
              }
              const len = playerA.length + playerB.length;
              if (len == 9) {
                if (win6 != 0) {
                  draw6++;
                }
              }
            }

            if (i == "wina7") {
              win7 = 0;

              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerA.includes(value[i]);
                if (checkWin == true) {
                  win7++;
                }
              }
              if (win7 == 3) {
                const winPlayer = document.getElementById("win");
                winPlayer.innerText = "You Win!";
                stop = 1;
                break;
              }
              const len = playerA.length + playerB.length;
              if (len == 9) {
                if (win7 != 0) {
                  draw7++;
                }
              }
            }

            if (i == "wina8") {
              win8 = 0;

              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerA.includes(value[i]);
                if (checkWin == true) {
                  win8++;
                }
              }
              if (win8 == 3) {
                const winPlayer = document.getElementById("win");
                winPlayer.innerText = "You Win!";
                stop = 1;
                break;
              }
              const len = playerA.length + playerB.length;
              if (len == 9) {
                if (win8 != 0) {
                  draw8++;
                }
              }
            }
          }
          if (
            draw1 == 1 &&
            draw2 == 1 &&
            draw3 == 1 &&
            draw4 == 1 &&
            draw5 == 1 &&
            draw6 == 1 &&
            draw7 == 1 &&
            draw8 == 1
          ) {
            const winPlayer = document.getElementById("win");
            winPlayer.innerText = "Draw!";
          }
        }
      }
    } else {
      if (stop != 1) {
        box6.innerText = "x";
        playerB.push(6);
        if (playerB.length >= 3) {
          console.log(`B:${playerB}`);
          for (let i in winArray) {
            if (i == "wina1") {
              winn1 = 0;

              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerB.includes(value[i]);
                if (checkWin == true) {
                  winn1++;
                }
                if (winn1 == 3) {
                  const winPlayer = document.getElementById("win");
                  winPlayer.innerText = "You Win!";
                  stop = 1;
                  break;
                }
              }
            }

            if (i == "wina2") {
              winn2 = 0;

              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerB.includes(value[i]);
                if (checkWin == true) {
                  winn2++;
                }
                if (winn2 == 3) {
                  const winPlayer = document.getElementById("win");
                  winPlayer.innerText = "You Win!";
                  stop = 1;
                  break;
                }
              }
            }

            if (i == "wina3") {
              winn3 = 0;

              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerB.includes(value[i]);
                if (checkWin == true) {
                  winn3++;
                }
                if (winn3 == 3) {
                  const winPlayer = document.getElementById("win");
                  winPlayer.innerText = "You Win!";
                  stop = 1;
                  break;
                }
              }
            }

            if (i == "wina4") {
              winn4 = 0;

              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerB.includes(value[i]);
                if (checkWin == true) {
                  winn4++;
                }
                if (winn4 == 3) {
                  const winPlayer = document.getElementById("win");
                  winPlayer.innerText = "You Win!";
                  stop = 1;
                  break;
                }
              }
            }

            if (i == "wina5") {
              winn5 = 0;

              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerB.includes(value[i]);
                if (checkWin == true) {
                  winn5++;
                }
                if (winn5 == 3) {
                  const winPlayer = document.getElementById("win");
                  winPlayer.innerText = "You Win!";
                  stop = 1;
                  break;
                }
              }
            }

            if (i == "wina6") {
              winn6 = 0;

              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerB.includes(value[i]);
                if (checkWin == true) {
                  winn6++;
                }
                if (winn6 == 3) {
                  const winPlayer = document.getElementById("win");
                  winPlayer.innerText = "You Win!";
                  stop = 1;
                  break;
                }
              }
            }

            if (i == "wina7") {
              winn7 = 0;

              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerB.includes(value[i]);
                if (checkWin == true) {
                  winn7++;
                }
                if (winn7 == 3) {
                  const winPlayer = document.getElementById("win");
                  winPlayer.innerText = "You Win!";
                  stop = 1;
                  break;
                }
              }
            }

            if (i == "wina8") {
              winn8 = 0;
              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerB.includes(value[i]);
                if (checkWin == true) {
                  winn8++;
                }
                if (winn8 == 3) {
                  const winPlayer = document.getElementById("win");
                  winPlayer.innerText = "You Win!";
                  stop = 1;
                  break;
                }
              }
            }
          }
        }
      }
    }
  }
}

function clickbox7() {
  const box7 = document.getElementById("idbox7");
  value7++;
  if (value7 == 1) {
    count++;
    if (count % 2 == 0) {
      if (stop != 1) {
        box7.innerText = 0;
        playerA.push(7);
        if (playerA.length >= 3) {
          console.log(`A:${playerA}`);
          for (let i in winArray) {
            if (i == "wina1") {
              win1 = 0;
              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerA.includes(value[i]);
                if (checkWin == true) {
                  win1++;
                }
              }
              if (win1 == 3) {
                const winPlayer = document.getElementById("win");
                winPlayer.innerText = "You Win!";
                stop = 1;
                break;
              }
              const len = playerA.length + playerB.length;
              if (len == 9) {
                if (win1 != 0) {
                  draw1++;
                }
              }
            }

            if (i == "wina2") {
              win2 = 0;

              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerA.includes(value[i]);
                if (checkWin == true) {
                  win2++;
                }
              }
              if (win2 == 3) {
                const winPlayer = document.getElementById("win");
                winPlayer.innerText = "You Win!";
                stop = 1;
                break;
              }
              const len = playerA.length + playerB.length;
              if (len == 9) {
                if (win2 != 0) {
                  draw2++;
                }
              }
            }

            if (i == "wina3") {
              win3 = 0;
              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerA.includes(value[i]);
                if (checkWin == true) {
                  win3++;
                }
              }
              if (win3 == 3) {
                const winPlayer = document.getElementById("win");
                winPlayer.innerText = "You Win!";
                stop = 1;
                break;
              }
              const len = playerA.length + playerB.length;
              if (len == 9) {
                if (win3 != 0) {
                  draw3++;
                }
              }
            }

            if (i == "wina4") {
              win4 = 0;
              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerA.includes(value[i]);
                if (checkWin == true) {
                  win4++;
                }
              }
              if (win4 == 3) {
                const winPlayer = document.getElementById("win");
                winPlayer.innerText = "You Win!";
                stop = 1;
                break;
              }
              const len = playerA.length + playerB.length;
              if (len == 9) {
                if (win4 != 0) {
                  draw4++;
                }
              }
            }

            if (i == "wina5") {
              win5 = 0;
              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerA.includes(value[i]);
                if (checkWin == true) {
                  win5++;
                }
              }
              if (win5 == 3) {
                const winPlayer = document.getElementById("win");
                winPlayer.innerText = "You Win!";
                stop = 1;
                break;
              }
              const len = playerA.length + playerB.length;
              if (len == 9) {
                if (win5 != 0) {
                  draw5++;
                }
              }
            }

            if (i == "wina6") {
              win6 = 0;
              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerA.includes(value[i]);
                if (checkWin == true) {
                  win6++;
                }
              }
              if (win6 == 3) {
                const winPlayer = document.getElementById("win");
                winPlayer.innerText = "You Win!";
                stop = 1;
                break;
              }
              const len = playerA.length + playerB.length;
              if (len == 9) {
                if (win6 != 0) {
                  draw6++;
                }
              }
            }

            if (i == "wina7") {
              win7 = 0;

              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerA.includes(value[i]);
                if (checkWin == true) {
                  win7++;
                }
              }
              if (win7 == 3) {
                const winPlayer = document.getElementById("win");
                winPlayer.innerText = "You Win!";
                stop = 1;
                break;
              }
              const len = playerA.length + playerB.length;
              if (len == 9) {
                if (win7 != 0) {
                  draw7++;
                }
              }
            }

            if (i == "wina8") {
              win8 = 0;
              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerA.includes(value[i]);
                if (checkWin == true) {
                  win8++;
                }
              }
              if (win8 == 3) {
                const winPlayer = document.getElementById("win");
                winPlayer.innerText = "You Win!";
                stop = 1;
                break;
              }
              const len = playerA.length + playerB.length;
              if (len == 9) {
                if (win8 != 0) {
                  draw8++;
                }
              }
            }
          }
          if (
            draw1 == 1 &&
            draw2 == 1 &&
            draw3 == 1 &&
            draw4 == 1 &&
            draw5 == 1 &&
            draw6 == 1 &&
            draw7 == 1 &&
            draw8 == 1
          ) {
            const winPlayer = document.getElementById("win");
            winPlayer.innerText = "Draw!";
          }
        }
      }
    } else {
      if (stop != 1) {
        box7.innerText = "x";
        playerB.push(7);
        if (playerB.length >= 3) {
          console.log(`B:${playerB}`);
          for (let i in winArray) {
            if (i == "wina1") {
              winn1 = 0;
              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerB.includes(value[i]);
                if (checkWin == true) {
                  winn1++;
                }
                if (winn1 == 3) {
                  const winPlayer = document.getElementById("win");
                  winPlayer.innerText = "You Win!";
                  stop = 1;
                  break;
                }
              }
            }

            if (i == "wina2") {
              winn2 = 0;
              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerB.includes(value[i]);
                if (checkWin == true) {
                  winn2++;
                }
                if (winn2 == 3) {
                  const winPlayer = document.getElementById("win");
                  winPlayer.innerText = "You Win!";
                  stop = 1;
                  break;
                }
              }
            }

            if (i == "wina3") {
              winn3 = 0;

              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerB.includes(value[i]);
                if (checkWin == true) {
                  win3++;
                }
                if (winn3 == 3) {
                  const winPlayer = document.getElementById("win");
                  winPlayer.innerText = "You Win!";
                  stop = 1;
                  break;
                }
              }
            }

            if (i == "wina4") {
              winn4 = 0;

              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerB.includes(value[i]);
                if (checkWin == true) {
                  winn4++;
                }
                if (winn4 == 3) {
                  const winPlayer = document.getElementById("win");
                  winPlayer.innerText = "You Win!";
                  stop = 1;
                  break;
                }
              }
            }

            if (i == "wina5") {
              winn5 = 0;
              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerB.includes(value[i]);
                if (checkWin == true) {
                  winn5++;
                }
                if (winn5 == 3) {
                  const winPlayer = document.getElementById("win");
                  winPlayer.innerText = "You Win!";
                  stop = 1;
                  break;
                }
              }
            }

            if (i == "wina6") {
              winn6 = 0;
              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerB.includes(value[i]);
                if (checkWin == true) {
                  winn6++;
                }
                if (winn6 == 3) {
                  const winPlayer = document.getElementById("win");
                  winPlayer.innerText = "You Win!";
                  stop = 1;
                  break;
                }
              }
            }

            if (i == "wina7") {
              winn7 = 0;
              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerB.includes(value[i]);
                if (checkWin == true) {
                  winn7++;
                }
                if (winn7 == 3) {
                  const winPlayer = document.getElementById("win");
                  winPlayer.innerText = "You Win!";
                  stop = 1;
                  break;
                }
              }
            }

            if (i == "wina8") {
              winn8 = 0;
              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerB.includes(value[i]);
                if (checkWin == true) {
                  winn8++;
                }
                if (winn8 == 3) {
                  const winPlayer = document.getElementById("win");
                  winPlayer.innerText = "You Win!";
                  stop = 1;
                  break;
                }
              }
            }
          }
        }
      }
    }
  }
}

function clickbox8() {
  const box8 = document.getElementById("idbox8");
  value8++;
  if (value8 == 1) {
    count++;
    if (count % 2 == 0) {
      if (stop != 1) {
        box8.innerText = 0;
        playerA.push(8);
        if (playerA.length >= 3) {
          console.log(`A:${playerA}`);
          for (let i in winArray) {
            if (i == "wina1") {
              win1 = 0;
              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerA.includes(value[i]);
                if (checkWin == true) {
                  win1++;
                }
              }
              if (win1 == 3) {
                const winPlayer = document.getElementById("win");
                winPlayer.innerText = "You Win!";
                stop = 1;
                break;
              }
              const len = playerA.length + playerB.length;
              if (len == 9) {
                if (win1 != 0) {
                  draw1++;
                }
              }
            }

            if (i == "wina2") {
              win2 = 0;

              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerA.includes(value[i]);
                if (checkWin == true) {
                  win2++;
                }
              }
              if (win2 == 3) {
                const winPlayer = document.getElementById("win");
                winPlayer.innerText = "You Win!";
                stop = 1;
                break;
              }
              const len = playerA.length + playerB.length;
              if (len == 9) {
                if (win2 != 0) {
                  draw2++;
                }
              }
            }

            if (i == "wina3") {
              win3 = 0;

              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerA.includes(value[i]);
                if (checkWin == true) {
                  win3++;
                }
              }
              if (win3 == 3) {
                const winPlayer = document.getElementById("win");
                winPlayer.innerText = "You Win!";
                stop = 1;
                break;
              }
              const len = playerA.length + playerB.length;
              if (len == 9) {
                if (win3 != 0) {
                  draw3++;
                }
              }
            }

            if (i == "wina4") {
              win4 = 0;

              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerA.includes(value[i]);
                if (checkWin == true) {
                  win4++;
                }
              }
              if (win4 == 3) {
                const winPlayer = document.getElementById("win");
                winPlayer.innerText = "You Win!";
                stop = 1;
                break;
              }
              const len = playerA.length + playerB.length;
              if (len == 9) {
                if (win4 != 0) {
                  draw4++;
                }
              }
            }

            if (i == "wina5") {
              win5 = 0;

              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerA.includes(value[i]);
                if (checkWin == true) {
                  win5++;
                }
              }
              if (win5 == 3) {
                const winPlayer = document.getElementById("win");
                winPlayer.innerText = "You Win!";
                stop = 1;
                break;
              }
              const len = playerA.length + playerB.length;
              if (len == 9) {
                if (win5 != 0) {
                  draw5++;
                }
              }
            }

            if (i == "wina6") {
              win6 = 0;

              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerA.includes(value[i]);
                if (checkWin == true) {
                  win6++;
                }
              }
              if (win6 == 3) {
                const winPlayer = document.getElementById("win");
                winPlayer.innerText = "You Win!";
                stop = 1;
                break;
              }
              const len = playerA.length + playerB.length;
              if (len == 9) {
                if (win6 != 0) {
                  draw6++;
                }
              }
            }

            if (i == "wina7") {
              win7 = 0;

              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerA.includes(value[i]);
                if (checkWin == true) {
                  win7++;
                }
              }
              if (win7 == 3) {
                const winPlayer = document.getElementById("win");
                winPlayer.innerText = "You Win!";
                stop = 1;
                break;
              }
              const len = playerA.length + playerB.length;
              if (len == 9) {
                if (win7 != 0) {
                  draw7++;
                }
              }
            }

            if (i == "wina8") {
              win8 = 0;
              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerA.includes(value[i]);
                if (checkWin == true) {
                  win8++;
                }
              }
              if (win8 == 3) {
                const winPlayer = document.getElementById("win");
                winPlayer.innerText = "You Win!";
                stop = 1;
                break;
              }
              const len = playerA.length + playerB.length;
              if (len == 9) {
                if (win8 != 0) {
                  draw8++;
                }
              }
            }
          }
          if (
            draw1 == 1 &&
            draw2 == 1 &&
            draw3 == 1 &&
            draw4 == 1 &&
            draw5 == 1 &&
            draw6 == 1 &&
            draw7 == 1 &&
            draw8 == 1
          ) {
            const winPlayer = document.getElementById("win");
            winPlayer.innerText = "Draw!";
          }
        }
      }
    } else {
      if (stop != 1) {
        box8.innerText = "x";
        playerB.push(8);
        if (playerB.length >= 3) {
          console.log(`B:${playerB}`);
          for (let i in winArray) {
            if (i == "wina1") {
              winn1 = 0;

              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerB.includes(value[i]);
                if (checkWin == true) {
                  winn1++;
                }
                if (winn1 == 3) {
                  const winPlayer = document.getElementById("win");
                  winPlayer.innerText = "You Win!";
                  stop = 1;
                  break;
                }
              }
            }

            if (i == "wina2") {
              winn2 = 0;
              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerB.includes(value[i]);
                if (checkWin == true) {
                  winn2++;
                }
                if (winn2 == 3) {
                  const winPlayer = document.getElementById("win");
                  winPlayer.innerText = "You Win!";
                  stop = 1;
                  break;
                }
              }
            }

            if (i == "wina3") {
              winn3 = 0;

              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerB.includes(value[i]);
                if (checkWin == true) {
                  winn3++;
                }
                if (winn3 == 3) {
                  const winPlayer = document.getElementById("win");
                  winPlayer.innerText = "You Win!";
                  stop = 1;
                  break;
                }
              }
            }

            if (i == "wina4") {
              winn4 = 0;

              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerB.includes(value[i]);
                if (checkWin == true) {
                  winn4++;
                }
                if (winn4 == 3) {
                  const winPlayer = document.getElementById("win");
                  winPlayer.innerText = "You Win!";
                  stop = 1;
                  break;
                }
              }
            }

            if (i == "wina5") {
              winn5 = 0;

              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerB.includes(value[i]);
                if (checkWin == true) {
                  winn5++;
                }
                if (winn5 == 3) {
                  const winPlayer = document.getElementById("win");
                  winPlayer.innerText = "You Win!";
                  stop = 1;
                  break;
                }
              }
            }

            if (i == "wina6") {
              winn6 = 0;

              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerB.includes(value[i]);
                if (checkWin == true) {
                  winn6++;
                }
                if (winn6 == 3) {
                  const winPlayer = document.getElementById("win");
                  winPlayer.innerText = "You Win!";
                  stop = 1;
                  break;
                }
              }
            }

            if (i == "wina7") {
              winn7 = 0;

              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerB.includes(value[i]);
                if (checkWin == true) {
                  winn7++;
                }
                if (winn7 == 3) {
                  const winPlayer = document.getElementById("win");
                  winPlayer.innerText = "You Win!";
                  stop = 1;
                  break;
                }
              }
            }

            if (i == "wina8") {
              winn8 = 0;

              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerB.includes(value[i]);
                if (checkWin == true) {
                  winn8++;
                }
                if (winn8 == 3) {
                  const winPlayer = document.getElementById("win");
                  winPlayer.innerText = "You Win!";
                  stop = 1;
                  break;
                }
              }
            }
          }
        }
      }
    }
  }
}

function clickbox9() {
  const box9 = document.getElementById("idbox9");
  value9++;
  if (value9 == 1) {
    count++;
    if (count % 2 == 0) {
      if (stop != 1) {
        box9.innerText = 0;
        playerA.push(9);
        if (playerA.length >= 3) {
          console.log(`A:${playerA}`);
          for (let i in winArray) {
            if (i == "wina1") {
              win1 = 0;
              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerA.includes(value[i]);
                if (checkWin == true) {
                  win1++;
                }
              }
              if (win1 == 3) {
                const winPlayer = document.getElementById("win");
                winPlayer.innerText = "You Win!";
                stop = 1;
                break;
              }
              const len = playerA.length + playerB.length;
              if (len == 9) {
                if (win1 != 0) {
                  draw1++;
                }
              }
            }

            if (i == "wina2") {
              win2 = 0;
              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerA.includes(value[i]);
                if (checkWin == true) {
                  win2++;
                }
              }
              if (win2 == 3) {
                const winPlayer = document.getElementById("win");
                winPlayer.innerText = "You Win!";
                stop = 1;
                break;
              }
              const len = playerA.length + playerB.length;
              if (len == 9) {
                if (win2 != 0) {
                  draw2++;
                }
              }
            }

            if (i == "wina3") {
              win3 = 0;

              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerA.includes(value[i]);
                if (checkWin == true) {
                  win3++;
                }
              }
              if (win3 == 3) {
                const winPlayer = document.getElementById("win");
                winPlayer.innerText = "You Win!";
                stop = 1;
                break;
              }
              const len = playerA.length + playerB.length;
              if (len == 9) {
                if (win3 != 0) {
                  draw3++;
                }
              }
            }

            if (i == "wina4") {
              win4 = 0;

              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerA.includes(value[i]);
                if (checkWin == true) {
                  win4++;
                }
              }
              if (win4 == 3) {
                const winPlayer = document.getElementById("win");
                winPlayer.innerText = "You Win!";
                stop = 1;
                break;
              }
              const len = playerA.length + playerB.length;
              if (len == 9) {
                if (win4 != 0) {
                  draw4++;
                }
              }
            }

            if (i == "wina5") {
              win5 = 0;
              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerA.includes(value[i]);
                if (checkWin == true) {
                  win5++;
                }
              }
              if (win5 == 3) {
                const winPlayer = document.getElementById("win");
                winPlayer.innerText = "You Win!";
                stop = 1;
                break;
              }
              const len = playerA.length + playerB.length;
              if (len == 9) {
                if (win5 != 0) {
                  draw5++;
                }
              }
            }

            if (i == "wina6") {
              win6 = 0;
              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerA.includes(value[i]);
                if (checkWin == true) {
                  win6++;
                }
              }
              if (win6 == 3) {
                const winPlayer = document.getElementById("win");
                winPlayer.innerText = "You Win!";
                stop = 1;
                break;
              }
              const len = playerA.length + playerB.length;
              if (len == 9) {
                if (win6 != 0) {
                  draw6++;
                }
              }
            }

            if (i == "wina7") {
              win7 = 0;

              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerA.includes(value[i]);
                if (checkWin == true) {
                  win7++;
                }
              }
              if (win7 == 3) {
                const winPlayer = document.getElementById("win");
                winPlayer.innerText = "You Win!";
                stop = 1;
                break;
              }
              const len = playerA.length + playerB.length;
              if (len == 9) {
                if (win7 != 0) {
                  draw7++;
                }
              }
            }

            if (i == "wina8") {
              win8 = 0;

              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerA.includes(value[i]);
                if (checkWin == true) {
                  win8++;
                }
              }
              if (win8 == 3) {
                const winPlayer = document.getElementById("win");
                winPlayer.innerText = "You Win!";
                stop = 1;
                break;
              }
              const len = playerA.length + playerB.length;
              if (len == 9) {
                if (win8 != 0) {
                  draw8++;
                }
              }
            }
          }
          if (
            draw1 == 1 &&
            draw2 == 1 &&
            draw3 == 1 &&
            draw4 == 1 &&
            draw5 == 1 &&
            draw6 == 1 &&
            draw7 == 1 &&
            draw8 == 1
          ) {
            const winPlayer = document.getElementById("win");
            winPlayer.innerText = "Draw!";
          }
        }
      }
    } else {
      if (stop != 1) {
        box9.innerText = "x";
        playerB.push(9);
        if (playerB.length >= 3) {
          console.log(`B:${playerB}`);
          for (let i in winArray) {
            if (i == "wina1") {
              winn1 = 0;

              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerB.includes(value[i]);
                if (checkWin == true) {
                  winn1++;
                }
                if (winn1 == 3) {
                  const winPlayer = document.getElementById("win");
                  winPlayer.innerText = "You Win!";
                  stop = 1;
                  break;
                }
              }
            }

            if (i == "wina2") {
              winn2 = 0;

              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerB.includes(value[i]);
                if (checkWin == true) {
                  winn2++;
                }
                if (winn2 == 3) {
                  const winPlayer = document.getElementById("win");
                  winPlayer.innerText = "You Win!";
                  stop = 1;
                  break;
                }
              }
            }

            if (i == "wina3") {
              winn3 = 0;

              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerB.includes(value[i]);
                if (checkWin == true) {
                  winn3++;
                }
                if (winn3 == 3) {
                  const winPlayer = document.getElementById("win");
                  winPlayer.innerText = "You Win!";
                  stop = 1;
                  break;
                }
              }
            }

            if (i == "wina4") {
              winn4 = 0;

              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerB.includes(value[i]);
                if (checkWin == true) {
                  winn4++;
                }
                if (winn4 == 3) {
                  const winPlayer = document.getElementById("win");
                  winPlayer.innerText = "You Win!";
                  stop = 1;
                  break;
                }
              }
            }

            if (i == "wina5") {
              winn5 = 0;
              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerB.includes(value[i]);
                if (checkWin == true) {
                  winn5++;
                }
                if (winn5 == 3) {
                  const winPlayer = document.getElementById("win");
                  winPlayer.innerText = "You Win!";
                  stop = 1;
                  break;
                }
              }
            }

            if (i == "wina6") {
              winn6 = 0;

              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerB.includes(value[i]);
                if (checkWin == true) {
                  winn6++;
                }
                if (winn6 == 3) {
                  const winPlayer = document.getElementById("win");
                  winPlayer.innerText = "You Win!";
                  stop = 1;
                  break;
                }
              }
            }

            if (i == "wina7") {
              winn7 = 0;

              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerB.includes(value[i]);
                if (checkWin == true) {
                  winn7++;
                }
                if (winn7 == 3) {
                  const winPlayer = document.getElementById("win");
                  winPlayer.innerText = "You Win!";
                  stop = 1;
                  break;
                }
              }
            }

            if (i == "wina8") {
              winn8 = 0;
              const value = winArray[i];
              for (let i = 0; i < value.length; i++) {
                const checkWin = playerB.includes(value[i]);
                if (checkWin == true) {
                  winn8++;
                }
                if (winn8 == 3) {
                  const winPlayer = document.getElementById("win");
                  winPlayer.innerText = "You Win!";
                  stop = 1;
                  break;
                }
              }
            }
          }
        }
      }
    }
  }
}

function playAgain(req, res) {
  location.reload();
}
