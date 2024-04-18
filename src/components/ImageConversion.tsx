import {useState} from "react";

export function ImageConversion() {
    const [image, setImage] = useState("");

    function base64(e) {
        console.log(e);
        let reader = FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onLoad = () => {
            console.log(reader.result);
            setImage(reader.result);
        }
    }
}
