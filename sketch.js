let backgroundSong;
let soundEffect;
let gameState = "state1";  // Tracks the current state of the game
let message = "You are in a room with two paths. Go Left (L) or Right (R).";
let message2 = " ";
let gameEnded = false;// Tracks if the game has ended (win or lose)
let cheerSprite;
let laughSprite;
let poutSprite;
let monsterSprite;
let textBox;
let textBoxDecide;
let test;
let test2;
let test3;
let test4;
let test5;
let endingA = false;
let endingB = false;
let endingC = false;
let endingD = false;
let x = 0;
let y = 0;

function preload(){
  test = loadImage('images/p5project1.png');
  test2 = loadImage('images/p5project2.png');
  test3 = loadImage('images/p5project3.png');
  test4 = loadImage('images/p5project4.png');
  test5 = loadImage('images/p5project5.png');
  cheerSprite = loadImage('images/CheerfulSprite.png');
  poutSprite = loadImage('images/PoutySprite.png');
  laughSprite = loadImage('images/LaughingSprite.png');
  monsterSprite = loadImage('images/MonstrousSprite.png');
  textBox = loadImage('images/Text Box.png');
  textBoxDecide = loadImage('images/Text Box Decisions.png');
  backgroundSong = loadSound ("sounds/horrorMusic.mp3");
  soundEffect = loadSound("sounds/soundEffect.mp3");
}

function setup() {
  createCanvas(1008, 756);
  textSize(16);
  soundFormats('mp3', 'ogg');
}

