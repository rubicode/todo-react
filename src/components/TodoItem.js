export default function TodoItem(props) {
    return (
        <li>
            {props.title}
            {!props.sent && <button type="button" onClick={() => props.resend(props.id, props.title)}>kirim ulang</button>}
        </li>
    )
}