import '../css/Mail.css';
export default MailComponent;

function MailComponent(){
    return (
        <div id="MailComponent">
            <form id="mail-form" method="post" onSubmit={CreateMail()}>
                <input type="text" placeholder='title' name='form_title' required></input>
                <input type="text" placeholder='subject' name='subject' required></input>
                <textarea placeholder='text' name='form_message' required></textarea>
                <button id="submit-button" type='submit' value='Send'>Submit</button>     
            </form>
        </div>
    )
}

function CreateMail(){
    
}