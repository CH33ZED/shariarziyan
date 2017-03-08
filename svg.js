
            var a = document.getElementById("a");
            var q = document.getElementById("circle");
            var t = document.getElementById("dvd");
            var r = document.getElementById("clear");
            var c = a.getAttribute('width')/2;
            var d = a.getAttribute('height')/2;
            var f = 1;
            var u = 1;
            
var draw = function(event){
               var e = document.createElementNS("http://www.w3.org/2000/svg","circle");	
	       e.setAttribute("cx", c );
	       e.setAttribute("cy", d);
	       e.setAttribute("r",u);
               e.setAttribute("fill","purple");
               e.addEventListener('click', colar);
	       a.appendChild(e);
}

var colar = function(event){
    e.setAttribute("fill", "red");
}


var dvder = function(event){
               var h = 0;
    var i = 0;
    var j = 0;
    var k = 0;
               var dver = function(event){
                    clear();
                    var n = document.createElementNS("http://www.w3.org/2000/svg","image");	
	            n.setAttribute("xlink:href", "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSgD--F0M0BAMmp6ywaPT1JE-YfKQjiQCNC0LvwDh3MEt3oTo6-BuqRmw" );
	            n.setAttribute("x", h);
	            n.setAttribute("y",i);
	            n.setAttribute("height","50px");
		    n.setAttribute("width","50px");
	            a.appendChild(n);
                    if(h == 0){
                        j++;
                    }
                    else{
                        j--;
                    }
                    if(i == 0){
                        k++;
                    }
                    else{
                        k--;
                    }
                    if(j == 0 && h == 1){
                         j++;
                         h=0;
                    }
                    if(j == 400 && h == 0){
                         j--;
                         h=1;
                    }
                    if(k == 0 && i == 1){
                         k++;
                         i=0;
                    }
                    if(k == 250 && i == 0){
                         k--;
                         i=1;
                    }
                    rid = window.requestAnimationFrame( dver );
               }
}

var clear = function(event){
    while(a.hasChildNodes()){
	a.removeChild(a.childNodes[0]);
	window.cancelAnimationFrame(rid);
    }
}
q.addEventListener('click', draw);
r.addEventListener('click', clear);
            
 
