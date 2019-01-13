// Problem 4
// Create a function called checkPassword. Send two string variables to the checkPassword function to check if the strings are equal.
// Return true if they are equal and false if they are not equal. Print the function's return value.

password = prompt ("Please enter password")
password2 = prompt ("please enter 2nd password")

function checkPassword() {

    if (password === password2)
        return true;

    else return false;
}


console.log (checkPassword())