const gridItems = document.querySelectorAll(".box");
console.log(gridItems);

AI = false;

gridItems.forEach((item) => {
  count = 0;
  item.addEventListener("click", () => {
    if (count % 2 == 0) {
      if(item.innerHTML)return;
      item.innerHTML = "X";
      console.log("hii");
      count++;
      isGameOver(item);
    }
    if(count<9){
    if (AI) {
     
      console.log("AIIIIII", count);
      aiplayer();
      count++;
    } else if (count % 2 != 0) {
      if(item.innerHTML)return;
      item.innerHTML = "O";
      count++;
      isGameOver(item);
    }
  }
  });
});
function isGameOver(item) {
  let c1 = 0,
    c2 = 0,
    c3 = 0,
    c4 = 0,
    p = 0;
  const val = item.className.slice(5);
  row = parseInt(val.charAt(0));
  col = parseInt(val.charAt(1));
  const horizontalLine = document.querySelector("#horizontal-line");
  //draw conc
  if (count == 9) 
    {
      setTimeout(() => {
        let gameOver = document.getElementById("gameOver");
        gameOver.style.display = "flex"; 
        let player= document.querySelectorAll('.player')
        let playAgain=document.getElementById('playAgain')
        playAgain.style.display='block'
        player[0].style.display="none"
        player[1].style.display="none"
      }, 1000);
      winner = document.querySelector("#gameOver h1");
      winner.innerHTML ="DRAW";
      return;
    };
  //row validation
  for (let i = 0; i <= 2; i++) {
    const newrow = row + "" + i;
    console.log(newrow);
    let rowval = document.querySelector(`.n${newrow}`);
    if (item.innerHTML === rowval.innerHTML) c1++;
  }
  if (c1 == 3) {
    console.log("YOU WONNN");

    var rect = item.getBoundingClientRect();
    let blocksize = rect.bottom - rect.top;
    let center = blocksize / 2 - 5;
    let gap = 10;
    horizontalLine.style.top =
      (row * (blocksize + gap) + center).toString() + "px";
    

    horizontalLine.style.visibility = "visible";

    //winner
    winner = document.querySelector("#gameOver h1");
    if (item.innerHTML  == 'O') {
      winner.innerHTML = AI ? "YOU LOST" : "O WINS!";
    } else {
      winner.innerHTML = AI ? "YOU WON" : "X WINS!";
    }

    setTimeout(() => {
      let gameOver = document.getElementById("gameOver");
      gameOver.style.display = "flex"; 
      let player= document.querySelectorAll('.player')
      let playAgain=document.getElementById('playAgain')
      playAgain.style.display='block'
      player[0].style.display="none"
      player[1].style.display="none"
      }, 1000);

    console.log(item);
    return;
  }

  for (let i = 0; i <= 2; i++) {
    const newcol = i + "" + col;
    let colval = document.querySelector(`.n${newcol}`);
    if (item.innerHTML === colval.innerHTML) c2++;
  }
  if (c2 == 3) {
    console.log("YOU WOppN");

    var rect = item.getBoundingClientRect();
    let blocksize = rect.bottom - rect.top;
    let center = blocksize / 2;
    let gap = 10;
    horizontalLine.style.visibility = "visible";
    horizontalLine.style.top = (blocksize + gap / 2 + center).toString() + "px";
    horizontalLine.style.transform = "rotate(90deg)";
    if (col == 0) {
      horizontalLine.style.right = (blocksize + gap).toString() + "px";
    }
    if (col == 2) {
      horizontalLine.style.left = (blocksize + gap).toString() + "px";
    }
    //winner
    winner = document.querySelector("#gameOver h1");
    if (item.innerHTML  == 'O') {
      winner.innerHTML = AI ? "YOU LOST" : "O WINS!";
    } else {
      winner.innerHTML = AI ? "YOU WON" : "X WINS!";
    }

    setTimeout(() => {
      let gameOver = document.getElementById("gameOver");
      gameOver.style.display = "flex"; 
      let player= document.querySelectorAll('.player')
      let playAgain=document.getElementById('playAgain')
      playAgain.style.display='block'
      player[0].style.display="none"
      player[1].style.display="none"
    }, 1000);
    return;
  }
  if ((row + col) % 2 == 0) {
    if (row == col) {
      for (let i = 0; i <= 2; i++) {
        const newdia = i + "" + i;
        let diaval = document.querySelector(`.n${newdia}`);
        if (item.innerHTML === diaval.innerHTML) c3++;
      }
      if (c3 == 3) {
        console.log("YOU WON");

        var rect = item.getBoundingClientRect();
        let blocksize = rect.bottom - rect.top;
        let center = blocksize / 2;
        let gap = 10;
        horizontalLine.style.top =
          (blocksize + gap / 2 + center).toString() + "px";
        horizontalLine.style.transform = "rotate(45deg)";
        horizontalLine.style.visibility = "visible";

        //winner
        winner = document.querySelector("#gameOver h1");
        if (item.innerHTML  == 'O') {
          winner.innerHTML = AI ? "YOU LOST" : "O WINS!";
        } else {
          winner.innerHTML = AI ? "YOU WON" : "X WINS!";
        }

        setTimeout(() => {
          let gameOver = document.getElementById("gameOver");
          gameOver.style.display = "flex"; 
          let player= document.querySelectorAll('.player')
          let playAgain=document.getElementById('playAgain')
          playAgain.style.display='block'
          player[0].style.display="none"
          player[1].style.display="none"        }, 1000);
        return;
      }
    } else {
      (ini_row = 0), (ini_col = 2);
      for (let i = 0; i <= 2; i++) {
        const newdia = ini_row + p + "" + (ini_col - p);
        p++;
        let diaval = document.querySelector(`.n${newdia}`);
        if (item.innerHTML === diaval.innerHTML) c4++;
      }
      if (c4 == 3) {
        console.log("YOU WON");

        var rect = item.getBoundingClientRect();
        let blocksize = rect.bottom - rect.top;
        let center = blocksize / 2;
        let gap = 10;
        horizontalLine.style.top =
          (blocksize + gap / 2 + center).toString() + "px";
        horizontalLine.style.transform = "rotate(-45deg)";
        horizontalLine.style.visibility = "visible";

        //winner
        winner = document.querySelector("#gameOver h1");
        if (item.innerHTML  == 'O') {
          winner.innerHTML = AI ? "YOU LOST" : "O WINS!";
        } else {
          winner.innerHTML = AI ? "YOU WON" : "X WINS!";
        }
        setTimeout(() => {
          let gameOver = document.getElementById("gameOver");
          gameOver.style.display = "flex"; 
          let player= document.querySelectorAll('.player')
          let playAgain=document.getElementById('playAgain')
          playAgain.style.display='block'
          player[0].style.display="none"
          player[1].style.display="none"       }, 1000);
        return;
      }
    }
  }
}

