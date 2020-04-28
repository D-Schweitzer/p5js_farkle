var numPlayers= 4, rollCnt;
var seed = 0, rollScore, playerTurn = 1;
var banner;
var scores = new Array(8); //up to 8 players
var dice = new Array(6);
var heldDie = new Array(6);
var selectedDie = new Array(6);
var rollBtn, quitBtn, num1, num2, num3, num4, num5, num6, num7, num8, startBtn, 
  s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, backBtn, pullBtn, showScoreBtn;
var gameStarted = false, farkle = false, rolling = false, firstRoll = true, getHeld=false, badPull=false, showScores =false;
function preload() {
  banner = loadImage('banner.png');
}
function setup() {
  createCanvas(1080, 1000);
  textAlign(LEFT);
  showScoreBtn = new Button(500, 810, 300, 50, 'SHOW DICE COMBOS', true);
  rollBtn = new Button(350, 600, 200, 50, 'ROLL', false);
  quitBtn = new Button(600, 600, 200, 50, 'END TURN', false);
  pullBtn = new Button(480, 600, 200, 50, 'PULL OUT SELECTED', false);
  num1 = new Button(500, 300, 40, 40, '1', true);
  num2 = new Button(550, 300, 40, 40, '2', true);
  num3 = new Button(600, 300, 40, 40, '3', true);
  num4 = new Button(650, 300, 40, 40, '4', true);
  num5 = new Button(700, 300, 40, 40, '5', true);
  num6 = new Button(750, 300, 40, 40, '6', true);
  num7 = new Button(800, 300, 40, 40, '7', true);
  num8 = new Button(850, 300, 40, 40, '8', true);
  s0 = new Button(300, 400, 40, 40, '0', true);
  s1 = new Button(350, 400, 40, 40, '1', true);
  s2 = new Button(400, 400, 40, 40, '2', true);
  s3 = new Button(450, 400, 40, 40, '3', true);
  s4 = new Button(500, 400, 40, 40, '4', true);
  s5 = new Button(550, 400, 40, 40, '5', true);
  s6 = new Button(600, 400, 40, 40, '6', true);
  s7 = new Button(650, 400, 40, 40, '7', true);
  s8 = new Button(700, 400, 40, 40, '8', true);
  s9 = new Button(750, 400, 40, 40, '9', true);
  backBtn = new Button(800, 400, 40, 40, '<-', true);
  startBtn = new Button(500, 500, 200, 50, 'START GAME', true);
}
function draw() {
  background(100, 255, 100);
  image(banner, 200, 20);
  showScoreBtn.display(false);
  if (showScores) {
    textAlign(LEFT);
    textSize(25);
    text('DICE SCORING COMBINATIONS', 300, 250);
    drawSmallDie(5, 150, 275);
    text(''+5, 225, 310);
    drawSmallDie(1, 270, 275);
    text(''+10, 340, 310);
    drawSmallDie(1, 150, 350); 
    drawSmallDie(1, 210, 350); 
    drawSmallDie(1, 270, 350);
    text(''+30, 340, 380);
    drawSmallDie(2, 150, 425); 
    drawSmallDie(2, 210, 425); 
    drawSmallDie(2, 270, 425);
    text(''+20, 340, 465);
    drawSmallDie(3, 150, 500); 
    drawSmallDie(3, 210, 500); 
    drawSmallDie(3, 270, 500);
    text(''+30, 340, 530);
    drawSmallDie(4, 150, 575); 
    drawSmallDie(4, 210, 575); 
    drawSmallDie(4, 270, 575);
    text(''+40, 340, 605);
    drawSmallDie(5, 150, 650); 
    drawSmallDie(5, 210, 650); 
    drawSmallDie(5, 270, 650);
    text(''+50, 340, 680);
    drawSmallDie(6, 150, 725); 
    drawSmallDie(6, 210, 725); 
    drawSmallDie(6, 270, 725);
    text(''+60, 340, 765);
    text('4 of a kind', 440, 380);
    text('5 of a kind', 440, 465);
    text('6 of a kind', 440, 530);
    text('Straight (1-6)', 440, 605);
    text('3 pairs', 440, 680);
    text('2 triples', 440, 765);
    text('100', 630, 380);
    text('200', 630, 465);
    text('300', 630, 530);
    text('150', 630, 605);
    text('150', 630, 680);
    text('250', 630, 765);
    text('EXAMPLES', 700, 310);
    drawSmallDie(1, 700, 350); 
    drawSmallDie(1, 760, 350); 
    drawSmallDie(1, 820, 350);
    drawSmallDie(1, 880, 350);
    drawSmallDie(1, 700, 425); 
    drawSmallDie(1, 760, 425); 
    drawSmallDie(1, 820, 425);
    drawSmallDie(1, 880, 425);
    drawSmallDie(1, 940, 425);
    drawSmallDie(1, 700, 500); 
    drawSmallDie(1, 760, 500); 
    drawSmallDie(1, 820, 500);
    drawSmallDie(1, 880, 500);
    drawSmallDie(1, 940, 500);
    drawSmallDie(1, 1000, 500);
    drawSmallDie(1, 700, 575); 
    drawSmallDie(2, 760, 575); 
    drawSmallDie(3, 820, 575);
    drawSmallDie(4, 880, 575);
    drawSmallDie(5, 940, 575);
    drawSmallDie(6, 1000, 575);
    drawSmallDie(1, 700, 650); 
    drawSmallDie(1, 760, 650); 
    drawSmallDie(2, 820, 650);
    drawSmallDie(2, 880, 650);
    drawSmallDie(3, 940, 650);
    drawSmallDie(3, 1000, 650);
    drawSmallDie(3, 700, 725); 
    drawSmallDie(3, 760, 725); 
    drawSmallDie(3, 820, 725);
    drawSmallDie(4, 880, 725);
    drawSmallDie(4, 940, 725);
    drawSmallDie(4, 1000, 725);
    return;
  }
  if (!gameStarted) {
    textSize(30);
    textAlign(LEFT);
    text('Select number of players:', 50, 300);
    num1.display(numPlayers == 1);
    num2.display(numPlayers == 2);
    num3.display(numPlayers == 3);
    num4.display(numPlayers == 4);
    num5.display(numPlayers == 5);
    num6.display(numPlayers == 6);
    num7.display(numPlayers == 7);
    num8.display(numPlayers == 8);
    textSize(30);
    textAlign(LEFT);
    text('Enter Seed:', 50, 400);
    s0.display(false);
    s1.display(false);
    s2.display(false);
    s3.display(false);
    s4.display(false);
    s5.display(false);
    s6.display(false);
    s7.display(false);
    s8.display(false);
    s9.display(false);
    backBtn.display(false);
    textSize(30);
    textAlign(LEFT);
    text(''+seed, 850, 410);
    startBtn.display(true);
  } else {

    if (!farkle && !getHeld) {
      rollBtn.display(false);
    }
    if (farkle) {
      getHeld=false;
      textAlign(LEFT);
      textSize(50);
      text('!*!*!*! FARKLE !*!*!*!', 280, 300);
    } else {
      textSize(30);
      textAlign(LEFT);
      text('SCORE FOR CURRENT TURN: '+rollScore, 300, 350);
    }
    if (rolling) {
      rollCnt++;
      for (var i=0; i<6; i++) {
        if (!heldDie[i]) {
          dice[i] = 1+int(random(6));
        }
      }
      if (rollCnt==20) {
        rolling = false;
        if (scoreRoll()==0) {
          farkle=true;
          rollScore = 0;
          rollBtn.setActive(false);
          pullBtn.setActive(false);
          quitBtn.setActive(true);
        }
        getHeld = true;
      }
    }
    if (getHeld && !farkle) {
      pullBtn.display(false);
      textAlign(LEFT);
      textSize(25);
      if (badPull) {
        text('--> SELECTED DICE MUST ALL BE COUNTERS <--', 200, 550);
      } else {
        text('--> SELECT DICE TO PULL <--', 300, 550);
      }
    }
    if (!getHeld) {
      quitBtn.display(false);
    }
    for ( var j=0; j<6; j++) {
      drawDie(j);
      //      if (!firstRoll && heldDie[i] && !farkle )
      //        text('-PULLED-',100+i*150,820);
      //       selectBtn[i].display(selectedDie[i]);
    }
    textSize(20);
    textAlign(LEFT);
    //display scores
    fill(0);
    var startX = int(550-numPlayers/2.0*125);
    for ( let i=0; i<numPlayers; i++) {
      if (i+1==playerTurn) {
        fill(255);
        rect(startX+i*125-10, 675, 110, 40);
        fill(0);
      }
      text('PLAYER '+(i+1), startX+i*125, 700);
      text(''+scores[i], startX+40+i*125, 735);
    }
  }
}
function mousePressed() {
  if (showScoreBtn.isSelected()) {
    showScores = !showScores;
    if (!showScores) {
      showScoreBtn.setName('SHOW DICE COMBOS');
    } else {
      showScoreBtn.setName('RETURN TO GAME');
    }
  }
  if (!gameStarted) {
    if (num1.isSelected()) {
      numPlayers = 1;
    }
    if (num2.isSelected()) {
      numPlayers = 2;
    }
    if (num3.isSelected()) {
      numPlayers = 3;
    }
    if (num4.isSelected()) {
      numPlayers = 4;
    }
    if (num5.isSelected()) {
      numPlayers = 5;
    }
    if (num6.isSelected()) {
      numPlayers = 6;
    }
    if (num7.isSelected()) {
      numPlayers = 7;
    }
    if (num8.isSelected()) {
      numPlayers = 8;
    }
    if (s0.isSelected()) {
      seed =10*seed;
    }
    if (s1.isSelected()) {
      seed =10*seed+1;
    }
    if (s2.isSelected()) {
      seed =10*seed+2;
    }
    if (s3.isSelected()) {
      seed =10*seed+3;
    }
    if (s4.isSelected()) {
      seed =10*seed+4;
    }
    if (s5.isSelected()) {
      seed =10*seed+5;
    }
    if (s6.isSelected()) {
      seed =10*seed+6;
    }
    if (s7.isSelected()) {
      seed =10*seed+7;
    }
    if (s8.isSelected()) {
      seed =10*seed+8;
    }
    if (s9.isSelected()) {
      seed =10*seed+9;
    }
    if (backBtn.isSelected()) {
      seed = int(seed/10);
    }
    if (startBtn.isSelected()) {
      gameStarted = true;
      for (let i=0; i<numPlayers; i++) {
        scores[i] = 0;
      }
      rollScore = 0;
      playerTurn = 1;
      rollCnt = 0;
      rolling = false;
      randomSeed(seed);
      num1.setActive(false);
      num2.setActive(false);
      num3.setActive(false);
      num4.setActive(false);
      num5.setActive(false);
      num6.setActive(false);
      num7.setActive(false);
      num8.setActive(false);
      s0.setActive(false);
      s1.setActive(false);
      s2.setActive(false);
      s3.setActive(false);
      s4.setActive(false);
      s5.setActive(false);
      s6.setActive(false);
      s7.setActive(false);
      s8.setActive(false);
      s9.setActive(false);
      backBtn.setActive(false);
      startBtn.setActive(false);
      rollBtn.setActive(true);
      quitBtn.setActive(true);
    }
  } else {
    if (!farkle && !getHeld && rollBtn.isSelected()) {
      rollBtn.setActive(false);
      pullBtn.setActive(true);
      quitBtn.setActive(false);
      rolling = true;
      rollCnt = 0;
      firstRoll = false;
      badPull = false;
      //check if all dice were pulled
      if (heldDie[0] && heldDie[1] && heldDie[2] && heldDie[3] && heldDie[4] && heldDie[5]) {
        for (var i=0; i<6; i++) {
          heldDie[i] = false;
          selectedDie[i] = false;
        }
      }
    }
    if (quitBtn.isSelected()) {
      scores[playerTurn-1] += rollScore;
      pullBtn.setActive(false);
      rollBtn.setActive(true);
      rollScore=0;
      playerTurn++;
      rollBtn.setActive(true);
      if (playerTurn > numPlayers) {
        playerTurn=1;
      }
      firstRoll = true;
      farkle=false;
      getHeld = false;
      badPull = false;
      for (let i=0; i<6; i++) {
        heldDie[i] = false;
        selectedDie[i]=false;
        dice[i] = 0;
      }
    }
    if (getHeld) {
      for (let i=0; i<6; i++) {
        if (!heldDie[i] && diceSelected(i)) {
          selectedDie[i] = !selectedDie[i];
        }
      }
      if (pullBtn.isSelected()) {
        //get score of selected
        var tmpScore = scoreSelected();
        badPull = tmpScore==0;
        if (!badPull) {
          rollBtn.setActive(true);
          quitBtn.setActive(true);
          rollScore +=tmpScore;
          getHeld =false;
          for (let i=0; i<6; i++) {
            if (selectedDie[i]) {
              heldDie[i]=true;
            }
          }
        }
      }
    }
  }
}
function diceSelected( num) {
  return mouseX>=num*150+50 && mouseX<num*150+150 && mouseY>=400 && mouseY<500;
}

