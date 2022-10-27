function preload(){

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
        console.log("nose x"+results[0].pose.nose.x);
        console.log("nose y"+results[0].pose.nose.y);
    }
}