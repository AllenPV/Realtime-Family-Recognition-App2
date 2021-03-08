function setup()
{
Canvas = createCanvas(300,300);
Canvas.center();
Video = createCapture(VIDEO);
Video.hide();
classifier = ml5.imageClassifier();
}
function draw(){

}