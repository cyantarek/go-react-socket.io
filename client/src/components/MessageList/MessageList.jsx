import React from "react"
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

function MessageList(props) {
    // example of using state
    // const [message, setMessage] = useState("");

    return (
        <div className="messageList">
            <List>
                {props.messages.flatMap((message, i) => [(
                        <ListItem alignItems="flex-start" key={i}>
                            <ListItemAvatar>
                                <Avatar alt="Cute Kitten" src="https://placekitten.com/200/300"/>
                            </ListItemAvatar>
                            <ListItemText
                                primary={message}
                            />
                        </ListItem>
                    ), <Divider key={"divider-" + i} variant="inset" component="li"/>]
                )}
            </List>
        </div>
    );
}

export default MessageList