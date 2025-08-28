$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    
    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(200, 650, 75, 100);
    createPlatform(400, 550, 75, 500,);
    createPlatform(600, 450, 75, 900);
    createPlatform(800, 350, 75, 1300);
    createPlatform(1000, 250, 75, 1700);



    // TODO 3 - Create Collectables
    createCollectable("grace", 220, 600);
    createCollectable("grace", 420, 500);
    createCollectable("grace", 620, 400);
    createCollectable("grace", 820, 300);
    createCollectable("grace", 1020, 200);


    
    // TODO 4 - Create Cannons
    createCannon("right", 290, 1500);
    createCannon("right", 990, 1500);
    createCannon("left", 290, 1500);
    createCannon("right", 600, 2000);
    createCannon("top", 590, 1500);


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});

