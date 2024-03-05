function startClasification()
{
navigator.mediaDevices.getUserMedia({audio:true})
classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/V9gUisb_5/model.json', modelReady)

}

function modelReady()
{
classifier.classify(goResults);
}

function goResults(error,results)
{
if(error)
{
console.error(error);
}

else
{
console.log(results);
random_r=Math.floor(Math.random()*255)+1;
random_g=Math.floor(Math.random()*255)+1;
random_b=Math.floor(Math.random()*255)+1;

document.getElementById("result_label").innerHTML='Escucho'+results[0].label;
document.getElementById("result_label").style.color="rgb("+random_r+","+random_g+","+random_b+")";
document.getElementById("result_confidence").innerHTML='Presicion'+(result[0].confidence*100).toFixed(2)+" %";

img=document.getElementById("alien1");
img=document.getElementById("alien2");
img=document.getElementById("alien3");
img=document.getElementById("alien4");

if(results [0].label=="Aplausos"){
img=src = 'alien-01.gif';
img=src = 'alien-02.png';
img=src = 'alien-03.png';
img=src = 'alien-04.png';

}else if(results [0].label=="Sonido de fondo"){
img=src = 'alien-01.png';
img=src = 'alien-02.gif';
img=src = 'alien-03.png';
img=src = 'alien-04.png';
}else if(results [0].label=="hoja"){
img=src = 'alien-01.png';
img=src = 'alien-02.png';
img=src = 'alien-03.gif';
img=src = 'alien-04.png';
}else if(results [0].label=="mesa"){
    img=src = 'alien-01.png';
    img=src = 'alien-02.png';
    img=src = 'alien-03.png';
    img=src = 'alien-04.gif';
}
}
}