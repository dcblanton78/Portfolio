(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.addEventListener('DOMContentLoaded', function () {
        document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
    })
})();



document.addEventListener('DOMContentLoaded', function () {
    document.querySelector(".submit-btn").addEventListener("click", () => {
    console.log("Made it");
    event.preventDefault();
    postToGoogle();
    })
})



function postToGoogle() {
  
    //const field1 = document.getElementById('nameField');
    var field1 = $("#nameField").val();
    var field2 = $("#emailField").val();
    var field3 = $("#subjectField").val();
    var field4 = $("#messageField").val();
    fieldValidations();
    if(fieldValidations()==false){
        console.log("field validations are false")
        return;
    }
   
    //const field1_5 = field1.value;
    console.log("here is the value of field1: " + field1);
    console.log("here is the value of field2:" + field2);
    console.log("here is the value of field3: " +field3);
    console.log("here is the value of field4: " +field4)
    
 
     
  


    

    $.ajax({
        url: "https://docs.google.com/forms/d/e/1FAIpQLSfhuwHnoEzBrzEZ5D146avt9uw8rhAwgmEZ29ZkSwQbvBtJng/formResponse?",
        data: {"entry.1130294729": field1, "entry.501856560": field2, "entry.1826222236": field3, "entry.1331658504": field4},
        type: "POST",
        dataType: "xml",
        success: function(d)
        {
           
        },
        error: function(x, y, z)
            {
                document.getElementById("outcome-msg").innerHTML = "Thank you for your message. I'll get back to you as soon as I can!!";
                $('#outcome-msg').show();
                $('#form').hide();
                
            }
    });

    function fieldValidations(){
        if(field1 == ""){
            //alert('Please Fill Your Name');
            document.getElementById("outcome-msg").innerHTML = "Please enter your name!";
            $('#outcome-msg').show();
            document.getElementById("nameField").focus();
            return false;
        }
        if(field2 == ""){
            document.getElementById("outcome-msg").innerHTML = "Please enter an email address!";
            $('#outcome-msg').show();
            document.getElementById("emailField").focus();
            return false;
        }
        if(field2.includes("@")==false){
            document.getElementById("outcome-msg").innerHTML = "Please enter a valid email address!";
            $('#outcome-msg').show();
            document.getElementById("emailField").focus();
            return false;
        }
        if(field3 == ""){
            document.getElementById("outcome-msg").innerHTML = "Please enter a Subject!";
            $('#outcome-msg').show();
            document.getElementById("subjectField").focus();
            return false;
        }
        if(field4 == ""){
            document.getElementById("outcome-msg").innerHTML = "Please enter your message!";
            $('#outcome-msg').show();
            document.getElementById("messageField").focus();
            return false;
        }
        else return true;

    }
  
   // alert("Thank you for your message. I'll get back to you as soon as I can");
    //debugger;
   
      
     

    return false;
    
}






// const sections = document.querySelectorAll('.section');
// const sectBtns = document.querySelectorAll('.controls');
// const sectBtn = document.querySelectorAll('.control');
// const allSections = document.querySelector('.main-content');

// pageTransitions();

// function pageTransitions (){
//     //button click active class
//     for (let i = 0; i < sectBtn.length; i++){
//         sectBtn[i].addEventListener('click', function(){
//             let currentBtn = document.querySelectorAll('.active-btn');
//             currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
//             this.className += ' active-btn';
//         })

//     }
//     //sections active class
//     allSections.addEventListener('click', (e) =>{
//         const id = e.target.dataset.id;
//         if(id){//remove selected from the other button
//             sectBtn.forEach((btn) => {
//                 btn.classList.remove('active')
//                 console.log("You pressed the button!!")
//             })
//             e.target.classList.add('active')
            

//             //hide other sections
//             sections.forEach((section)=>{
//                 section.classList.remove('active')
//             })
//             const element = document.getElementById(id);
//             element.classList.add('active');
//         }
//     })
// }

// document.querySelector(".theme-btn").addEventListener("click", () => {
//     document.body.classList.toggle("light-mode");
// })


//   if(field1 == ""){
//         alert('Please Fill Your Name');
//         document.getElementById("nameField").focus();
//         return false;
//     }
//     if(field2 == ""){
//         alert('Please Fill Your Email');
//         document.getElementById("emailField").focus();
//         return false;
//     }
//     if(field3 == "" || field3.length > 10 || field3.length < 10){
//         alert('Please Fill Your Mobile Number');
//         document.getElementById("mobField").focus();
//         return false;
//     }