function drawDie( pos) {
  fill(255);
  if (getHeld && selectedDie[pos]) {
    fill(255, 255, 100);
  }
  if (heldDie[pos]) {
    fill(200);
  }
  stroke(0);
  rect(pos*150+50, 400, 100, 100);
  fill(0);
  if (dice[pos]==1) {
    ellipse(pos*150+100, 450, 20, 20);
  }
  if (dice[pos]==2) {
    ellipse(pos*150+75, 425, 20, 20);
    ellipse(pos*150+125, 475, 20, 20);
  }
  if (dice[pos]==3) {
    ellipse(pos*150+100, 450, 20, 20);
    ellipse(pos*150+75, 425, 20, 20);
    ellipse(pos*150+125, 475, 20, 20);
  }
  if (dice[pos]==4) {
    ellipse(pos*150+75, 425, 20, 20);
    ellipse(pos*150+125, 425, 20, 20);
    ellipse(pos*150+75, 475, 20, 20);
    ellipse(pos*150+125, 475, 20, 20);
  }
  if (dice[pos]==5) {
    ellipse(pos*150+75, 425, 20, 20);
    ellipse(pos*150+125, 425, 20, 20);
    ellipse(pos*150+75, 475, 20, 20);
    ellipse(pos*150+125, 475, 20, 20);
    ellipse(pos*150+100, 450, 20, 20);
  }
  if (dice[pos]==6) {
    ellipse(pos*150+75, 420, 20, 20);
    ellipse(pos*150+75, 450, 20, 20);
    ellipse(pos*150+75, 480, 20, 20);
    ellipse(pos*150+125, 420, 20, 20);
    ellipse(pos*150+125, 450, 20, 20);
    ellipse(pos*150+125, 480, 20, 20);
  }
}
function drawSmallDie( num, x, y) {
  fill(255);
  stroke(0);
  rect(x, y, 50, 50);
  fill(0);
  if (num==1) {
    ellipse(x+25, y+25, 10, 10);
  }
  if (num==2) {
    ellipse(x+15, y+15, 10, 10);
    ellipse(x+35, y+35, 10, 10);
  }
  if (num==3) {
    ellipse(x+15, y+15, 10, 10);
    ellipse(x+35, y+35, 10, 10);
    ellipse(x+25, y+25, 10, 10);
  }
  if (num==4) {
    ellipse(x+15, y+15, 10, 10);
    ellipse(x+35, y+35, 10, 10);
    ellipse(x+15, y+35, 10, 10);
    ellipse(x+35, y+15, 10, 10);
  }
  if (num==5) {
    ellipse(x+15, y+15, 10, 10);
    ellipse(x+35, y+35, 10, 10);
    ellipse(x+15, y+35, 10, 10);
    ellipse(x+35, y+15, 10, 10);
    ellipse(x+25, y+25, 10, 10);
  }
  if (num==6) {
    ellipse(x+15, y+15, 10, 10);
    ellipse(x+15, y+28, 10, 10);
    ellipse(x+15, y+41, 10, 10);
    ellipse(x+35, y+15, 10, 10);
    ellipse(x+35, y+28, 10, 10);
    ellipse(x+35, y+41, 10, 10);
  }
}
function scoreRoll() {
  var tmpDice = new Array(6);
  var numDie = 0;
  for (var i=0; i<6; i++) {
    if (!heldDie[i]) {
      tmpDice[numDie] = dice[i];
      numDie++;
    }
  }
  //sort tmp array
  for (let i=0; i<numDie-1; i++) {
    for (let j=i+1; j<numDie; j++) {
      if (tmpDice[j]<tmpDice[i]) {
        var tmp = tmpDice[i];
        tmpDice[i] = tmpDice[j];
        tmpDice[j] = tmp;
      }
    }
  }
  //check 6 of a kind
  if (numDie==6 && tmpDice[0]==tmpDice[5]) {
    return 300;
  }
  //check 2 triples
  if (numDie==6 && tmpDice[0]==tmpDice[2] && tmpDice[3]==tmpDice[5]) {
    return 250;
  }
  //check 5 of a kind
  if ((numDie==6 &&(tmpDice[0]==tmpDice[4] || tmpDice[1]==tmpDice[5])) ||
    (numDie==5 && tmpDice[0]==tmpDice[4])) {
    return 200;
  }
  //check straight
  if (numDie==6 && tmpDice[0] != tmpDice[1] && tmpDice[1] != tmpDice[2] &&
    tmpDice[2] != tmpDice[3] && tmpDice[3] != tmpDice[4] && tmpDice[4] != tmpDice[5]) {
    return 150;
  }
  //check 3 pairs
  if (numDie==6 && tmpDice[0]==tmpDice[1] && tmpDice[2]==tmpDice[3] && tmpDice[4]==tmpDice[5]) {
    return 150;
  }
  //check 4 of a kind
  if ((numDie==6 && (tmpDice[0]==tmpDice[3] || tmpDice[1]==tmpDice[4] || tmpDice[2]==tmpDice[5])) ||
    (numDie==5 && (tmpDice[0]==tmpDice[3] || tmpDice[1]==tmpDice[4])) ||
    (numDie==4 && (tmpDice[0]==tmpDice[3]))) {
    return 100;
  }
  //check 3 of a kind
  if (numDie >=3 && tmpDice[0]==tmpDice[2]) {
    if (tmpDice[0]==1) {
      return 30;
    } else {
      return 10*tmpDice[0];
    }
  }
  if (numDie>=4 && tmpDice[1]==tmpDice[3]) {
    return 10*tmpDice[1];
  }
  if (numDie>=5 && tmpDice[2]==tmpDice[4]) {
    return 10*tmpDice[2];
  }
  if (numDie==6 && tmpDice[3]==tmpDice[5]) {
    return 10*tmpDice[3];
  }
  //check 1 and 5
  var tmpRtn =0;
  for (let i=0; i<numDie; i++) {
    if (tmpDice[i]==1) {
      tmpRtn += 10;
    } else {
      if (tmpDice[i]==5) {
        tmpRtn +=5;
      }
    }
  }

  return tmpRtn;
}

