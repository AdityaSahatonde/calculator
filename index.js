let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
// let close1 = document.getElementById("close1");
let main = document.getElementById("main");
let img = document.querySelector('img');
let img1 = document.getElementById("img1");
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        // console.log('Button text is ', buttonText);
        if (buttonText == '*') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'AC') {
            screenValue = "";
            screen.value = '';
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
            screenValue =screen.value;
        }
        else if(buttonText=='del'){
           
                screenValue = screen.value.toString().slice(0, -1);
                screen.value = screenValue;
           
        }
        else if(buttonText=='x'){

            main.style.visibility='hidden';
            // img.style.display='flex';
            img.style.visibility='visible';
            

        }
        else if(buttonText=='√'){

            screenValue = Math.sqrt(screen.value);
            screen.value = screenValue;
            
        }
   
        else {
            // if(buttonText==='.'&&screenValue.includes('.')) return;
            screenValue += buttonText;
            screen.value = screenValue;
        }


    })
}
img1.addEventListener('click',function(){
    img.style.visibility='hidden';
    main.style.visibility='visible';
})


