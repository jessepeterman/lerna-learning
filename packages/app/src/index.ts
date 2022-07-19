import convertToString, { convertToUndefined } from 'converter'

// function convertToString(item) {
//     return itemnode
// }

function run() {
    const number = 26
    console.log(`Running app -> ${convertToString({ element: 30 })}`)
    const string = 89
    console.log(`Converting string ${string} to undefined: ${convertToUndefined(string)}`)
}

run()