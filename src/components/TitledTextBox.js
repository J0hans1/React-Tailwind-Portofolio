export default TitledBox;

function TitledBox(props){
    return(
        <div className="w-full rounded-3xl p-8 text-center md:text-left">
            <h1 className="mb-3 text-lg md:text-4xl font-medium md:mb-7">{props.title}</h1>
            <p className="text-md md:text-xl"> {props.text}</p>
        </div>
    )
}