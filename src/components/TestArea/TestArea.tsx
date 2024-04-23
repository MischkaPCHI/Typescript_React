import "./styles.css";
import { TestAreaProps } from "./types";

function TextArea({placeholder, name, label}: TestAreaProps) {
    return (
        <div className="text-area-container">
            <label>{label}</label>
            <textarea placeholder={placeholder} name={name}></textarea>
        </div>
    )
}

export default TextArea;