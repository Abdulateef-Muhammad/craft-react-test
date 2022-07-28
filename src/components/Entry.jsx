const Entry = (props) => {
    return (
        <li>
            <a href={props.entry.url} target="_blank">{props.entry.content}</a>
        </li>
    )
}

export default Entry;