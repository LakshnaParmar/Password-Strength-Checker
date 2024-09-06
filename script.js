let input = document.getElementById('input-password');
let output = document.getElementById('output-show');

input.addEventListener('input' , function() {
    console.log(input.value);
    let inputValue = input.value;


    if (inputValue.search(/[A-Z]/) == -1)  {
        output.innerHTML = 'The password requires a upper case letter';
        output.style.color = 'red';
    } else if(inputValue.search(/[a-z]/) == -1){
        output.innerHTML = 'The password requires a lower case letter';
        output.style.color = 'red';
    }else if (inputValue.search(/[0-9]/) == -1) {
            output.innerHTML = 'The password requires a number';
            output.style.color = 'red';  
    }else if (inputValue.search(/[\!\@\#\$\%\^\&\*\(\)\[\]\{\}\;\:\'\"\,\<\.\>\/\?\|\\\`\~\_\-]/) == -1) {
            output.innerHTML = 'The password requires a special character';
            output.style.color = 'red';  
    }else if (inputValue.length < 8) {
        output.innerHTML = 'Password should be 8 characters';
        output.style.color = 'red';  
}else{
            output.innerHTML = 'password is strong';
            output.style.color = 'green';  
    }

});