function draw() {
  background(0);
  
  // Display the message to the player
  fill(0);
  textAlign(LEFT);
  text(message, 30, 600);
  if(!backgroundSong.isPlaying()){
    backgroundSong.play();
    //backgroundSong.setVolume(0.02);
  }

  // Handle game states
  if (gameState === "state1") {
    image (test, 0, 0);
    image (textBox, 15, 550);
    fill(255);
    text(message, 40, 595);
    textStyle(BOLD);
    textSize(25);
    message = "You've been travelling for quite some time. You find yourself weary, and\nneeding of rest.\n\nYou hear rustling moving towards you. Something is heading your way.";
  } else if (gameState === "state2") {
    image (test, 0, 0);
    image (cheerSprite, 10, 10);
    image (textBox, 15, 550);
    fill(255);
    text(message, 40, 595);
    textStyle(BOLD);
    textSize(25);
    message = "'Oh hello there! Are you lost?', the individual says. 'I have a place near here\nwhere you can rest for the night.'\n\nWhat should you do?";
  } else if (gameState === "state3") {
    image (test, 0, 0);
    image (cheerSprite, 10, 10);
    image (textBoxDecide,15, 550);
    fill(255);
    text(message, 140, 595);
    text(message2, 660, 595);
    textStyle(BOLD);
    textSize(25);
      message = "Take the individual up\non their offer.";
      message2 = "Decline, and leave\nto go elsewhere."
  } else if (gameState === "gameEnd1") {
    image (test, 0, 0);
    image (poutSprite, 10, 10);
    image (textBox, 15, 550);
    fill(255);
    text(message, 40, 595);
    textStyle(BOLD);
    textSize(25);    
       message = "The individual scoffs, 'Ugh, you're no fun.' \n\nThe individual walks off, leaving you alone"
  } else if (gameState === "gameEnd1-2") {
    image (test, 0, 0);
    image (textBox, 15, 550);
    fill(255);
    text(message, 40, 595);
    textStyle(BOLD);
    textSize(25);
      message = "Ending A: You're no fun.\n\nPress Space to Restart"
    endingA = true;
    gameEnded = true;
    } else if (gameState === 'state4'){
    image (test, 0, 0);
    image (cheerSprite, 10, 10);
    image (textBox, 15, 550);
    fill(255);
    text(message, 40, 595);
    textStyle(BOLD);
    textSize(25);
      message = "'Excellent! I'll lead the way.' the individual says.\n\nWith that, she begins to walk off, you following right behind."
    } else if (gameState === 'state5'){
    background (0);
    image (textBox, 15, 550);
    fill(255);
    text(message, 40, 595);
    textStyle(BOLD);
    textSize(25);
      message = "You and the individual walk for quite some time.\nThere is nothing out here aside from the darkness.\n\nSoon, you arrive upon a mansion, and enter.";
    }else if (gameState === 'state6'){
    image (test2, 0, 0);
    image (cheerSprite, 10, 10);
    image (textBox, 15, 550);
    fill(255);
    text(message, 40, 595);
    textStyle(BOLD);
    textSize(25);
      message = "'Well, we're here!' the individual chimes, and begins to lead you around their\nhouse. It's seen better days, that's for sure.\n\nNot soon after, the individual leads you to a closed door.";
    }else if (gameState === 'state7'){
    image (test3, 0, 0);
    image (cheerSprite, 10, 10);
    image (textBox, 15, 550);
    fill(255);
    text(message, 40, 595);
    textStyle(BOLD);
    textSize(25);
      message = "'Well, here will be where you stay for the night. Come on, don't be shy!'\n\nYou sense something off about the door, what do you do?";
    }else if (gameState === 'state8'){
    image (test3, 0, 0);
    image (textBoxDecide,15, 550);
    fill(255);
    text(message, 140, 595);
    text(message2, 660, 595);
    textStyle(BOLD);
    textSize(25);
      message = "Open the door?";
      message2 = "Don't open the door?";
    }else if (gameState === 'gameEnd2'){
    image (test4, 0, 0);
    image (textBox, 15, 550);
    fill(255);
    text(message, 40, 595);
    textStyle(BOLD);
    textSize(25);
      message = "The room behind the door is small, and cramped. All that's there\n is a large hole, that light cannot penetrate.\n\n Something pushes you from behind."
    }else if (gameState === 'gameEnd2-2'){
    image (test4, 0, 0);
    image (laughSprite, 10, 10);
    image (textBox, 15, 550);
    fill(255);
    text(message, 40, 595);
    textStyle(BOLD);
    textSize(25);
      message = "You hear laughing behind you, as you begin falling.\n'It was that easy? How gullible can you be!'\n\nThat was all you were able to pick up on as you fell."
    }else if (gameState === 'gameEnd2-3'){
    background (0);
    image (textBox, 15, 550);
    fill(255);
    text(message, 40, 595);
    textStyle(BOLD);
    textSize(25);
      message = "Ending B: It Says Guillible on the Ceiling\n\nPress Space to Restart"
      endingB = true;      
      gameEnded = true;
    }else if (gameState === 'state9'){
    image (test3, 0, 0);
    image (poutSprite, 10, 10);
    image (textBox, 15, 550);
    fill(255);
    text(message, 40, 595);
    textStyle(BOLD);
    textSize(25);
      message = "'Fine, fine. Maybe later then, I suppose.'\n The individual walks off, leaving you rest in the living room."
    }else if (gameState === 'state10'){
    image (test2, 0, 0);
    image (textBox, 15, 550);
    fill(255);
    if(!soundEffect.isPlaying()){
    soundEffect.play();
    }
    text(message, 40, 595);
    textStyle(BOLD);
    textSize(25);
      message = "You lay around for a while. Hearing the sounds of a large animal both\n above,and below you.\n\nYou think nothing of it, until a large boom invades your ears." 
    }else if (gameState === 'state11'){
    image (test2, 0, 0);
    image (textBox, 15, 550);
    fill(255);
    text(message, 40, 595);
    textStyle(BOLD);
    textSize(25);
      message = "'You're nothing more than an ungrateful guest!' you hear, the sound growing\nlouder, 'How dare you not entertain the one who provides you shelter!'"      
    }else if (gameState === 'state12'){
    x += random (-2, 2);
    y += random (-2, 2);
    x = constrain(x, -8, 8);
    y =  constrain(y, -8, 8);
    image (test5, x, y, 1400, 1400);
    image (monsterSprite, 10, 10);
    image (textBox, 15, 550);
    fill(255);
    text(message, 40, 595);
    textStyle(BOLD);
    textSize(25);
      message = "The individual has changed.\nThey only now speak in growls and roars, a feral monster.\nWhat do you do now?"      
    }else if (gameState === 'state13'){
    x += random (-2, 2);
    y += random (-2, 2);
    x = constrain(x, -8, 8);
    y =  constrain(y, -8, 8);
    image (test5, x, y, 1400, 1400);
    image (monsterSprite, 10, 10);
    image (textBoxDecide,15, 550);
    fill(255);
    text(message, 140, 595);
    text(message2, 660, 595);
    textStyle(BOLD);
    textSize(25);
      message = "Confront the individual.";
      message2 = "Run.";
    }else if (gameState === 'gameEnd3'){
    x += random (-2, 2);
    y += random (-2, 2);
    x = constrain(x, -8, 8);
    y =  constrain(y, -8, 8);
    image (test5, x, y, 1400, 1400);
    image (textBox, 15, 550);
    fill(255);
    text(message, 40, 595);
    textStyle(BOLD);
    textSize(25);
      message = "You run as fast as your life depends on it\nBut as you run, you feel something pierce your stomach.\n\nLooking down, you see three long claws."       
    }else if (gameState === 'gameEnd3-2'){
    background(0);
    image (textBox, 15, 550);
    fill(255);
    text(message, 40, 595);
    textStyle(BOLD);
    textSize(25);
      message = "Everything goes dark."
    }else if (gameState === 'gameEnd3-3'){
    background(0);
    image (textBox, 15, 550);
    fill(255);
    text(message, 40, 595);
    textStyle(BOLD);
    textSize(25);
      message = "Ending C: Fight or Flight \n\n\nPress Space to Restart" 
      endingC = true;
      gameEnded = true;
    }else if (gameState === 'gameEnd4'){
    x += random (-2, 2);
    y += random (-2, 2);
    x = constrain(x, -8, 8);
    y =  constrain(y, -8, 8);
    image (test5, x, y, 1400, 1400);
    image (monsterSprite, 10, 10);
    image (textBox, 15, 550);
    fill(255);
    text(message, 40, 595);
    textStyle(BOLD);
    textSize(25);
      message = "You confront the beast, trying to explain the problems with what\nthey call 'entertainment'.\n\nWhile they seem to be listening, they're not too happy."
    }else if (gameState === 'gameEnd4-2'){
    image (test2, 0, 0);
    image (monsterSprite, 10, 10);
    image (textBox, 15, 550);
    fill(255);
    text(message, 40, 595);
    textStyle(BOLD);
    textSize(25);
      message = "The individual growls, pacing around the room for a small moment.\n\n 'Fine then! Go!' they shout."      
    }else if (gameState === 'gameEnd4-3'){
    image (test2, 0, 0);
    image (poutSprite, 10, 10);
    image (textBox, 15, 550);
    fill(255);
    text(message, 40, 595);
    textStyle(BOLD);
    textSize(25);
      message = "'And don't come back.'"
    }else if (gameState === 'gameEnd4-4'){
    image (test, 0, 0);
    image (textBox, 15, 550);
    fill(255);
    text(message, 40, 595);
    textStyle(BOLD);
    textSize(25);
      message = "You leave the individual's house, and return to the woods that started\nyour journey.\n\nWhile you may be lost again, you're safe."
    }else if (gameState === 'gameEnd4-5'){
    image (test, 0, 0);
    image (textBox, 15, 550);
    fill(255);
    text(message, 40, 595);
    textStyle(BOLD);
    textSize(25);
      message = "Ending D: Back Where It Began.\n\nPress Space to Restart\nDid you get every ending?"
      endingD = true;
      gameEnded = true;
    }else if (gameState === 'finale'){
    image (test, 0, 0);
    image (cheerSprite, 10, 10);
    image (textBox, 15, 550);
    fill(255);
    text(message, 40, 595);
    textStyle(BOLD);
    textSize(25);
    message = "'...'";      
    }else if (gameState === 'finale2'){
    image (test, 0, 0);
    image (laughSprite, 10, 10);
    image (textBox, 15, 550);
    fill(255);
    text(message, 40, 595);
    textStyle(BOLD);
    textSize(25);
    message = "'You're attempting this again? Really?'\n\n'After seeing everything I am?'";      
    }else if (gameState === 'finale3'){
    image (test, 0, 0);
    image (monsterSprite, 10, 10);
    image (textBox, 15, 550);
    fill(255);
    text(message, 40, 595);
    textStyle(BOLD);
    textSize(25);
    message = "'You've seen the monster I can become. And yet that's not stopping you?'\n\n'How... curious.'";   
    }else if (gameState === 'finale4'){
    image (test, 0, 0);
    image (laughSprite, 10, 10);
    image (textBox, 15, 550);
    fill(255);
    text(message, 40, 595);
    textStyle(BOLD);
    textSize(25);
    message = "'Maybe... you want to see more. Yes, I could see that being the case.\nthough that says more about you, than it does I.'\n\n'I can make something just for you.'";   
    }else if (gameState === 'finale5'){
    image (test, 0, 0);
    image (laughSprite, 10, 10);
    image (textBox, 15, 550);
    fill(255);
    text(message, 40, 595);
    textStyle(BOLD);
    textSize(25);
    message = "'Something with far greater spectacle! More gruesome detail, more horror!\nNot for my entertainment, but for you!'\n\n'Yes, I can see something like that working...'";   
    }else if (gameState === 'finale6'){
    image (test, 0, 0);
    image (cheerSprite, 10, 10);
    image (textBox, 15, 550);
    fill(255);
    text(message, 40, 595);
    textStyle(BOLD);
    textSize(25);
    message = "'Though please, grant me some time to create the experience you desire.\nIt's not something that can be made in an instant.'\n\n'Thank you for granting us this moment, it truly was a pleasure.'";   
    }else if (gameState === 'finale7'){
    image (test, 0, 0);
    image (textBox, 15, 550);
    fill(255);
    text(message, 40, 595);
    textStyle(BOLD);
    textSize(25);
    message = "Ending E: Promise for the Future\n\nPress Space to Begin Anew.";
    endingA = false;
    endingB = false;
    endingC = false;
    endingD = false;
    gameEnded = true;
    }
}


