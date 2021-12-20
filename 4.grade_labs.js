/*A teacher has created a gradeLabs function that verifies if student programming labs work. This function
loops over an array of JavaScript objects that should contain a student property and runLab property.
The runLab property is expected to be a function containing the student's code. The runLab function is
called and the result is compared to the expected result. If the result and expected results don't match,
then the lab is considered a failure.*/


const gradeLabs = function (array) {
    try {
        for (i = 0; i < array.length; i++) {
            let object = array[i]
            let res = object.runLab(4)
            console.log(`${object.student}: ${res === 16}`)   
        }
    } catch (error) {
        console.log(`Error thrown`)
    }
    
};

let studentLabs2 = [
    {
    student: "Blake",
    myCode: function (num) {
    return Math.pow(num, num);
        },
    },
    {
    student: "Jessica",
    runLab: function (num) {
    return Math.pow(num, num);
        },
    },
    {
    student: "Mya",
    runLab: function (num) {
    return num * num;
        },
    },
];

gradeLabs(studentLabs2)