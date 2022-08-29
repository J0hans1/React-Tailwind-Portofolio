export default Navbtn;

// https://stackoverflow.com/questions/442404/retrieve-the-position-x-y-of-an-html-element

function Navbtn(props) {
    let ref = props.reference;
    const scrollToPage = (ref) => {
        window.scrollTo({
            top: ref.offsetTop,
            behavior: "smooth"
        })
    }

    return (
        <div className='sm:mx-2'>
            {/*onClick={scrollToPage(ref)}*/} 
            <button onClick={props.onClick} className="w-full text-left p-2 sm:text-center sm:p-0 sm:h-8 text-sm sm:text-base font-medium text-gray-500 hover:text-gray-300 sm:px-5 duration-200 sm:rounded-3xl bg-weakTransparent hover:bg-blackTransparent-weak hover:shadow-lg">
                {props.text}
            </button>
        </div>
    )
}