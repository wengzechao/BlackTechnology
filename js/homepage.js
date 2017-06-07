var all = document.getElementById("all");
var laptop = document.getElementById("laptop");
var processor = document.getElementById("processor");
var mainboard = document.getElementById("mainboard");
var graphic = document.getElementById("graphic");
var peripheral = document.getElementById("peripheral");
var desktop = document.getElementById("desktop");
var div1 = document.getElementById("content-all");
var div2 = document.getElementById("content-laptop");
var div3 = document.getElementById("content-processor");
var div4 = document.getElementById("content-mainboard");
var div5 = document.getElementById("content-graphic");
var div6 = document.getElementById("content-peripheral");
var div7 = document.getElementById("content-desktop");
var div8 = div1;
all.style.color = 'red';
function show(obj) {
    if(obj.style.display == 'none') {
        obj.style.display = 'block';
    } 
    else {
        obj.style.display = 'none';
    }
}
function change_color() {
    if(all.style.color == 'red')
        all.style.color = 'black';
    if(laptop.style.color == 'red')
        laptop.style.color = 'black';
    if(processor.style.color == 'red')
        processor.style.color = 'black';
    if(mainboard.style.color == 'red')
        mainboard.style.color = 'black';
    if(graphic.style.color == 'red')
        graphic.style.color = 'black';
    if(peripheral.style.color == 'red')
        peripheral.style.color = 'black';
    if(desktop.style.color == 'red')
        desktop.style.color = 'black';
}
all.onclick = function() {
    change_color();
    all.style.color = 'red';
    show(div1);
    if(div8 == div1){
        div8.style.display = 'block';
    }
    else{
        div8.style.display = 'none';
    }
    div8 = div1;
}
laptop.onclick = function() {
    change_color();
    laptop.style.color = 'red';
    show(div2);
    if(div8 == div2){
        div8.style.display = 'block';
    }
    else{
        div8.style.display = 'none';
    }
    div8 = div2;
}
processor.onclick = function() {
    change_color();
    processor.style.color = 'red';
    show(div3);
    if(div8 == div3){
        div8.style.display = 'block';
    }
    else{
        div8.style.display = 'none';
    }
    div8 = div3;
}
mainboard.onclick = function() {
    change_color();
    mainboard.style.color = 'red';
    show(div4);
    if(div8 == div4){
        div8.style.display = 'block';
    }
    else{
        div8.style.display = 'none';
    }
    div8 = div4;
}
graphic.onclick = function() {
    change_color();
    graphic.style.color = 'red';
    show(div5);
    if(div8 == div5){
        div8.style.display = 'block';
    }
    else{
        div8.style.display = 'none';
    }
    div8 = div5;
}
peripheral.onclick = function() {
    change_color();
    peripheral.style.color = 'red';
    show(div6);
    if(div8 == div6){
        div8.style.display = 'block';
    }
    else{
        div8.style.display = 'none';
    }
    div8 = div6;
}
desktop.onclick = function() {
    change_color();
    desktop.style.color = 'red';
    show(div7);
    if(div8 == div7){
        div8.style.display = 'block';
    }
    else{
        div8.style.display = 'none';
    }
    div8 = div7;
}