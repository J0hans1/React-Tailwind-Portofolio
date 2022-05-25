import '../css/LinkButton.css';
export default LinkButton;

function LinkButton(props) {
    return (
        <a target="_blank" rel="noreferrer" href={props.hyperlink}>
            <button>{props.text}</button>
        </a>
    )
}