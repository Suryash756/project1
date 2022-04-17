Mouseevent= "";
lastpositionx=0;
lastpositiony=0;
//it is used for taking x and y position of mouse

canvas= document.getElementById("canvas1");
ctx=canvas.getContext("2d");

color="black";
width=5;
//it is used for making default value of pen

canvas.addEventListener("mousedown",mouse_down);
function mouse_down(e){
  color= document.getElementById("input_color").value;
  width= document.getElementById("input_number").value;
  Mouseevent= "mouseDown";
}
canvas.addEventListener("mousemove",mouse_move);
function mouse_move(e){
    currentpositionx=e.clientX-canvas.offsetLeft;
    currentpositiony=e.clientY-canvas.offsetTop;
    if(Mouseevent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle= color;
        ctx.lineWidth= width;
        ctx.arc(currentpositionx,currentpositiony,40,0,2*Math.PI);
        ctx.stroke();
    }
    lastpositionx=currentpositionx;
    lastpositiony=currentpositiony;

}
canvas.addEventListener("mouseup",mouse_up);
function mouse_up(e){
    Mouseevent="mouseUp";

}
canvas.addEventListener("mouseleave",mouse_leave);
function mouse_leave(e){
    Mouseevent="mouseLeave";
}
function clear_area(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}