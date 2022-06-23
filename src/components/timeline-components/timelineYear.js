export default Year;

function Year(props){
    return(
        <div className='relative border-2 border-blackTransparent-weak bg-white-ivory rounded-lg py-3 px-10 '>
            <p className='text-blackTransparent-strong text-2xl'>{props.year}</p>
        </div>
    )
}