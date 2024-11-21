// let user = {
//     "media_id": 1,
//     "full_name": "Rohaan",
//     "pic_profile": {
//         "person_name": "rohaan",
//         "path": "http//happy.com",
//         "media":{
//             "media_Filename": "thisisPic",
//             "type":{
//                 "mediaType": "pdf"
//             }
//         }
//     },
//     "age": 27
// }

// function func(user){
//     Object.entries(user).forEach(([key, value]) => {
//         if (typeof value === 'object' && !Array.isArray(value)) {
//             func(value);
//         }
//         else{
//         console.log("keys:", key,",", "values:", value);
//         }
//     });
// }

// func(user);




/////////////////////////////////////////////////////////////////////////////////////
//// Saqlain Bhai test
//         1
//        1 1 
//       1 2 1
//      1 3 3 1 
//     1 4 6 4 1
//    1 6 1 0 5 1
//   1 7 7 1 5 6 1
//  1 9 4 8 7 1 7 1

// 11 power pyramid
// as
// num1 = 121
// mod = num1 % 10: 1
// num = num / 10 : 12
// first line will have 8 spaces before it.
// then the next line will have decrement in the space
// than as we get answer 11 power 2 = 121 so make parts of it and brake it and make print one part than space than one part than space and soo on like 121 will be 1 2 1

// function pyramid (levels) {
//     for (let power = 0; power < levels; power++) {
//         // Compute 11(pow)power
//         let value = Math.pow(11, power);  //number is 11 and power is iterated
//         let valueWithSpaces = Array.from(value.toString())
//             .join(" ");

//         // Calculate spaces for formatting
//         let spaces = levels - power - 1;
//         let spaceStr = " ".repeat(spaces);


//         // Print the line
//         console.log(spaceStr + valueWithSpaces); //firstly spaces
//     }
// }
// let pyramidLevels = 8;
// pyramid(pyramidLevels);

//this is ok, but dont use the built in functions 
//do two things 
//first take mod of value 
//than parseInt(value/10)
//than print the mod value if mod is not equal to 0
// and dont use repeat use loop for it to print the space first
// the output will be spaces comes from loop than mod values until they are not equal to 0 than the value which is digit not greater than 9
function pyramid(levels) {
    for (let power = 0; power < levels; power++) {
        let value = Math.pow(11, power); // Calculate 11(pow)power

        //spaces
        let spaces = levels - power - 1;
        let spaceStr = "";
        for (let i = 0; i < spaces; i++) {
            spaceStr += " ";
        }

        // Extract digits from value using mod and division
        let digits = [];
        while (value > 0) {
            let digit = value % 10; // Get the mod of digit
            digits.push(digit);
            value = parseInt(value / 10);
        }
        digits.reverse(); // Reverse to maintain the correct order

        // Convert digits array to a space-separated string
        let valueWithSpaces = "";
        for (let i = 0; i < digits.length; i++) {
            valueWithSpaces += digits[i];
            if (i < digits.length - 1) {
                valueWithSpaces += " ";
            }
        }

        // Print the formatted line
        console.log(spaceStr + valueWithSpaces);
    }
}

let pyramidLevels = 8;
pyramid(pyramidLevels);