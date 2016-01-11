/*



*/
(function(root){
	function log(){
		root.console.log(arguments);
	}

	function respondCanvas(){ 
        model.canvas.setAttribute('width', model.container.width ); //max width
        model.canvas.setAttribute('height', model.container.height ); //max height
        //Call a function to redraw other content (texts, images etc)
    }

	function init(){
	    //Run function when browser resizes
	    root.onresize = respondCanvas();
	    respondCanvas();

	    // request animation frame for drawing
		root.requestAnimationFrame(draw);
	}

	function draw(){		
		//ctx.globalCompositeOperation = 'destination-over';
		model.ctx.clearRect(0,0,model.canvas.width, model.canvas.height); // clear canvas

		model.ctx.fillStyle = 'rgba(0,0,0,1)';
		model.ctx.strokeStyle = 'rgba(0,153,255,0.4)';
		model.ctx.fillRect(0,0,model.canvas.width, model.canvas.height); // Shadow

		model.ctx.font = "bold 16px Arial";
		model.ctx.fillStyle = 'rgba(100,100,0,1)';
		model.ctx.fillText(new Date().toLocaleString(), 100, 100);

		model.ctx.save();

		// request animation frame for drawing
		root.requestAnimationFrame(draw);
	}

	// Loading EVERYTHING into a single object called model, for fun of course.
	var model = {};
	model.container = document.getElementById("canvasContainer");
	model.canvas = document.getElementById("canvas");
	model.ctx = model.canvas.getContext("2d");
	model.earth=new Image();
	model.moon = new Image();
	model.rocket = new Image();
	model.data = [
		{name:"Basingstoke", miles : 1000},
		{name:"Carlow", miles : 2000},
		{name:"Chattanooga", miles : 3000},
		{name:"Columbia", miles : 4000},
		{name:"Dorking", miles : 5000},
		{name:"Glendale", miles : 6000},
		{name:"Portland", miles : 7000},
		{name:"US Field Offices", miles : 8000},
		{name:"Worcester", miles : 9000}
	];
	window.model = model;

	init();
})(window);