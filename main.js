// Task 1 ------------- Validate Function Parameters Count
// function checkTwoParams(a, b){
//     if(arguments.length==2){
//         console.log("parameters are: ", a , b )
//     }else {
//         throw new Error ( "it must be 2 parameters")
//     }
// }
// try{
//     checkTwoParams(1,1);
//     checkTwoParams(1);
//     checkTwoParams(1,2,2);
// }catch(error){
//     console.error(error.message)
// }



// Task  ------------- Sum Numerical Values
// let sum = 0
// function addNumbers(){
//     for(i=0; i<arguments.length; i++){
//         if(typeof arguments[i]!=="number"){
//             throw new Error ("just numbers");
//         }
//             sum+=arguments[i]
//         }
//     return sum;
// }
// try{
//     console.log(addNumbers(5,3,6,20))
//     console.log(addNumbers(5,3,"a"))

// }catch(error){
//     console.error(error)
// }
let parameters = [];
function reverseParams() {
    parameters = Array.from(arguments);
    console.log("Array", parameters);
    revparam = parameters.reverse();
    console.log("Reversed Array", revparam);
    return
}
reverseParams(2, 5, 3, 8, 1)