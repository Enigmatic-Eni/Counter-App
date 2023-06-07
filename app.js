// Method 1: The problem here is that there's too much repitition in the code.

// let increase = document.getElementById('increase');
// let decrease = document.getElementById('decrease');
// let reset = document.getElementById('reset');


// increase.addEventListener('click', function(){
//     cout = cout + 1;
//     count.innerHTML = cout;
//     console.log(increase);
// })

// decrease.addEventListener('click', function(){
//     cout = cout - 1;
//     count.textContent = cout;
// })

// reset.addEventListener('click', function(){
//     cout = 0;
//     count.textContent = cout;
// })

//Method 2: This is much better because there is less repitition.

let button = document.querySelectorAll(' .btn');
let count = document.getElementById('span');

cout = 0;

button.forEach(function(btn){
    btn.addEventListener('click', function(e){
        style = e.currentTarget.classList;
        if(style.contains('increase')){
            cout++;
        }
        else if (style.contains('decrease')){
            cout--
        }
        else{
            cout = 0;
        }
        count.textContent = cout;

        if (cout < 0){
            count.style.color = 'green';
        }
        if(cout == 0){
            count.style.color = '#000';
        }
        if(cout > 0){
            count.style.color = 'red';
        }
    })
})