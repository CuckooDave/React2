import { FormField } from "./FormField";
import { useState } from "react";

const avatarImages = [
    '/avatars/char.png',
    '/avatars/abra.png',
    '/avatars/mew.png',
];


export function AvatarFormField(props) {
    const [index, setIndex] = useState(0);

    function addIndex() {

        if(index >= avatarImages.length -1) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    }

    function removeIndex() {
        
    
            if(index <= 0) {
                setIndex(avatarImages.length -1);
            } else {
                setIndex(index - 1);
            }

    }

    
    return (
        <FormField>
            <button type="button" onClick={removeIndex}>Previous</button>
            <img src={avatarImages[index]} width={100} height={100}/>
            <button type="button" onClick={addIndex}>Next</button>
        </FormField>
    )
}