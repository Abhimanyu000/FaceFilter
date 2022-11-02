poseX=0;
poseY=0;

function preload(){
    mustache=loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}

function setup(){
    canvas=createCanvas(600, 350);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(600, 350);
    video.hide();
    posenet=ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotPoses);
}

function draw(){
    image(video, 0, 0, 600, 350);
    image(mustache, poseX, poseY, 70, 37);
}

function clickImg(){
    save("filteredIMAGE.png");
}

function modelLoaded(){
    console.log("posenet is working.................");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        poseX=results[0].pose.nose.x-35;
        poseY=results[0].pose.nose.y-10;
        console.log("nose x"+poseX);
        console.log("nose y"+poseY);
    }
}