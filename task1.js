// Write a program to determine if a string contains all unique characters. Returns true if it does and false otherwise.
// The string may contain any of 128 ascii characters.
// So here i have created a function expression, because i am saving the value of this in a variable which
// is called hasUniqueChars.
// This function takes a parameter s which is type of string,  and the return type is boolean, so this specifices
// that this function return the value which can be true or false.
// the aim of this is to determine if all characters in the string 's' are unique.
const hasUniqueChars = (s) => {
    const charSet = new Set();
    //store unique values of any type
    // chartSet is an instance of the Set object, which stores only unique values.
    // so each character will be checked against this Set to see if it is already been seen.
    for (let character of s) {
        // iterate over each character in the string s 
        // character is the variable that i have declare for this for of loop, in each iteration the character
        // will hold the current element, so in this case the element from the string s.
        // the s is the string that i have passed as an argument to this function.
        if (charSet.has(character)) {
            // @returns — a boolean indicating whether an element with the specified value exists in the Set or not.
            return false;
            //  checks if char already exists in charSet, if it exists it return false 
        }
        charSet.add(character);
        // If char wasn’t already in charSet, it’s added to the set.
        // so this ensure that the charset will contain only unique characters, and will return true if all the characters are unique.
    }
    return true;
};
// THIS IS USED TO EXPORT A SINGLE VALUE FROM A MODULE IN THIS CASE THIS METHOD, so this is used
// to export functions, classes, etc..
// export default hasUniqueChars;
// Using assert from Chai provides a way to write assertions in 
// tests, making it easier to verify that the code behaves as expected.
console.log(hasUniqueChars("hello wolrd"));
// const testValues= new Set();
// testValues.add('1');
// testValues.add('1');
// testValues.add('2');
// testValues.add('3');
// console.log(testValues)
