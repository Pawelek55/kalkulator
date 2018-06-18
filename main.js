function showOnScreen(event /*pseudoparametr, kliknięcie*/){
    let container = document.getElementById('container');
    let screen = document.getElementById('screenContent');
    let screenValue = document.getElementById('screenContent').innerHTML;
    let checkEvent = event.target.innerText;
    
    if(event.target.className != 'button' && event.target == container) return;
    else if((screenValue == "" && checkEvent == '/') || (screenValue == "" && checkEvent == '+') || (screenValue == "" && checkEvent == '*') || (screenValue == "" && checkEvent == '%') || (screenValue == "" && checkEvent == '-') || (screenValue == "" && checkEvent == '=')) return;
    
    document.getElementById('screenContent').innerHTML += event.target.innerText;
    
     if(event.target.id == 'screenContent'){
        document.getElementById('screenContent').innerHTML = screenValue;
    }
    
    for(let i=0; i<document.getElementById('screenContent').innerHTML.length; i++){
       if(document.getElementById('screenContent').innerHTML[i-1] == '/' && document.getElementById('screenContent').innerHTML[i] == '0'){
           if(checkEvent == '='){
               console.log('Naciśnięty =');
               console.log(screenValue);
               if(checkEvent !== 'Del'){
                   console.log('Infinity');
                   document.getElementById('screenContent').innerHTML = 4545;
               }
           }
          
       } else if((document.getElementById('screenContent').innerHTML[i] == '/' || document.getElementById('screenContent').innerHTML[i] == '*' || document.getElementById('screenContent').innerHTML[i] == '-' || document.getElementById('screenContent').innerHTML[i] == '+' || document.getElementById('screenContent').innerHTML[i] == '%' || document.getElementById('screenContent').innerHTML[i] == '.') && (document.getElementById('screenContent').innerHTML[i+1] == '/' || document.getElementById('screenContent').innerHTML[i+1] == '*' || document.getElementById('screenContent').innerHTML[i+1] == '-' || document.getElementById('screenContent').innerHTML[i+1] == '+' || document.getElementById('screenContent').innerHTML[i+1] == '%' || document.getElementById('screenContent').innerHTML[i+1] == '=' || document.getElementById('screenContent').innerHTML[i+1] == '.' )){
           
           screen.innerHTML = screenValue;
       } else if((document.getElementById('screenContent').innerHTML[i] == '0') && (document.getElementById('screenContent').innerHTML[i+1] == '0' || screen.innerHTML[i+1] == '1' || screen.innerHTML[i+1] == '2' || screen.innerHTML[i+1] == '3' || screen.innerHTML[i+1] == '4' || screen.innerHTML[i+1] == '5' || screen.innerHTML[i+1] == '6' || screen.innerHTML[i+1] == '7' || screen.innerHTML[i+1] == '8' || screen.innerHTML[i+1] == '9' )){
           screen.innerHTML = screenValue;
       }
        
    }
    
        switch(event.target.innerHTML){
        case 'Del':   
            document.getElementById('screenContent').innerHTML = "";
            break;
            
        case '=':
            document.getElementById('screenContent').innerHTML = eval(screenValue);
            break;
        }
 }
    
document.getElementById('container').addEventListener('click', showOnScreen);

