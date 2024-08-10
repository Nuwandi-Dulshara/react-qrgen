import QRCode from 'qrcode'; //This imports the qrcode library, which provides methods for generating QR codes.
import { useState } from 'react';

function App() {
    const [url, setUrl] = useState(''); /*url: This state variable stores the URL input by the user. 
    It's initially set to an empty string.setUrl: This function updates the url state.*/
    const [qr, setQr] = useState(''); /*qr: This state variable stores the generated QR code's
     data URL (a base64-encoded image).*/

    const GenerateQRCode = () => {
        QRCode.toDataURL(url, {/*This method from the qrcode library generates a QR code as a data
         URL (base64-encoded image). It takes the following parameters
         The URL entered by the user that will be encoded into the QR code.*/
            width: 700,
            margin: 2,
            color: {
                dark: '#000000', //The color of the dark squares.
                light: '#ffffff' //The color of the light background.
            }
        }, (err, url) => { //If an error occurs, it's logged to the console.,
            if (err) return console.error(err);
            console.log(url);
            setQr(url); /*If successful, the generated QR code's data URL is 
            passed and stored in the qr state using setQr(url).*/
        });
    };

    return (
        <div className="app">
            <h1>QR Generator</h1>
            <div className="container">
                <input
                    type="text"
                    placeholder="Enter url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)} /*Updates the url state whenever the user 
                    types in the input field.*/
                />
                <button onClick={GenerateQRCode}>Generate</button>
                {qr && (
                    <>
                        <img src={qr} alt="QR Code"/>
                        <a href={qr} download="qrcode.png">Download</a>
                    </>
                )}
            </div>
        </div>
    );
}

export default App;
