var svgbox = document.getElementById("vimage");
var height = svgbox.getAttribute('height');
var width = svgbox.getAttribute('width');
var rid = 1;
//
var draw = function(event) {
    if (event.currentTarget == event.target) {
        var u = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        var c = event.clientX - 10;
        var d = event.clientY - 10;
        u.setAttribute("cx", c);
        u.setAttribute("cy", d);
        u.setAttribute("r", 20);
        u.setAttribute("fill", "purple");
        u.setAttribute('counter', 0);
        u.setAttribute('dy', 1);
        u.setAttribute('dx', 1);
        u.addEventListener("click", colar, false);
        u.addEventListener("click", dedboi);
        svgbox.appendChild(u);
    }
}

function bouncy() {
    var bouncebounce = function() {
        var circles = document.getElementsByTagName('circle');
        for (var i = 0; i < circles.length; i++) {
            var xpos = parseInt(circles[i].getAttribute('cx'));
            var ypos = parseInt(circles[i].getAttribute('cy'));
            var dx = parseInt(circles[i].getAttribute('dx'));
            var dy = parseInt(circles[i].getAttribute('dy'));
            if (xpos <= 0 || xpos >= width - 20) {
                circles[i].setAttribute('dx', dx * -1);
                dx *= -1;
            };
            if (ypos <= 0 || ypos >= height - 20) {
                circles[i].setAttribute('dy', dy * -1);
                dy *= -1;
            }
            xpos += dx;
            ypos += dy;
            circles[i].setAttribute('cx', xpos);
            circles[i].setAttribute('cy', ypos);
        }
        rid = requestAnimationFrame(bouncebounce);
    }
    bouncebounce();
};

var colar = function(event) {
    this.setAttribute("fill", "red");
    var counter = parseInt(this.getAttribute('counter'));
    counter += 1;
}

var dedboi = function(event) {
    var counter = parseInt(this.getAttribute('counter')) + 1;
    this.setAttribute('counter', counter);
    if (this.getAttribute('fill') == 'red' && counter >= 2) {
        console.log('work');
        svgbox.removeChild(this);
		var u = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        var c = event.clientX - 10;
        var d = event.clientY - 10;
        u.setAttribute("cx", Math.random() * width/2);
        u.setAttribute("cy", Math.random() * height/2);
        u.setAttribute("r", 20);
        u.setAttribute("fill", "purple");
        u.setAttribute('counter', 0);
        u.setAttribute('dy', 1);
        u.setAttribute('dx', 1);
        u.addEventListener("click", colar, false);
        u.addEventListener("click", dedboi);
        svgbox.appendChild(u);
    }
}
var clearSVG = function() {
    window.cancelAnimationFrame(rid)
    while (svgbox.lastChild) {
        svgbox.removeChild(svgbox.lastChild);
    };

};

document.getElementById("dvd").addEventListener("click", bouncy);
document.getElementById("vimage").addEventListener("click", draw, true);
document.getElementById("clear").addEventListener("click", clearSVG);