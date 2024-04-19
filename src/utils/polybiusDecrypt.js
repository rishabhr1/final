function polybiusDecrypt(encryptedText) {
    const polybiusSquare = [
        ["A", "B", "C", "D", "E"],
        ["F", "G", "H", "I", "K"],
        ["L", "M", "N", "O", "P"],
        ["Q", "R", "S", "T", "U"],
        ["V", "W", "X", "Y", "Z"],
    ];

    let decryptedText = "";
    for (let i = 0; i < encryptedText.length; i += 2) {
        let row = parseInt(encryptedText.charAt(i), 10) - 1;
        let col = parseInt(encryptedText.charAt(i + 1), 10) - 1;
        if (row >= 0 && row < 5 && col >= 0 && col < 5) {
            decryptedText += polybiusSquare[row][col];
        } else {
            decryptedText += encryptedText.charAt(i);
            i--;
        }
    }
    return decryptedText;
}

export default polybiusDecrypt;