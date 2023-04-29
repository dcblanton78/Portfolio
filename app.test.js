const fieldValidations = require("./app.js");

const outcomeMsg = document.getElementById("outcome-msg");
const nameField = document.getElementById("nameField");
const subjectField = document.getElementById("subjectField");
const emailField = document.getElementById("emailField");
const messageField = document.getElementById("messageField");
describe("fieldValidations function", () => {
  beforeEach(() => {
    // reset the outcome message and field values before each test
    // if (outcomeMsg) {
    //   outcomeMsg.innerHTML = "";
    // }
    // // document.getElementById("outcome-msg").innerHTML = "";
    // if (nameField) {
    //   nameField.value = "";
    // }
    // if (emailField) {
    //   emailField.value = "";
    // }
    // if (subjectField) {
    //   subjectField.value = "";
    // }
    // if (messageField) {
    //   messageField.value = "";
    // }
    // document.getElementById("emailField").value = "";
    // document.getElementById("subjectField").value = "";
    // document.getElementById("messageField").value = "";
  });

  test("should return false if name field is empty", () => {
    const result = fieldValidations("", emailField, subjectField, messageField);

    expect(result).toBe(false);
    const outcomeMsg = document.getElementById("outcome-msg");
    if (outcomeMsg) {
      expect(outcomeMsg.innerHTML).toBe("Please enter your name!");
    }
    const nameField = document.getElementById("nameField");
    if (nameField) {
      expect(nameField.focus()).toBe(true);
    }
  });
  test("should return false if email field is empty", () => {
    const result = fieldValidations(nameField, "", subjectField, messageField);
    expect(result).toBe(false);
    const outcomeMsg = document.getElementById("outcome-msg");
    if (outcomeMsg) {
      expect(outcomeMsg.innerHTML).toBe("Please enter an email address!");
    }
    const emailField = document.getElementById("emailField");
    if (emailField) {
      expect(emailField.focus()).toBe(true);
    }
  });

  test("should return false if subject field is empty", () => {
    const result = fieldValidations(nameField, emailField, "", messageField);
    expect(result).toBe(false);
    const outcomeMsg = document.getElementById("outcome-msg");

    if (outcomeMsg) {
      expect(outcomeMsg.innerHTML).toBe("Please enter a subject!");
    }
    const subjectField = document.getElementById("subjectField");
    if (subjectField) {
      expect(subjectField.focus()).toBe(true);
    }
  });

  test("should return false if message field is empty", () => {
    const result = fieldValidations(nameField, emailField, subjectField, "");
    expect(result).toBe(false);
    const outcomeMsg = document.getElementById("outcome-msg");
    if (outcomeMsg) {
      expect(outcomeMsg.innerHTML).toBe("Please enter a message!");
    }
    const messageField = document.getElementById("messageField");
    if (messageField) {
      expect(messageField.focus()).toBe(true);
    }
  });
  test("should return false if email field does not contain @ symbol", () => {
    // set email field value to invalid email address
    const emailField = document.getElementById("emailField");
    if (emailField) {
      emailField.value = "invalid-email";
    }
    const result = fieldValidations(
      nameField,
      "invalid-email",
      subjectField,
      messageField
    );

    expect(result).toBe(false);
    const outcomeMsg = document.getElementById("outcome-msg");
    if (outcomeMsg) {
      expect(outcomeMsg.innerHTML).toBe("Please enter a valid email address!");
    }
    const emailField2 = document.getElementById("emailField");
    if (emailField2) {
      expect(emailField2.focus()).toBe(true);
    }
  });
});
