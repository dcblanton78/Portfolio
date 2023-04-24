# Portfolio

Google Sheet: https://script.google.com/macros/s/AKfycbzTZkkULKxvrP9KH7zQw4h9vjFtplokTCM5m9xR32SCWpwEhTuzWa0rsy1kmFPs26nomg/exec

https://api.apispreadsheets.com/data/rs2cGq5YARJF8aTD/

1130294729
501856560
1826222236
1331658504

#42424a

Adding tests

test("should return false if email field is empty", () => {
const result = fieldValidations();
expect(result).toBe(false);
expect(document.getElementById("outcome-msg").innerHTML).toBe(
"Please enter an email address!"
);
expect(document.activeElement.id).toBe("emailField");
});

test("should return false if email field does not contain @ symbol", () => {
// set email field value to invalid email address
document.getElementById("emailField").value = "invalid-email";
const result = fieldValidations();
expect(result).toBe(false);
expect(document.getElementById("outcome-msg").innerHTML).toBe(
"Please enter a valid email address!"
);
expect(document.activeElement.id).toBe("emailField");
});

test("should return false if subject field is empty", () => {
const result = fieldValidations();
expect(result).toBe(false);
expect(document.getElementById("outcome-msg").innerHTML).toBe(
"Please enter a Subject!"
);
expect(document.activeElement.id).toBe("subjectField");
});

test("should return false if message field is empty", () => {
const result = fieldValidations();
expect(result).toBe(false);
expect(document.getElementById("outcome-msg").innerHTML).toBe(
"Please enter your message!"
);
expect(document.activeElement.id).toBe("messageField");
});

test("should return true if all fields have valid values", () => {
// set all fields to valid values
document.getElementById("nameField").value = "John Doe";
document.getElementById("emailField").value = "johndoe@example.com";
document.getElementById("subjectField").value = "Test Subject";
document.getElementById("messageField").value = "Test Message";
const result = fieldValidations();
expect(result).toBe(true);
expect(document.getElementById("outcome-msg").innerHTML).toBe("");
});
});
