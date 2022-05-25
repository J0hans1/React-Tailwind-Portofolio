import '../css/Mail.css';
export default MailComponent;

function MailComponent(){
    return (
        <div id="MailComponent">
            <form>
                <input type="text"></input>
                <input type="text"></input>
                <textarea>Text</textarea>
                <button>Submit</button>     
            </form>
        </div>
    )
}