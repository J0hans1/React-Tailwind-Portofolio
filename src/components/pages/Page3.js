// import '../css/MiddlePage.css';
import WaveTransition from '../WaveTransition';
import Project from "../project";

export default MiddlePage;

function MiddlePage(){
    return (
        <div className="relative w-full h-fit m-0 bg-gradient-to-b from-purple-100 to-sand">

            {/*content*/}
            <div className="flex flex-col items-center mx-5 sm:mx-40 pb-10">
                <Project name="Ontap" desc="A group project in the course webtechnologies at NTNU. The webpage is completely vanilla; written in ES6, CSS3 and HTML5. The customer of the webpage was a interests-group for brewing enthusiasts in Online student organization, called Ontap. The contributors to this project was: Sander G Slinning, Markus A R Johansen, Benjamin Fogalele, Oskar Nesheim, Naqibullah Rahimi" src="1" github="https://github.com/J0hans1/Ontap"/>
                <Project name="BookOfCook" desc="Java school project at NTNU; A Digital Cookbook app; create your own cookbook files. Project was made together with Julian Ammouche Ottosen. The project was graded an A. The is a desktop application made with JavaFX, and supports file management, filtration of recipes by category and by ability to cook the recipe with current ingredients. " src="2" github="https://github.com/J0hans1/BookOfCook"/>
                <Project name="Portfolio" desc="This webpage is my portfolio and it is written in reactJS and tailwindCSS. This project was my first encounter with both frameworks, and have been very good for the development of my skills as a web developer. The webpage is also hosted by Vercel, and is directly linked to my github repository." src="3" github="https://github.com/J0hans1/Portofolio"/>
            </div>

            {/*wave transition*/}
            <WaveTransition color="#FFFCF3"/>
        </div>
    )
}