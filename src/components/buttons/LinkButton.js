export default LinkButton;

function LinkButton(props) {
    return (
        <a target="_blank" rel="noreferrer" href={props.hyperlink}>
            <button className="w-auto text-md md:text-xl h-12 mr-5 px-5 duration-200 bg-purple-300 rounded-lg text-white-light hover:underline hover:bg-purple-200 hover:translate-x-0.5 hover:-translate-y-0.5 hover:shadow-2xl">
                {props.text}
            </button>
        </a>
    )
}