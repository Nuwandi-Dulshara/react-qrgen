import QRCode from 'qrcode';
import { useState } from 'react';

function App() {
    const [url, setUrl] = useState('');
    const [qr, setQr] = useState('');

    const GenerateQRCode = () => {
        QRCode.toDataURL(url, {
            width: 700,
            margin: 2,
            color: {
                dark: '#000000',
                light: '#ffffff'
            }
        }, (err, url) => {
            if (err) return console.error(err);
            console.log(url);
            setQr(url);
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
                    onChange={(e) => setUrl(e.target.value)}
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
