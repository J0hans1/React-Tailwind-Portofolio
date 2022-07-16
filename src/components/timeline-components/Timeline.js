import Year from './timelineYear';
import Event from './timelineEvent';

export default Timeline;


function Timeline(){
    return(
        <div>
            <div className='flex flex-col items-center'>
                <Year year="2002"/>
                <Event title="Hello World!" text="Born in Fredrikstad, Norway" date="April 2002" color="#A29BFE"/>
                
                <Year year="2016"/>
                <Event title="My first job!" text="Worked as in Newspaper delivery for Verdens Gang (VG) " date="February 2016 - December 2016" color="#FE9BAD"/>

                <Year year="2017"/>
                <Event title="First encounter with programming" text="Coding using Python APIs for Arduino, during  programming class in middle school" date="" color="#9BECFE"/>

                <Year year="2018"/>
                <Event title="Started High School!" text="St.Olav Videregående skole, Sarpsborg, Norway" date="August  2018 - June 2021" color="#FEBF9B"/>

                <Year year="2020"/>
                <Event title="Started Working at Meny AS" text="Worked behind the fresh food counter, in a groceries store." date="Oktober 2020 - July 2021" color="#FE9BAD"/>
                <Event title="Introduction to CSS3 and HTML5" text="Started exploring VS Code and front-end barebone programming of webpages. " date="April 2002" color="#9BECFE"/>

                <Year year="2021"/>
                <Event title="Starting my Bachelors-degree!" text="Moved to Trondheim Norway, to study Informatics at NTNU " date="April 2002" color="#FEBF9B"/>
                <Event title="My first JavaScript based Webpage!" text="In the course Web-Technologies, we created a webpage for the brewery comitee of our student organization" date="April 2002" color="#9BECFE"/>
                <Event title="Started working at Tilbords AS" text="sold kitchen equipment, cutlery and porcelain products" date="April 2002" color="#FE9BAD"/>

                <Year year="2022"/>
                <Event title="React Course" text="" date="April 2002" color="#FFD865"/>
                <Event title="My first Java project" text="Created a Digital Cookbook desktop application, with filtration functionalityy" date="April 2002" color="#9BECFE"/>
                <Event title="My first framework based webpage!" text="This very page!" date="April 2002" color="#9BECFE"/>
            </div>
        </div>

    ) 
}