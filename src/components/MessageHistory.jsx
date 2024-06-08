import Message from "./Message";
import Response from "./Response";
import Typing from "./Typing";

export default function MessageHistory(props) {
    const { messages } = props;

    return (
        messages.length > 0 ?
        <ul>
            {messages.map(item => {
                const {id, type, from, text, time} = item
                switch(type){
                    case 'message' :
                        return <Message key={id} from={from} time={time} message={text}/>
                    case 'response' :
                        return <Response key={id} from={from} time={time} message={text}/>
                    default :
                        return <Typing key={id} from={from} time={time}/>
                }
            })}
        </ul> : null
    )
}