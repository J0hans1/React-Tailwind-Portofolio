export default MailComponent;

function MailComponent(){
    return (
        <div className="mt-6 w-full">
            <form className="flex flex-col" method="post" onSubmit={CreateMail()}>
                <input className="h-12 border-0 p-1 text-md rounded-xl mb-3 bg-white-ivory duration-200 hover:scale-105 hover:text-lg" type="text" placeholder='title' name='form_title' required></input>
                <input className="h-12 border-0 p-1 text-md rounded-xl mb-3 bg-white-ivory duration-200 hover:scale-105 hover:text-lg" type="text" placeholder='subject' name='subject' required></input>
                <textarea className="h-80 border-0 p-1 text-md rounded-xl mb-3 bg-white-ivory duration-200 hover:scale-105 hover:text-lg" placeholder='text' name='form_message' required></textarea>
                <button className="w-auto text-sm sm:text-xl h-8 sm:h-12 px-3 sm:px-5 duration-200 bg-purple-300 rounded-lg text-white-light hover:underline hover:bg-purple-200 hover:translate-x-0.5 hover:-translate-y-0.5 hover:shadow-2xl" id="submit-button" type='submit' value='Send'>Submit</button>     
            </form>
        </div>
    )
}

function CreateMail(){

}   