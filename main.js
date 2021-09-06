function preload(){

}
function setup(){
   canvas= createCanvas(640,480);
   canvas.position(100,250);
   video=createCapture(VIDEO);
   video.hide();
   
}
function draw(){
   image(video,150,100,340,280);
   stroke("#f6ff00");
   fill("#0dff00");
   rect(34,50,40,370,);
  
  fill("#0dff00")
   rect(50,410,495,40,);
  fill("#fa0000");
  circle(50,430,100);
  fill("#0dff00")
  rect(570,50,40,370,);
  fill("#fa0000");
  circle(590,430,100);
  fill("#0dff00")
  rect(50,25,495,40,);
  fill("#fa0000");
  circle(590,50,100);
  fill("#fa0000");
  circle(50,50,100,);
  
}
function take_snapshot(){
   save("image.jpg");
}