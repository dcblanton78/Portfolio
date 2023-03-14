const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function pageTransitions (){
    //button click active class
    for (let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn'
        })

    }
    //sections active class
    allSections.addEventListener('click', (e) =>{
        const id = e.target.dataset.id;
        if(id){//remove selected from the other button
            sectBtn.forEach((btn) => {
                btn.classList.remove('active')
            })
            e.target.classList.add('active')
            postToGoogle();

            //hide other sections
            sections.forEach((section)=>{
                section.classList.remove('active')
            })
            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })
}

function postToGoogle() {
  
    const field1 = document.getElementById('nameField');
    const field1_5 = field1.value;
    console.log("I'm here: " + field1_5)
    // const field2 = document.getElementById("emailField");
    // const field3 = document.getElementById("subjectField");
    // const field4 = document.getElementById("messageField");
    // const field1 = "Clay"
    // const field2 = "dcblanton78@gmail.com"
    // const field3 = "Hello"
    // const field4 = "World"
    // console.log("Name:" + field1);
    // // console.log("Name 2: " + field1.value)
    // // console.log("Email:" + field2);
    // // console.log("Subject:" + field3);
    // // console.log("Message" + field4);
    // // var field1 = $("#nameField").val();
    // // var field2 = $("#emailField").val();
    // // var field3 = $("#subjectField").val();
    // // var field4 = $("#messageField").val();
     
    // // if(field1 == ""){
    // //     alert('Please Fill Your Name');
    // //     document.getElementById("nameField").focus();
    // //     return false;
    // // }
    // // if(field2 == ""){
    // //     alert('Please Fill Your Email');
    // //     document.getElementById("emailField").focus();
    // //     return false;
    // // }
    // // if(field3 == "" || field3.length > 10 || field3.length < 10){
    // //     alert('Please Fill Your Mobile Number');
    // //     document.getElementById("mobField").focus();
    // //     return false;
    // // }


    

    // $.ajax({
    //     url: "https://docs.google.com/forms/d/e/1FAIpQLSfhuwHnoEzBrzEZ5D146avt9uw8rhAwgmEZ29ZkSwQbvBtJng/formResponse?",
    //     data: {"entry.1130294729": field1, "entry.501856560": field2, "entry.1826222236": field3, "entry.1331658504": field4},
    //     type: "POST",
    //     dataType: "xml",
    //     success: function(d)
    //     {
    //     },
    //     error: function(x, y, z)
    //         {

    //             $('#success-msg').show();
    //             $('#form').hide();
                
    //         }
    // });
    // return false;
}

pageTransitions();


