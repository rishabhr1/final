function polybiusEncrypt(plainText) {
    const polybiusSquare = [
        ["A", "B", "C", "D", "E"],
        ["F", "G", "H", "I", "K"],
        ["L", "M", "N", "O", "P"],
        ["Q", "R", "S", "T", "U"],
        ["V", "W", "X", "Y", "Z"],
    ];

    let encryptedText = "";
    plainText = plainText.toUpperCase();
    for (let i = 0; i < plainText.length; i++) {
        let char = plainText.charAt(i);
        if (char === "J") char = "I"; // treat 'J' as 'I'
        if (char >= "A" && char <= "Z") {
            for (let row = 0; row < 5; row++) {
                for (let col = 0; col < 5; col++) {
                    if (polybiusSquare[row][col] === char) {
                        encryptedText +=
                            (row + 1).toString() + (col + 1).toString();
                        break;
                    }
                }
            }
        } else {
            encryptedText += char;
        }
    }
    return encryptedText;
}

export default polybiusEncrypt;