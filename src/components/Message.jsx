export default function Message(props) {
    const { from, time, message } = props;
    return (
        <li>
            <div className="message-data">
                <span className="message-data-name"><i className="fa fa-circle online">&#x25CF; &nbsp;</i>{from.name}</span>
                <span className="message-data-time">{time}</span>
            </div>
            <div className="message my-message">
                {message}
            </div>
        </li>
    )
}