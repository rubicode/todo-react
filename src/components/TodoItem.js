export default function TodoItem(props) {
    console.log(props)
    return (
        <li>
            {props.title}
            {!props.sent && <button type="button" onClick={() => props.resend(props.id, props.title)}>kirim ulang</button>}
        </li>
    )
}