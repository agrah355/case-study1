Webcam.set({
    width: 310,
    height: 300,
    image_format: "png",
    png_quality: 90,

    constraints: { 
        facingMode: "environment"
     }
});
camera=document.getElementById("camera");
Webcam.attach( '#camera' );
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='captured_image' src='"+data_uri+"'>"
    });
}
calassifier=ml5.imageClassifier("Mobilnet",modelLoaded);
console.log("ml5 version",ml5.version);
function modelLoaded(){
    console.log("ml5 loaded true");
}

function check(){
    img=document.getElementById('captured_image');
    calassifier.classify(img, gotResult);
}
function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result").results[0].label;
    };
}