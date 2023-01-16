// const morseToNumbers = (morse) => {
//   let dot = 10;
//   let dash = 11;
//   let result = '';
//   if (morse.length < 5) {
//     morse = '0'.repeat(5 - morse.length) + morse;
//   }

//   let morseArr = morse.split('');
//   morseArr.forEach(element => {
//     if (element === '.') {
//       result += dot;
//     } else if (element === '-') {
//       result += dash;
//     } else
//       result += '00';
//   });
//   return result;
// }

// const morseAlphabet = [
//   '.-', '-...', '-.-.', '-..',
//   '.', '..-.', '--.', '....',
//   '..', '.---', '-.-', '.-..',
//   '--', '-.', '---', '.--.',
//   '--.-', '.-.', '...', '-',
//   '..-', '...-', '.--', '-..-',
//   '-.--', '--..', '.----', '..---',
//   '...--', '....-', '.....', '-....',
//   '--...', '---..', '----.', '-----'
// ];


function decode(expr) {

    const alphabet = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g',
        'h', 'i', 'j', 'k', 'l', 'm', 'n',
        'o', 'p', 'q', 'r', 's', 't', 'u',
        'v', 'w', 'x', 'y', 'z', '1', '2',
        '3', '4', '5', '6', '7', '8', '9',
        '0', ' '
    ];

    const morseToNumbersAlphabet = [
        '0000001011', '0011101010', '0011101110',
        '0000111010', '0000000010', '0010101110',
        '0000111110', '0010101010', '0000001010',
        '0010111111', '0000111011', '0010111010',
        '0000001111', '0000001110', '0000111111',
        '0010111110', '0011111011', '0000101110',
        '0000101010', '0000000011', '0000101011',
        '0010101011', '0000101111', '0011101011',
        '0011101111', '0011111010', '1011111111',
        '1010111111', '1010101111', '1010101011',
        '1010101010', '1110101010', '1111101010',
        '1111111010', '1111111110', '1111111111', '**********'
    ]

    let result = '';

    for (let i = 0; i < expr.length; i += 10) {
        let word = expr.slice(i, i + 10);
        result += alphabet[morseToNumbersAlphabet.findIndex(item => item === word)];
    }
    return result
}

module.exports = {
    decode
}