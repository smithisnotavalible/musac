function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/G_DpC36QJ/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error, results) {
if (error) {
    console.error(error);
} else {
    console.log(results);
    random_r = Math.floor(Math.random() * 255) + 1;
    random_g = Math.floor(Math.random() * 255) + 1;
    random_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+"%";
    document.getElementById("result_label").style.color = "rgb("+random_r+","+random_g+","+random_r+")";
    document.getElementById("result_confidence").style.color = "rgb("+random_r+","+random_g+","+random_r+")";
    
    img1 = document.getElementById('m1')
    img2 = document.getElementById('m2')
    img3 = document.getElementById('m3')

    if (results[0].label =="Guitar")
    {
       img1.src = 'guitar.gif';
       img2.src = 'bongo.jpg';
       img3.src = 'Piano.png';
    }
    
    if (results[0].label =="Bongo")
    {
       img1.src = 'Guitar.jpg';
       img2.src = 'bongo (1).gif';
       img3.src = 'Piano.png';
    }
    
    if (results[0].label =="Piano")
    {
       img1.src = 'Guitar.jpg';
       img2.src = 'bongo.jpg';
       img3.src = 'piano.gif';
    }
}
}