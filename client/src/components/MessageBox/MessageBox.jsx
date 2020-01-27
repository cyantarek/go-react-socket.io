import React, {useState} from "react"
import TextField from "@material-ui/core/TextField";

function MessageBox(props) {
    const [message, setMessage] = useState("");

    return (
        <div className='messageBox'>
            <TextField fullWidth label="Message"
                       onChange={e => setMessage(e.target.value)}
                       onKeyDown={e => {
                           if (e.key === "Enter") {
                               e.preventDefault();
                               props.onSendMessage(message);
                               setMessage("")
                           }
                       }}
                       value={message}
                       variant="outlined"
                       multiline rows="4"/>
        </div>
    );
}

export default MessageBox