var ind = 1;
var imgel = document.getElementById('mainIMG');
var pictures = [];

pictures[0] = './images/1.jpg'
pictures[1] = './images/2.jpg'
pictures[2] = './images/2.png'
pictures[3] = './images/3.png'
console.log(pictures.length)
function changeImgR() {
    if (ind <= pictures.length-1 && ind >= 0){
        imgel.src = pictures[ind]
        console.log('done' + ind)
        ind = ind + 1
    } else {
        ind=0
        imgel.src = pictures[ind]
        console.log('done' + ind)
        ind = ind + 1
    }
}
function changeImgL() {
    if (ind <= pictures.length-1 && ind >= 0){
        imgel.src = pictures[ind]
        console.log('donef  ' + ind)
        ind = ind - 1
    } else {
        ind=3
        imgel.src = pictures[ind]
        console.log('dones  ' + ind)
        ind = ind - 1
    }
}