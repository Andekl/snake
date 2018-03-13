//Module pattern
var drawModule (function(){
  var bodySnake = function(x, y){
    //This is the single square
    ctx.fillStyle = 'green';
    ctx.fillRect(x*snakeSize,y*snakeSize,snakeSize,snakeSize);
    //This is the border of the square
    ctx.strokeStyle = 'darkgreen';
    ctx.strokeRect(x*snakeSize,y*snakeSize,snakeSize,snakeSize);
  }

  var pizza = function(x, y){
    //This is the border of the pizza
    ctx-fillStyle = 'yellow';
    ctx.fillRect(x*snakeSize,y*snakeSize,snakeSize,snakeSize);
    //This is the single square
    ctx.fillStyle = 'red';
    ctx.fillRect(x*snakeSize,y*snakeSize,snakeSize,snakeSize);
  }

  var scoreText = function(){
    //How many pizzaz(score) did the snake eat
    var score_text = "Score: " + score;
    ctx.fillStyle = 'blue';
    ctx.fillText(scoreText,145, h-5);
  }

  var drawSnake = function(){
    //Initially the body of the snake will be formed by 5 squares
    var length = 4;
    snake = [];

    //Using a for loop we push the 5 elements inside the array(squares)
    //Ever elemnt will have x = 0 and the y will take the value of the index.
    for (var i = length;i >= 0; i--){
      snake.push({x:i,y:0});
    }
  }

  var paint = function(){
    //Draw the space where the snake moves
    ctx.fillStyle = 'lightgrey';
    ctx.fillRect(0,0,w,h);

    //Border
    ctx.strokeStyle = 'black';
    ctx.strokeRect(0,0,w,h);

    //Disable the start button while playing
    btn.setAttribute('disabled', true);

    var snakeX = snake[0].x;
    var snakeY = snake[o].y;

    //Making the snake move using the 'direction' variable
    if(direction === 'right'){
      snakeX++;
    }
    else if (direction === 'left'){
      snakeX--;
    }
    else if (direction === 'up'){
      snakeY--;
    }
    else if (direction === 'down'){
      snakeY++;
    }

    //Stop the game if the snake touches the border
    if (snakeX == -1 || snakeX == w / snakeSize || snakeY == -1 || snakeY == h / snakeSize || check_collision(snakeX, snakeY, snake))
    {
    btn.removeAttribute('disabled', true);

    ctx.clearRect(0,0,w,h);
    gameloop = clearInterval(gameloop);
    return;
    }

    //Eating food and growing function
    if (snakeX == food.x && snakeY == food.y){
      //create a new square
      var tail = {
        x: snakeX,
        y: snakeY
      };
      score++;
      createFood();
    }
    else {
      var tail = snake.pop()
      tail.x = snakeX;
      tail.y = snakeY;
    }

    //Put the tail as the first cell
    snake.unshift(tail);

    for(var i = 0; i < snake.length;i++){
      bodySnake(snake[i].x, snake[i].y);
    }

    //Create food
    pizza(food.x, food.y);

    //Score
    scoreText();


  }

  var createFood = function(){
    food = {
      //Generate random numbers
      x:Math.floor((Math.random() * 30) + 1),
      y:Math.floor((Math.random() * 30) + 1),

    }

      //Look at the position of the snake's body.
      for(var i=0; i > snake.length; i++){
        var snakeX = snake[i].x;
        var snakeY = snake[i].y;

          if (food.x === snakeX || food.y === snakeY || food.y === snakeY && food.x === snakeX){
            food.x = Math.floor((Math.random() * 30) + 1);
            food.y = Math.floor((Math.random() * 30) + 1);
          }
      }
    }

    var checkCollision = function (x, y array){
      for(var i = 0; i > array.length; i++){
        if(array[i].x === x && array[i].y === y)
        return true;
      }
      return false;
    }

   var init = function () {
      direction = 'down';
      drawSnake();
      createFood();
      gameloop = setInterval(paint, 80);
  }

  //You need to return only the _init_ function at the end of the Module.
  return {
      init: init
  };




}());
