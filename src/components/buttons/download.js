import { saveAs } from "file-saver";

export default Download;

function Download(){
    const saveFile = () => {
        saveAs(
            "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
            "example.pdf"
        );
    };

    return (
        <button className="w-auto text-sm sm:text-xl h-8 sm:h-12 px-3 sm:px-5 mt-10 duration-200 bg-purple-300 rounded-lg text-white-light hover:underline hover:bg-purple-200 hover:translate-x-0.5 hover:-translate-y-0.5 hover:shadow-2xl" onClick={saveFile}> Download CV</button>
    );
}