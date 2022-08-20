/*import '../css/LastPage.css';*/
import RoundImage from '../RoundImage';
import TitledBox from "../TitledTextBox";
import MailComponent from '../Mail';

export default LastPage;

function LastPage(){
    return (
        <div className="relative w-full h-fit m-0 bg-gradient-to-b from-purple-100 to-sand overflow-hidden pb-32">
            <div className="flex justify-center mx-10 mt-16">
                <div className="lg:w-2/5 h-fit lg:block hidden ">
                    <RoundImage/>
                </div>
                <div className="flex flex-col sm:w-3/4 lg:w-2/5 h-fit">
                    <TitledBox title="Still interested? Contact me!" text="I am available for freelance work, and looking for future summer internships. I would love to hear from you!"/>
                    <MailComponent/>
                </div>
            </div>
        </div>
    )
}   
