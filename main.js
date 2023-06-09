noseX=0;
noseY=0;
function preload(){
    pumpkin=loadImage('Mario118118 hat.webp');
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("poseNet esta inicializado");
}
function draw(){
    image(video,0,0,300,300);
    image(pumpkin,noseX,noseY,150,150);
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX=results[0].pose.nose.x-80;
        noseY=results[0].pose.nose.y-150;
    }
}
function take_snapshot(){
save('myFiterImage.png')
}

