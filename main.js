var Mouse_Event="empty";

canvas=document.getElementById('myCanvas');
ctx= canvas.getContext('2d');

color= "Black";
radius= 50;
widthOfLine=1;

canvas.addEventListener("mousedown" , myMousedown)
function myMousedown(e)
{
Mouse_Event="mousedown";
console.log(Mouse_Event);
color=document.getElementById("colour"). value;
radius=document.getElementById("radius"). value;
widthOfLine=document.getElementById("width_of_line"). value;
console.log(color);
console.log(widthOfLine);
console.log(radius);
}
canvas.addEventListener("mousemove" , myMousemove);
function myMousemove(e)
{
   current_position_of_X= e.clientX - canvas.offsetLeft;
   current_position_of_Y= e.clientY - canvas.offsetTop;
   console.log(Mouse_Event);
   if (Mouse_Event == "mousedown") 
   {
       console.log("Mouse is working")
       ctx.beginPath();
       ctx.strokeStyle=color;
       ctx.lineWidth=widthOfLine;
       ctx.arc(current_position_of_X,current_position_of_Y,radius,0, 2 * Math.PI);

       ctx.stroke();
   }
}
canvas.addEventListener("mouseup", myMouseup);
function myMouseup(e)
{
    console.log(Mouse_Event);
    Mouse_Event="mouseup";
}
canvas.addEventListener("mouseleave", myMouseleave);
function myMouseleave(e)
{
    console.log(Mouse_Event);
    Mouse_Event="mouseleave";
}
function Clear_Area()
{
ctx.clearRect(0,0,canvas.width,canvas.height);
}