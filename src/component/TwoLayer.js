import React, { useState } from "react";
import vigenereEncrypt from "../utils/vignereEncrypt";
import vigenereDecrypt from "../utils/vignereDecrypt";
import polybiusDecrypt from "../utils/polybiusDecrypt";
import polybiusEncrypt from "../utils/polybiusEncrypt";

function TwoLayer() {
    const [message, setMessage] = useState("");
    const [key, setKey] = useState("");
    let vig_dec_text="";

    const submit = async (e) => {
        e.preventDefault();
        let vig_enc_text = vigenereEncrypt(message, key);
        console.log(vig_enc_text);
        let pol_enc_text = polybiusEncrypt(vig_enc_text);
        console.log(pol_enc_text);
        let pol_dec_text = polybiusDecrypt(pol_enc_text);
        console.log(pol_dec_text);
        vig_dec_text = vigenereDecrypt(pol_dec_text, key);
        console.log(vig_dec_text);
    };

    return (
        <div className="flex">
            <div className="bg-gray-900 pt-14 py-5 h-96 w-6/12">
                <form className="max-w-sm mx-auto" onSubmit={(e) => submit(e)}>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Your message
                    </label>
                    <textarea
                        id="message"
                        rows="4"
                        value={message}
                        onChange={(e) => {
                            setMessage(e.target.value);
                        }}
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Leave a message..."
                        required
                    ></textarea>
                    <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Your password
                        </label>
                        <input
                            type="text"
                            id="key"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            value={key}
                            onChange={(e) => {
                                setKey(e.target.value);
                            }}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Encrypt
                    </button>
                </form>
            </div>
            <div className="w-6/12">
                {vig_dec_text==""&&<p>Please enter text to encrypt...</p>}
            </div>
        </div>
    );
}

export default TwoLayer;
