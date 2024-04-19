function vigenereDecrypt(encryptedText, key) {
    let decryptedText = "";
    if (encryptedText && key) {
        encryptedText = encryptedText.toUpperCase();
        key = key.toUpperCase();
        for (let i = 0, j = 0; i < encryptedText.length; i++) {
            let charCode = encryptedText.charCodeAt(i);
            if (charCode >= 65 && charCode <= 90) {
                decryptedText += String.fromCharCode(
                    ((charCode - key.charCodeAt(j) + 26) % 26) + 65
                );
                j = (j + 1) % key.length;
            } else {
                decryptedText += encryptedText.charAt(i);
            }
        }
        return decryptedText;
    } else {
        console.log("undefined");
    }
}

export default vigenereDecrypt;