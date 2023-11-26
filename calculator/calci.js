let result = document.getElementById('output');
function display(num){
    result.value += num;
}
function calculate(){
    try{ 
    result.value = eval(result.value);
    }catch(err){
        alert('Invalid expression');
    }
}
function Clear(){
    result.value = "";
}
function del(){
    result.value = result.value.slice(0, -1);
}

let togglebtn = document.querySelector('.toggle');
let body = document.querySelector('body');

togglebtn.addEventListener('click', function(){
    body.classList.toggle('dark');
})

