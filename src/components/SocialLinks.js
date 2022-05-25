import LinkButton from "./LinkButton";
export default SocialLinks;

function SocialLinks(){
    return (
        <div id="bottom">
            <LinkButton text="LinkedIn" hyperlink="https://www.linkedin.com/in/markus-johansen-64625b208/"/>
            <LinkButton text="GitHub" hyperlink="https://github.com/J0hans1"/>
            <LinkButton text="Mail" hyperlink="mailto:markusarj@gmail.com"/>
        </div>
    )
}