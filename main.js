var svgbox = document.getElementById("vimage");
var height = svgbox.getAttribute('height');
var width  =svgbox.getAttribute('width');





var clearSVG = function () {
 window.cancelAnimationFrame(rid)
	while (svgbox.lastChild) {
		svgbox.removeChild(svgbox.lastChild);
	};

};


var growing = true;
var rid = 1;
var rad = 1;

function animateCircle(e){  
	window.cancelAnimationFrame(rid); 
	
   
	var drawC = function(){
		clearSVG();
		var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
		c.setAttribute("cx", width/2);
		c.setAttribute("cy", height/2);
		c.setAttribute("r", rad);
		c.setAttribute("fill","green");
		svgbox.appendChild(c);
		c.setAttribute('r',rad);
		
		if(rad>height/2 ||rad>width/2 ){
			growing = false;

		}
		if(rad<1){
			growing = true;
		}
		
		if (growing == true){
			rad+=1;
		}
		else{rad-=1;}

		rid = window.requestAnimationFrame(animateCircle);
	};
	drawC();
	
	
    };
	
	


function bouncy() {
	window.cancelAnimationFrame(rid); 
    var x = Math.random() * width/2;
    var y = Math.random() * height/2;
	var addvalx = 1;
    var addvaly = 1;
    

    var bouncebounce = function(){
		clearSVG();
		var f = document.createElementNS("http://www.w3.org/2000/svg", "rect");
		f.setAttribute("x", x);
		f.setAttribute("y", y);
		f.setAttribute("fill","green");
		f.setAttribute('width','50');
		f.setAttribute('height','50');
		svgbox.appendChild(f);

        if( x <= 0 || x>= width-50){
            addvalx =addvalx* -1;
			x += addvalx;
        }
        if( y <= 0 || y>= height-50){
            addvaly =addvaly* -1;
			y += addvaly;
        }
        x += addvalx;
        y += addvaly;

        rid = requestAnimationFrame( bouncebounce );
    }

    bouncebounce();
};





var stop = function(){
    window.cancelAnimationFrame(rid)
}

document.getElementById("dvd").addEventListener("click", bouncy);
document.getElementById("stop").addEventListener("click", stop);
document.getElementById("circle").addEventListener("click", animateCircle);
document.getElementById("clear").addEventListener("click", clearSVG);