// Detect key presses depending on the situation
function keyPressed() {
  if (gameEnded && key === ' ') {
    restartGame();  // Restart the game if it's over and the player presses Space
  } else if (!gameEnded) {
    // Move between rooms based on current gameState
    if (gameState === "state1") {
      if (key === 'Z' || key === 'z') {
        gameState = "state2";   // Go forward
      }
    } else if (gameState === "state2" && (key === 'Z' || key === 'z')) {
      gameState = "state3";   // Proceed to a futher room
    } else if (gameState === "state3" && endingA == true && endingB == true && endingC == true && endingD == true && (key === 'Z' || key === 'z')){
      gameState = "finale";
    } else if (gameState === "state3" && endingA == true && endingB == true && endingC == true && endingD == true && (key === 'X' || key === 'x')){
      gameState = "finale";
    } else if (gameState === "state3" && (key === 'Z' || key === 'z')) {
      gameState = "state4";
    } else if (gameState === "state3" && (key === 'X' || key === 'x')){
      gameState = "gameEnd1";
    } else if (gameState === "gameEnd1"&& (key === 'Z' || key === 'z')){
      gameState = "gameEnd1-2";
    } else if (gameState === "state4" &&(key === 'Z' || key === 'z')){
      gameState = "state5";
    } else if (gameState === "state5" &&(key === 'Z' || key === 'z')){
      gameState = "state6";
    } else if (gameState === "state6" &&(key === 'Z' || key === 'z')){
      gameState = "state7";
    } else if (gameState === "state7" &&(key === 'Z'|| key === 'z')){
      gameState = "state8";
    } else if (gameState === "state8" &&(key === 'Z' || key === 'z')){
      gameState = "gameEnd2";
    } else if (gameState === "state8" &&(key === 'X' || key === 'x')){
      gameState = "state9";
    } else if (gameState === "gameEnd2" &&(key === 'Z' || key === 'z')){
      gameState = "gameEnd2-2";
    } else if (gameState === "gameEnd2-2" &&(key === 'Z' || key === 'z')){
      gameState = "gameEnd2-3";
    } else if (gameState === "state9" &&(key === 'Z' || key === 'z')){
      gameState = "state10";
    } else if (gameState === "state10" &&(key === 'Z' || key === 'z')){
      gameState = "state11";
    } else if (gameState === "state11" &&(key === 'Z' || key === 'z')){
      gameState = "state12";
    }else if (gameState === "state12" &&(key === 'Z' || key === 'z')){
      gameState = "state13";
    }else if (gameState === "state13" &&(key === 'X' || key === 'x')){
      gameState = "gameEnd3";
    }else if (gameState === "state13" &&(key === 'Z' || key === 'z')){
      gameState = "gameEnd4";
    }else if (gameState === "gameEnd3" &&(key === 'Z' || key === 'z')){
      gameState = "gameEnd3-2";
    }else if (gameState === "gameEnd3-2" &&(key === 'Z' || key === 'z')){
      gameState = "gameEnd3-3";
    }else if (gameState === "gameEnd4" &&(key === 'Z' || key === 'z')){
      gameState = "gameEnd4-2";
    }else if (gameState === "gameEnd4-2" &&(key === 'Z' || key === 'z')){
      gameState = "gameEnd4-3";
    }else if (gameState === "gameEnd4-3" &&(key === 'Z' || key === 'z')){
      gameState = "gameEnd4-4";
    }else if (gameState === "gameEnd4-4" &&(key === 'Z' || key === 'z')){
      gameState = "gameEnd4-5";
    }else if (gameState === "finale" &&(key === 'Z' || key === 'z')){
      gameState = "finale2";
    }else if (gameState === "finale2" &&(key === 'Z' || key === 'z')){
      gameState = "finale3";
    }else if (gameState === "finale3" &&(key === 'Z' || key === 'z')){
      gameState = "finale4";
    }else if (gameState === "finale4" &&(key === 'Z' || key === 'z')){
      gameState = "finale5";
    }else if (gameState === "finale5" &&(key === 'Z' || key === 'z')){
      gameState = "finale6";
    }else if (gameState === "finale6" &&(key === 'Z' || key === 'z')){
      gameState = "finale7";
    }
  }
}

// Restart the game
function restartGame() {
  gameState = "state1";   // Reset to the center room
  gameEnded = false;      // Reset the game ended status
}