function getEleForInd(a, b) {
  const eleKey = a + "" + b;
  let item = document.querySelector(`.n${eleKey}`);
  return item;
}
function aiplayer() {
  //Two O
  console.log("Two O");
  for (let i = 0; i <= 2; i++) {
    rowCnt = 0;
    rowbal = "";
    colCnt = 0;
    colbal = "";
    for (let j = 0; j <= 2; j++) {
      const rowItem = getEleForInd(i, j);
      if (rowItem.innerHTML == "O") rowCnt++;
      else if (!rowItem.innerHTML) rowbal = rowItem;

      const colItem = getEleForInd(j, i);
      if (colItem.innerHTML == "O") colCnt++;
      else if (!colItem.innerHTML) colbal = colItem;
    }
    if (rowCnt == 2 && rowbal) {
      rowbal.innerHTML = "O";
      isGameOver(rowbal);
      return;
    }
    if (colCnt == 2 && colbal) {
      colbal.innerHTML = "O";
      isGameOver(colbal);
      return;
    }
  }
  leftDiaCnt = 0;
  leftDiaBal = "";
  rightDiaCnt = 0;
  rightDiaBal = "";
  for (let i = 0; i <= 2; i++) {
    const leftDiaItem = getEleForInd(i, i);
    if (leftDiaItem.innerHTML == "O") leftDiaCnt++;
    else if (!leftDiaItem.innerHTML) leftDiaBal = leftDiaItem;

    const rightDiaItem = getEleForInd(i, 2 - i);
    if (rightDiaItem.innerHTML == "O") rightDiaCnt++;
    else if (!rightDiaItem.innerHTML) rightDiaBal = rightDiaItem;
  }
  if (leftDiaCnt == 2 && leftDiaBal) {
    leftDiaBal.innerHTML = "O";
    isGameOver(leftDiaBal);
    return;
  }
  if (rightDiaCnt == 2 && rightDiaBal) {
    rightDiaBal.innerHTML = "O";
    isGameOver(rightDiaBal);
    return;
  }
  // Two X
  console.log("Two X");
  for (let i = 0; i <= 2; i++) {
    rowCnt = 0;
    rowbal = "";
    colCnt = 0;
    colbal = "";
    for (let j = 0; j <= 2; j++) {
      const rowItem = getEleForInd(i, j);
      if (rowItem.innerHTML == "X") rowCnt++;
      else if (rowItem.innerHTML != "O") rowbal = rowItem;

      const colItem = getEleForInd(j, i);
      if (colItem.innerHTML == "X") colCnt++;
      else if (colItem.innerHTML != "O") colbal = colItem;
    }
    console.log(colbal, colCnt);
    if (rowCnt == 2 && rowbal) {
      rowbal.innerHTML = "O";
      return;
    }
    if (colCnt == 2 && colbal) {
      colbal.innerHTML = "O";
      return;
    }
  }
  leftDiaCnt = 0;
  leftDiaBal = "";
  rightDiaCnt = 0;
  rightDiaBal = "";

  for (let i = 0; i <= 2; i++) {
    const leftDiaItem = getEleForInd(i, i);
    if (leftDiaItem.innerHTML == "X") leftDiaCnt++;
    else if (leftDiaItem.innerHTML != "O") leftDiaBal = leftDiaItem;

    const rightDiaItem = getEleForInd(i, 2 - i);
    if (rightDiaItem.innerHTML == "X") rightDiaCnt++;
    else if (rightDiaItem.innerHTML != "O") rightDiaBal = rightDiaItem;
  }
  if (leftDiaCnt == 2 && leftDiaBal) {
    leftDiaBal.innerHTML = "O";
    return;
  }
  if (rightDiaCnt == 2 && rightDiaBal) {
    rightDiaBal.innerHTML = "O";
    return;
  }
  //one o and two blank
  console.log("one o and two blank");
  for (let i = 0; i <= 2; i++) {
    rowCnt = 0;
    rowbal = 0;
    colCnt = 0;
    colbal = 0;
    rowBalItem = "";
    colBalItem = "";
    for (let j = 0; j <= 2; j++) {
      let rowItem = getEleForInd(i, j);
      if (!rowItem.innerHTML) {
        rowbal++;
        rowbalItem = rowItem;
      } else if (rowItem.innerHTML == "O") {
        rowCnt++;
      }

      if (rowbal == 2 && rowCnt == 1) {
        rowbalItem.innerHTML = "O";
        return;
      }

      let colItem = getEleForInd(i, j);
      if (!colItem.innerHTML) {
        colbal++;
        colbalItem = colItem;
      } else if (colItem.innerHTML == "O") {
        colCnt++;
      }

      if (colbal == 2 && colCnt == 1) {
        colbalItem.innerHTML = "O";
        return;
      }
    }

    leftDiaCnt = 0;
    leftDiaBal = "";
    rightDiaCnt = 0;
    rightDiaBal = "";
    leftBalItem = "";
    rightBalItem = "";

    for (let i = 0; i <= 2; i++) {
      const leftDiaItem = getEleForInd(i, i);
      if (!leftDiaItem.innerHTML) {
        leftDiaBal++;
        leftBalItem = leftDiaItem;
      } else if (leftDiaItem.innerHTML == "O") {
        leftDiaCnt++;
      }
      if (leftDiaBal == 2 && leftDiaCnt == 1) {
        leftBalItem.innerHTML = "O";
        return;
      }
      const rightDiaItem = getEleForInd(i, 2 - i);
      if (!rightDiaItem.innerHTML) {
        leftDiaBal++;
        rightBalItem = rightDiaItem;
      } else if (rightDiaItem.innerHTML == "O") {
        rightDiaCnt++;
      }
      if (rightDiaBal == 2 && rightDiaCnt == 1) {
        rightbalItem.innerHTML = "O";
        return;
      }
    }
  }
  //One O one empty
  console.log("One O one empty");
  for (let i = 0; i <= 2; i++) {
    rowCnt = 0;
    rowbal = 0;
    colCnt = 0;
    colbal = 0;
    rowBalItem = "";
    colBalItem = "";
    for (let j = 0; j <= 2; j++) {
      let rowItem = getEleForInd(i, j);
      if (!rowItem.innerHTML) {
        rowbal++;
        rowbalItem = rowItem;
      } else if (rowItem.innerHTML == "O") {
        rowCnt++;
      }

      if (rowbal == 1 && rowCnt == 1) {
        rowbalItem.innerHTML = "O";
        return;
      }

      let colItem = getEleForInd(i, j);
      if (!colItem.innerHTML) {
        colbal++;
        colbalItem = colItem;
      } else if (colItem.innerHTML == "O") {
        colCnt++;
      }

      if (colbal == 1 && colCnt == 1) {
        colbalItem.innerHTML = "O";
        return;
      }
    }

    leftDiaCnt = 0;
    leftDiaBal = "";
    rightDiaCnt = 0;
    rightDiaBal = "";
    leftBalItem = "";
    rightBalItem = "";

    for (let i = 0; i <= 2; i++) {
      const leftDiaItem = getEleForInd(i, i);
      if (!leftDiaItem.innerHTML) {
        leftDiaBal++;
        leftBalItem = leftDiaItem;
      } else if (leftDiaItem.innerHTML == "O") {
        leftDiaCnt++;
      }
      if (leftDiaBal == 1 && leftDiaCnt == 1) {
        leftBalItem.innerHTML = "O";
        return;
      }
      const rightDiaItem = getEleForInd(i, 2 - i);
      if (!rightDiaItem.innerHTML) {
        leftDiaBal++;
        rightBalItem = rightDiaItem;
      } else if (rightDiaItem.innerHTML == "O") {
        rightDiaCnt++;
      }
      if (rightDiaBal == 1 && rightDiaCnt == 1) {
        rightBalItem.innerHTML = "O";
        return;
      }
    }
  }
  console.log("Random O");
  while (true) {
    var x = Math.floor(Math.random() * 3);
    var y = Math.floor(Math.random() * 3);
    let randomVar = getEleForInd(x, y);
    if (!randomVar.innerHTML) {
      randomVar.innerHTML = "O";
      return;
    }
  }
}

function reload()
{
  location.reload();
}

function player(player){
  console.log(player)
  if(player==='1player')
     AI=true;
  gameOver=document.getElementById('gameOver')
 
  gameOver.style.display='none'
  
}
