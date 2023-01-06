const form = document.getElementById('form');
    const user = document.getElementById('fname');;
    const email = document.getElementById('email');
    const mesg = document.getElementById('pass');
    const lname = document.getElementById('lname');


    
    
    const setError =(el,sms) =>{
        const inputControl = el.parentElement;
        const errorDisplay = inputControl.querySelector(".error");

        errorDisplay.innerText = sms;
        errorDisplay.classList.add("error");
        inputControl.classList.remove("success");
    }
    
    const setSucc = Element =>{
        const inputControl = Element.parentElement;
        const errorDisplay = inputControl.querySelector(".error");
        
        if (errorDisplay != null) {
            errorDisplay.innerText = " ";
            errorDisplay.classList.remove("error");
            inputControl.classList.add("success");
        }
        
    }
    const  checkEmail =(email)=> {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    
    const validatInputs = () =>{
        const userValue = user.value.trim();
        const emailValue = email.value.trim();
        const msgValue = mesg.value.trim();
        const lnameValue = lname.value.trim();
        
        if(userValue === ''){
            setError(user, "First name is Required*");
        }
        else{
            setSucc(user);
        }
        if(lnameValue === ''){
            setError(lname, "Last name is Required*");
        }
        else{
            setSucc(lname);
        }
        if(msgValue === ''){
            setError(mesg, "Your message is Required*");
        }
        else{
            setSucc(mesg);

        }
        if(emailValue === ''){
            setError(email, "Email is Required*");
        }
        else if(!checkEmail(emailValue)){
            setError(email, "Provide valid Email Address*");
        }
        else{
            setSucc(email);
        }
        
        
        
    };

    form.addEventListener('submit', (e) =>{
        e.preventDefault();
    
        validatInputs();
    });