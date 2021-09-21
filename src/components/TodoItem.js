export default function TodoItem(props) {
    return (
        <li className="my-3">
            {props.title}
            <button className={props.sent ? 'mx-3 btn btn-danger' : 'mx-3 btn btn-warning'} type="button" onClick={props.sent ? props.remove : props.resend}>{props.sent ? 'delete' : 'kirim ulang'}</button>
        </li>
    )
}