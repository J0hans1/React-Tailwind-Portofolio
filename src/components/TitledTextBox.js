import '../css/TitledTextBox.css';
export default TitledBox;

function TitledBox(props){
    return(
        <div id="container">
            <h1>{props.title}</h1>
            <p>{props.text}</p>
        </div>
    )
}