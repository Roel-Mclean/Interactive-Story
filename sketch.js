function preload() {
  let imagePath = loadImage("mystery.png");
}

function setup() {
  image(imagePath, 0, 0);
  

  //create background to place objects on
  createCanvas(window.innerWidth, window.innerHeight);
  background(255);

  //create title
  let title = "Interactive Story"
  textSize(60)
  textAlign(CENTER);
  titleText = text(title, window.innerWidth / 2, window.innerHeight / 2);

  //start new story button
  startNewStoryButton = new Clickable(window.innerWidth / 2 - 400, window.innerHeight - 200);
  startNewStoryButton.resize(300, 150);
  startNewStoryButton.text = "Start New Story";
    text("jkgskj", window.innerWidth / 2, window.innerHeight / 2);
  startNewStoryButton.onRelease = function() {
    console.log("start New Story Button pressed")
  }

  // continue story button
  continueStoryButton = new Clickable(window.innerWidth / 2 + 100, window.innerHeight - 200);
  continueStoryButton.resize(300, 150);
  continueStoryButton.text = "Continue Story";
  continueStoryButton.onRelease = function() {
    console.log("continue story button pressedd")
  }

  //help Button
  helpButton = new Clickable(window.innerWidth - 80, 50);
  helpButton.resize(50, 30);
  helpButton.text = "Help";
  //function on what to do when help button is pressed
  helpButton.onRelease = function() {
    console.log("help button pressed")
  }

  // loadImage(imagePath, img => {
  //       img.resize(window.innerWidth, window.innerHeight);
  //       image(img, 0, 0);
  //       fill(255, 255, 255, 100);
  //       rect(0, 0, window.innerWidth, window.innerHeight);
  //       fill(0);
  //       textAlign(CENTER);
  //       textSize(20);
  //     });
}

function draw() {
  startNewStoryButton.draw()
  continueStoryButton.draw()
  helpButton.draw()
}
