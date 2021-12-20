/*Complete the isPositive function below. It has one integer parameter a . If the value of a is positive, it must
return the string YES. Otherwise, it must throw an Error according to the following rules:
. If a is 0, throw an Error with message = Zero Error.
. If a is negative, throw an Error with message = Negative Error.*/


const isPositive = function(a) {
    try {
        if (a > 0) {
            console.log("Yes")
        } else if (a === 0) {
            throw "Zero Error"
        } else if (a < 0) {
            throw "Negative Error"
        } else {
            throw `${a} is not a number`
        }
    } catch (error) {
        console.log(error)
    }
}

isPositive(8)