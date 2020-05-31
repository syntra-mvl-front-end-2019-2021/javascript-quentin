let para = document.createElement('p');
let app = document.getElementById('app');
let header = document.getElementById('header');
//let paraFromPage = document.getElementsByTagName('p');
let span = document.createElement('span');

span.innerText = "dit is ook tof";
para.innerText = "dit is tof!";
para.appendChild(span);


function parClick(event){
    console.log('joepie');
}
para.addEventListener('click',parClick );

//app.appendChild(para);
app.insertBefore(para, header);
para.setAttribute('id' , ' par-1');

const headerID = header.getAttribute('id');

header.setAttribute('id', headerID + ' header-2');

header.remove();