function scoreSelected() {
  var rtnScore = 0;
  var tmpDice = new Array(6);
  var numDie = 0;
  for (var i=0; i<6; i++) {
    if (!heldDie[i] && selectedDie[i]) {
      tmpDice[numDie] = dice[i];
      numDie++;
    }
  }
  if (numDie==0) {
    return 0;
  }
  //sort tmp array
  for (let i=0; i<numDie-1; i++) {
    for (var j=i+1; j<numDie; j++) {
      if (tmpDice[j]<tmpDice[i]) {
        var tmp = tmpDice[i];
        tmpDice[i] = tmpDice[j];
        tmpDice[j] = tmp;
      }
    }
  }
  if (numDie==1) {
    if (tmpDice[0]==5) {
      return 5;
    }
    if (tmpDice[0]==1) {
      return 10;
    }
    return 0;
  }
  if (numDie==2) {
    if ((tmpDice[0]!=1 && tmpDice[0] !=5)||(tmpDice[1] != 1 && tmpDice[1] !=5)) {
      return 0;
    }
    if (tmpDice[0]==5) {
      rtnScore += 5;
    }
    if (tmpDice[0]==1) {
      rtnScore += 10;
    }
    if (tmpDice[1]==5) {
      rtnScore +=5;
    }
    if (tmpDice[1]==1) {
      rtnScore +=10;
    }
    return rtnScore;
  }
  if (numDie==3) {
    if (tmpDice[0]==tmpDice[2]) {
      if (tmpDice[0]==1) {
        return 30;
      }
      return 10*tmpDice[0];
    }
    if ((tmpDice[0] != 1 &&tmpDice[0]!=5)||
      (tmpDice[1] != 1 &&tmpDice[1] !=5)||
      (tmpDice[2] != 1 && tmpDice[2] !=5)) {
      return 0;
    }
    if (tmpDice[0]==5) {
      rtnScore += 5;
    } else {
      rtnScore +=10;
    }
    if (tmpDice[1]==5) {
      rtnScore += 5;
    } else {
      rtnScore +=10;
    }
    if (tmpDice[2]==5) {
      rtnScore += 5;
    } else {
      rtnScore +=10;
    }
    return rtnScore;
  }
  if (numDie==4) {
    if (tmpDice[0]==tmpDice[3]) {
      return 100;
    }
    if (tmpDice[0]==tmpDice[2]) {
      if (tmpDice[3] !=1 && tmpDice[3] != 5) {
        return 0;
      }
      if (tmpDice[0]==1) {
        rtnScore += 30;
      } else {
        rtnScore += 10*tmpDice[0];
      }
      if (tmpDice[3]==5) {
        rtnScore +=5;
      } else {
        rtnScore +=10;
      }
      return rtnScore;
    }
    if (tmpDice[1]==tmpDice[3]) {
      if (tmpDice[0] !=1 && tmpDice[0] != 5) {
        return 0;
      }
      rtnScore += 10*tmpDice[1];
      if (tmpDice[0]==5) {
        rtnScore +=5;
      } else {
        rtnScore +=10;
      }
      return rtnScore;
    }
    for (let i=0; i<4; i++) {
      if (tmpDice[i]==5) {
        rtnScore +=5;
      } else {
        if (tmpDice[i]==1) {
          rtnScore +=10;
        } else {
          return 0;
        }
      }
    }
    return rtnScore;
  }
  if (numDie==5) {
    if (tmpDice[0]==tmpDice[4]) {
      return 200;
    }
    if (tmpDice[0]==tmpDice[3]) {
      if (tmpDice[4]==5) {
        return 105;
      }
      return 0;
    }
    if (tmpDice[1]==tmpDice[4]) {
      if (tmpDice[0]==1) {
        return 110;
      }
      if (tmpDice[0]==5) {
        return 105;
      }
      return 0;
    }
    if (tmpDice[0]==tmpDice[2]) {
      if (tmpDice[0]==1) {
        rtnScore=30;
      } else {
        rtnScore = 10*tmpDice[0];
      }
      if ((tmpDice[3] !=1 && tmpDice[3] !=5)||(tmpDice[4] != 1 && tmpDice[4] != 5)) {
        return 0;
      }
      if (tmpDice[3] ==1) {
        rtnScore +=10;
      } else {
        rtnScore +=5;
      }
      if (tmpDice[4] ==1) {
        rtnScore +=10;
      } else {
        rtnScore +=5;
      }
      return rtnScore;
    }
    if (tmpDice[1]==tmpDice[3]) {
      if (tmpDice[1]==1) {
        rtnScore=30;
      } else {
        rtnScore = 10*tmpDice[1];
      }
      if ((tmpDice[0] !=1 && tmpDice[0] !=5)||(tmpDice[4] != 1 && tmpDice[4] != 5)) {
        return 0;
      }
      if (tmpDice[0] ==1) {
        rtnScore +=10;
      } else {
        rtnScore +=5;
      }
      if (tmpDice[4] ==1) {
        rtnScore +=10;
      } else {
        rtnScore +=5;
      }
      return rtnScore;
    }
    if (tmpDice[2]==tmpDice[4]) {
      if (tmpDice[2]==1) {
        rtnScore=30;
      } else {
        rtnScore = 10*tmpDice[2];
      }
      if ((tmpDice[0] !=1 && tmpDice[0] !=5)||(tmpDice[1] != 1 && tmpDice[1] != 5)) {
        return 0;
      }
      if (tmpDice[0] ==1) {
        rtnScore +=10;
      } else {
        rtnScore +=5;
      }
      if (tmpDice[1] ==1) {
        rtnScore +=10;
      } else {
        rtnScore +=5;
      }
      return rtnScore;
    }
    return 0;
  }
  if (numDie==6) {
    if (tmpDice[0]==tmpDice[5]) {
      return 300;
    }
    if (tmpDice[0]==tmpDice[4]) {
      if (tmpDice[5]==5) {
        return 205;
      }
      if (tmpDice[5]==1) {
        return 210;
      }
      return 0;
    }
    if (tmpDice[1]==tmpDice[5]) {
      if (tmpDice[0]==5) {
        return 205;
      }
      if (tmpDice[0]==1) {
        return 210;
      }
      return 0;
    }
    if(tmpDice[1]==tmpDice[4] && tmpDice[0]==1 &&tmpDice[5]==5){
      return 115;
    }
    if(tmpDice[2]==tmpDice[5] && tmpDice[0]==1 && tmpDice[1]==5){
      return 115;
    }
    if (tmpDice[0] != tmpDice[1] && tmpDice[1] != tmpDice[2] && tmpDice[2] != tmpDice[3] &&
      tmpDice[3] != tmpDice[4] && tmpDice[4] !=tmpDice[5]) {
      return 150;
    }
    if (tmpDice[0]==tmpDice[2] && tmpDice[3]==tmpDice[5]) {
      return 250;
    }
    if (tmpDice[0]==tmpDice[1] && tmpDice[2]==tmpDice[3] && tmpDice[4]==tmpDice[5]) {
      return 150;
    }
    if (tmpDice[1]==tmpDice[3]) {
      if (tmpDice[1]==1) {
        rtnScore = 30;
      } else {
        rtnScore = 10*tmpDice[0];
      }
      if (tmpDice[0] !=1 || tmpDice[4] != 5 || tmpDice[5] != 5) {
        return 0;
      }
      return rtnScore + 20;
    }
    if (tmpDice[2]==tmpDice[4]) {
      if (tmpDice[0] != 1 || tmpDice[1] !=1 || tmpDice[5] != 5) {
        return 0;
      }
      return 10*tmpDice[2]+25;
    }
    if (tmpDice[3]==tmpDice[5] && tmpDice[3]==6) {
      if (tmpDice[0]==1 && tmpDice[1]==1 && tmpDice[2]==5) {
        return 85;
      }
      if (tmpDice[0]==1 && tmpDice[1]==5 && tmpDice[2]==5) {
        return 80;
      }
      return 0;
    }
  }
  return 0;
}
function Button( x1, y1, length, ht1, name, active1) {
  this.x = x1;
  this.y = y1;
  this.lng = length;
  this.ht = ht1;
  this.nm = name;
  this.active =active1;

  this.setName = function( newName) {
    this.nm = newName;
  };
  this.setActive = function( active1) {
    this.active=active1;
  };
  this.display = function( highlight) {
    rectMode(CORNER);
    var x1 = this.x-this.lng/2, y1 = this.y-this.ht/2, x2=this.x+this.lng/2, y2=this.y+this.ht/2;

    fill(220, 218, 213);
    if (highlight) {
      fill(255, 255, 0);
    }
    if (!this.active) {
      fill(150, 150, 150);
    }
    stroke(0);
    strokeWeight(1);
    rect(x1, y1, x2-x1, y2-y1);
    stroke(255);
    line(x1, y1, x2, y1);
    line(x1, y1, x1, y2);
    textAlign(CENTER, CENTER);
    fill(0);
    textSize(16);
    text(this.nm, this.x, this.y);
  };

  this.isSelected = function() {
    if (!this.active) {
      return false;
    } else {
      return mouseX>this.x-this.lng/2 && mouseX < this.x+this.lng/2 && mouseY>this.y-this.ht/2 && mouseY < this.y+this.ht/2;
    }
  };
}
