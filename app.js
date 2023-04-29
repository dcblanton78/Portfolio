(function () {
  [...document.querySelectorAll(".control")].forEach((button) => {
    button.addEventListener("click", function () {
      document.querySelector(".active-btn").classList.remove("active-btn");
      this.classList.add("active-btn");
      document.querySelector(".active").classList.remove("active");
      document.getElementById(button.dataset.id).classList.add("active");
    });
  });
  const el = document.querySelector(".theme-btn");
  if (el) {
    document.querySelector(".theme-btn").addEventListener("click", () => {
      document.body.classList.toggle("light-mode");
    });
  }
})();

//const formSubmit = document.querySelector('.submit-btn');
const submitBtn = document.querySelector(".submit-btn");
if (submitBtn) {
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    postToGoogle();
  });
}
// document.querySelector(".submit-btn").addEventListener("click", () => {
//   console.log("Made it");
//   event.preventDefault();
//   postToGoogle();
// });

function postToGoogle() {
  //const field1 = document.getElementById('nameField');
  var field1 = $("#nameField").val();
  var field2 = $("#emailField").val();
  var field3 = $("#subjectField").val();
  var field4 = $("#messageField").val();
  let fieldErrorFlag = fieldValidations(field1, field2, field3, field4);
  console.log("test: " + fieldErrorFlag);
  if (fieldErrorFlag == false) {
    console.log("field validations are false");
    return;
  }

  //const field1_5 = field1.value;
  console.log("here is the value of field1: " + field1);
  console.log("here is the value of field2:" + field2);
  console.log("here is the value of field3: " + field3);
  console.log("here is the value of field4: " + field4);

  $.ajax({
    url: "https://docs.google.com/forms/d/e/1FAIpQLSfhuwHnoEzBrzEZ5D146avt9uw8rhAwgmEZ29ZkSwQbvBtJng/formResponse?",
    data: {
      "entry.1130294729": field1,
      "entry.501856560": field2,
      "entry.1826222236": field3,
      "entry.1331658504": field4,
    },
    type: "POST",
    dataType: "xml",
    success: function (d) {},
    error: function (x, y, z) {
      document.getElementById("outcome-msg").innerHTML =
        "Thank you for your message. I'll get back to you as soon as I can!!";
      $("#outcome-msg").show();
      $("#form").hide();
    },
  });
}

function fieldValidations(field1, field2, field3, field4) {
  if (field1 == "") {
    const outcomeMsg = document.getElementById("outcome-msg");
    if (outcomeMsg) {
      outcomeMsg.innerHTML = "Please enter your name!";
      $("#outcome-msg").show();
    }
    const nameField = document.getElementById("nameField");
    if (nameField) {
      nameField.focus();
    }
    return false;
  }
  if (field2 == "") {
    const outcomeMsg = document.getElementById("outcome-msg");
    if (outcomeMsg) {
      outcomeMsg.innerHTML = "Please enter an email address!";
      $("#outcome-msg").show();
    }
    const emailField = document.getElementById("emailField");
    if (emailField) {
      emailField.focus();
    }
    return false;
  }
  if (field3 == "") {
    const outcomeMsg = document.getElementById("outcome-msg");
    if (outcomeMsg) {
      outcomeMsg.innerHTML = "Please enter a subject!";

      $("#outcome-msg").show();
    }
    const subjectField = document.getElementById("subjectField");
    if (subjectField) {
      subjectField.focus();
    }
    return false;
  }
  if (field4 == "") {
    const outcomeMsg = document.getElementById("outcome-msg");
    if (outcomeMsg) {
      outcomeMsg.innerHTML = "Please enter a message!";
      $("#outcome-msg").show();
    }
    const messageField = document.getElementById("messageField");
    if (messageField) {
      messageField.focus();
    }
    return false;
  }
  const field2a = field2;
  if (field2a) {
    if (field2.includes("@") == false) {
      const outcomeMsg = document.getElementById("outcome-msg");
      if (outcomeMsg) {
        outcomeMsg.innerHTML = "Please enter a valid email address!";
        $("#outcome-msg").show();
      }
      const emailField = document.getElementById("emailField");
      if (emailField) {
        emailField.focus();
      }
      return false;
    } else return true;
  }
  //return true;
}

if (typeof module !== "undefined") {
  module.exports = fieldValidations;
}

//modifying file again
