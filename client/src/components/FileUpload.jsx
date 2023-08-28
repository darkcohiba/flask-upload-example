import { useState } from "react";

function FileUpload() {
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState('');
    const imageExt = '/src/assets/static'

    function replaceSpacesWithDashes(str) {
        return str.replace(/ /g, '_');
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(file)

        if (!file) {
            setMessage('Please select a file first.');
            return;
        }

        const formData = new FormData();
        formData.append('photo', file);

        try {
            const response = await fetch('http://localhost:5000/upload', {
                method: 'POST',
                body: formData
            });

            const data = await response.json();

            if (response.status === 201) {
                setMessage(data.message);
            } else {
                setMessage(data.error);
            }

        } catch (error) {
            setMessage('An error occurred while uploading the file.');
        }

        fetch("http://localhost:3000/images", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "fileName": imageExt+ "/" + replaceSpacesWithDashes(file.name)
            })
        })
        .then(response => response.json())
        .then(data => console.log(data))
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setFile(e.target.files[0])}
                />
                <button type="submit">Upload</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default FileUpload;