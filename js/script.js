let form = document.getElementById('order-call');
let x_btn = document.getElementById('x-btn');

let btn = document.getElementById('btn-join');

let form_call = function(){
    document.getElementById('order-call').style.display="flex";
    document.getElementById('popup').style.display='flex';
}

let close_form = function(){
    document.getElementById('popup').style.display='none';
}

x_btn.onclick = close_form;

btn.onclick = form_call;