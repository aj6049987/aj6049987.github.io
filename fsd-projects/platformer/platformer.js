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
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     //toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(0,150,100,20, "orange");
    createPlatform(0,250,550,20, "purple");
    createPlatform(400,85,20,165, "purple");
    createPlatform(350,150,50,20, "purle");
    createPlatform(710,0,20,450, "black");
    createPlatform(250,470,400,20, "black");
    createPlatform(630,400,20,90, "black");
    createPlatform(550,450,80,20, "black");
    createPlatform(400,390,80,80, "black");
    createPlatform(720,490,-100,-20, "black");
    createPlatform(250,400,80,20, "black");
    createPlatform(230,370,20,250, "black");
    createPlatform(0,500,150,20, "orange");
    createPlatform(80,620,150,20, "purple");
    createPlatform(350,650,70,10, "orange");
    createPlatform(500,600,200,20, "orange");
    createPlatform(590,620,20,150, "orange");
    createPlatform(750,400,20,150, "purple");
    createPlatform(900,650,100,20, "orange");
    createPlatform(1200,710,30,30, "lightblue");
    createPlatform(1250,600,100,20, "black");
    createPlatform(1200,150,200,30, "limegreen");
    createPlatform(1000,350,20,200, "orange");
    createPlatform(750,350,250,10, "orange");
    createPlatform(800,575,20,20, "purple");
    createPlatform(900,500,100,20, "orange");
    createPlatform(1020,525,150,20, "orange");
    createPlatform(1020,475,50,20, "orange");
    createPlatform(1150,200,20,200, "purple");
    createPlatform(1050,250,100,10, "purple");
    createPlatform(750,250,100,20, "black");
    createPlatform(900,330,20,20, "lightblue");
    createPlatform(900,170,150,10, "purple");




    // TODO 3 - Create Collectables
    createCollectable("database", 100,220,0,0.7);
    createCollectable("database", 350,430,0,0.7);
    createCollectable("database", 50,700,0.5,0.7);
    createCollectable("database", 650,650,0,0.7);
    createCollectable("database", 900,450,0,0.7);
    createCollectable("database", 970,300,0,0.7);
    createCollectable("database", 1250,110,0,0.7);



    
    // TODO 4 - Create Cannons
    createCannon("top", 800,3000);
    createCannon("bottom",1000,12000);
    createCannon("left",500,50000);
    createCannon("right", 300,12000)


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
