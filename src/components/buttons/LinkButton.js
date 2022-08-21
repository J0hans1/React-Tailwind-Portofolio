export default LinkButton;

function LinkButton(props) {
    return (
        <a target="_blank" rel="noreferrer" href={props.hyperlink}>
            <button className="w-auto text-sm sm:text-xl mx-2 h-8 sm:h-12 px-3 sm:px-5 duration-300 bg-purple-300 rounded-3xl text-white-light hover:bg-purple-200 hover:translate-x-0.5 hover:-translate-y-0.5 hover:shadow-2xl">
                {props.text}
            </button>
        </a>
    )
}