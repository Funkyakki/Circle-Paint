var mouseEvent = "empty";

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var color = "";
width_of_line = "";
radius = "";

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)    
{    
color = document.getElementById("input_color").value;
radius = document.getElementById("input_radius").value;
width_of_line = document.getElementById("input_width_of_line").value;
mouseEvent = "mouseDown";
    }

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e)
    {    
mouseEvent = "mouseUP";
    }

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e)
    {    
mouseEvent = "mouseLeave";
    }

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e)
    {    
current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
current_position_of_mouse_y = e.clientY - canvas.offsetTop;

if (mouseEvent=="mouseDown")
    {
console.log("Current position of x and y coordinates = ");
console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = width_of_line;


ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y,radius,0,Math.PI*2);

ctx.stroke();
    }

    }
















