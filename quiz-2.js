
setTimeout(()=>{
    let loader1 = document.getElementById('loader1')
    loader1.style.display = 'none'
    
    let mainCont = document.getElementById('mainCont')
    mainCont.style.display = 'block'
    },1000)
    
function final_login() {
    event.preventDefault();
    var name = document.getElementById('name').value
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value

    var firstname = localStorage.getItem('firstname')
    var email1 = localStorage.getItem("email")
    var pass1 = localStorage.getItem("pass")
    console.log(email1);
    console.log(pass1);

    console.log(firstname);
    if(firstname === name){
        if(email===email1){
            if(password===pass1){
                let loader1 = document.getElementById('loader1')
                loader1.style.display = 'block'
                
                let mainCont = document.getElementById('mainCont')
                mainCont.style.display = 'none'
                setTimeout(()=>{
                    let loader1 = document.getElementById('loader1')
                    loader1.style.display = 'none'
                    
                    let mainCont = document.getElementById('mainCont')
                    mainCont.style.display = 'block'
                    },1500)
                    window.location = "cousres.html"
            }else{
                swal("error", "Invalid Password", "error");
                // swal("Invalid Password ,error")
            }

        }else{
            swal("error", "Invalid email", "error");
            // swal("Invalid Email,error")   
        }

    }else{
        swal("error", "Invalid name", "error");
        // swal("Invalid Name,error")
    }
    document.getElementById('name').innerHTML= ""
    document.getElementById('email').innerHTML= ""
     document.getElementById('password').innerHTML= ""
    

}

function creat_acc() {
    event.preventDefault();
    var lgn = document.getElementById('crt_acc');
    lgn.style.display = 'block'
    var crt = document.getElementById('creat')
    crt.style.display = 'none'
}
function login() {

    event.preventDefault();

    var full_firstname = document.getElementById('first_reg').value
    var full_lastname = document.getElementById('last_reg').value
    var full_email = document.getElementById('email_reg').value
    var full_pass = document.getElementById('pass_reg').value

    localStorage.setItem('firstname', full_firstname)
    localStorage.setItem('lastname', full_lastname)
    localStorage.setItem('email', full_email)
    localStorage.setItem('pass', full_pass)

    var email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(full_email)
    var pass = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(full_pass)

    if(full_firstname){
        if(full_lastname){
            if(full_email){
                if (full_pass) {
                    
                    let loader1 = document.getElementById('loader1')
                    loader1.style.display = 'block'
                    
                    let mainCont = document.getElementById('mainCont')
                    mainCont.style.display = 'none'
                    setTimeout(()=>{
                        let loader1 = document.getElementById('loader1')
                        loader1.style.display = 'none'
                        
                        let mainCont = document.getElementById('mainCont')
                        mainCont.style.display = 'block'
                    },1500)
                 

                    window.location = "index2.html"
                }else{
                    swal("error", "please enter Password", "error");
                    // swal("please enter Password")
                }
               
            }else{
                swal("error", "please enter email", "error");
            }

        }else{
            swal("error", "please enter last name", "error");
            // swal("please enter Last Name")   
        }

    }else{
        swal("error", "please enter first name", "error");
        // swal("please enter First Name")
    }
    // let loader1 = document.getElementById('loader1')
    // loader1.style.display = 'block'
    
    // let mainCont = document.getElementById('mainCont')
    // mainCont.style.display = 'none'
    // setTimeout(()=>{
    //     let loader1 = document.getElementById('loader1')
    //     loader1.style.display = 'none'
        
    //     let mainCont = document.getElementById('mainCont')
    //     mainCont.style.display = 'block'
    // },1500)
    
}





