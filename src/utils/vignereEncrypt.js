function vigenereEncrypt(plainText, key) {
    let encryptedText = "";
    plainText = plainText.toUpperCase();
    key = key.toUpperCase();
    for (let i = 0, j = 0; i < plainText.length; i++) {
        let charCode = plainText.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            encryptedText += String.fromCharCode(
                ((charCode + key.charCodeAt(j) - 130) % 26) + 65
            );
            j = (j + 1) % key.length;
        } else {
            encryptedText += plainText.charAt(i);
        }
    }
    return encryptedText;
}

export default vigenereEncrypt;