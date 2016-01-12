/*
	Gary Kenneally
	A simple canvas animation displaying 


*/
(function(root){
	function log(){
		root.console.log(arguments);
	}



	function respondCanvas(){ 
		//log("canvaas resize", model.container.offsetWidth,  model.container.offsetHeight)
        model.canvas.setAttribute('width', model.container.offsetWidth ); //max width
        model.canvas.setAttribute('height', model.container.offsetHeight ); //max height
        //Call a function to redraw other content (texts, images etc)        
        draw();
    }

	function init(){
	    //Run function when browser resizes
	    root.onresize = respondCanvas;
	    
	    // request animation frame for drawing
		root.requestAnimationFrame(draw);		
		
		respondCanvas();
	}

	function draw(){		
		//ctx.globalCompositeOperation = 'destination-over';
		model.ctx.clearRect(0,0,model.canvas.width, model.canvas.height); // clear canvas

		model.ctx.fillStyle = 'rgba(0,0,0,1)';
		model.ctx.strokeStyle = 'rgba(255,255,255,0.4)';
		model.ctx.fillRect(0,0,model.canvas.width, model.canvas.height); // Shadow

		drawEarth();

		// Rockets
		//log(model.data.length);
		for(var i = 0; i< model.data.length; i++){
			drawRocket(i, model.data[i].miles, model.data[i].name);	
		}		

		// request animation frame for drawing
		//root.requestAnimationFrame(draw);
	}

	function drawEarth(){
		model.ctx.drawImage(model.earth,-500,-150);
	}

	function drawRocket(index, distance, label){
		model.ctx.save();				
		model.ctx.rotate((Math.PI/180) * 90); // rotate our rocket.

		var dx = 50 + (index * 20);
		var dy = -100 + (0 - (distance * 0.005)); //
		
		log("dx", dx);
		log("dy", dy)
		model.ctx.drawImage(model.rocket,dx,dy,20,20);

		dx = -120;// + (0 - (distance * 0.005)); 
		dy = 50;// + (index * 20);
		model.ctx.font = "10px serif";
		model.ctx.fillStyle = "white";
		model.ctx.fillText(label, dx, dy);
		model.ctx.restore();
	}

	// Loading EVERYTHING into a single object called model, for fun of course.
	var model = {};
	model.container = document.getElementById("canvasContainer");
	model.canvas = document.getElementById("canvas");
	model.ctx = model.canvas.getContext("2d");

	/* Distance from earth to the moon
		This is actually an incorrect distance, the more correct distance 
		is around 238900 miles. At this point it is easier to alter the realities
		our solar system than it is to change the excercise goal.  

		Interestingly if the distance to the moon was reduced to 235109.5 
		there would likely be increased tidal flooding and worldwide
		devastation but luckily altering the orbits of satelites is currently
		beyond the powers of javascript...
	*/
	model.moonDistance = 235109.5;
	model.earth=new Image();
	model.earth.src="../src/earth.png"
	model.moon = new Image();
	model.rocket = new Image();
	model.rocket.src="../src/rocket.png"
	
	model.data = [
		{name:"Basingstoke", miles : 0},
		{name:"Carlow", miles : 2000},
		{name:"Chattanooga", miles : 4000},
		{name:"Columbia", miles : 6000},
		{name:"Dorking", miles : 8000},
		{name:"Glendale", miles : 10000},
		{name:"Portland", miles : 12000},
		{name:"US Field Offices", miles : 120000},
		{name:"Worcester", miles : model.moonDistance}
	];
	root.model = model;

	root.onload = init;
})(window);