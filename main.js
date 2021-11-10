function preload() {
    clown_nose = loaImage('https://i.postimg.cc/GtkLd6LC/6702229-preview.jpg');
}

function setup(){
    canvas = createCanvas(640, 400);
    canvas.position(110, 250);
    video - createCapture(VIDEO);
    video.hide();

    tint_color ="";
}

function draw(){
    image(video, 0, 0,640,480);
    tint(tint_color);
}

function take_snapshot(){
    save('student_name.png');
}

function filter_tint(){
    tint_color = document.getElementById("color_name").value;
}

function preload() {
}

function setup(){
    canvas = createCanvas(640, 400);
    canvas.position(110, 250);
    video - createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}

function draw() {
    image(video, 0,0, 300, 300);
}

function take_snapshot(){
    save('myFilterImage.png');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}

function draw() {
    image(video, 0,0, 300, 300);
    circle(noseX, noseY, 20);
}

function draw() {
    image(video, 0,0, 300, 300);
    fill(255,0,0);
    stroke(255,0,0);
    circle(noseX, noseY, 20);
    image(clown_nose, noseX, noseY, 30, 30);
}

function draw() {
    image(video, 0,0, 300, 300);
    circle(noseX, noseY, 20);
}
