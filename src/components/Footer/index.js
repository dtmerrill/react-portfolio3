import React from 'react';
import Email from '../../assets/images/Emaillogo.jpg';
import GitHub from '../../assets/images/Ghlogo.jpg';
import Linkedin from '../../assets/images/Lilogo.jpg';


function PageFooter() {

    return(
        <footer className="logos">
            <a href="dtmerrilliii@gmail.com">
              <img src={Email} alt="icon of email" className="icon"/>
              
            </a>
            <a href="https://github.com/dtmerrill">
            <img src={GitHub} alt="icon of github" className="icon" />
                
            </a>
            <a href="https://www.linkedin.com/in/danatmerrill8165/">
            <img src={Linkedin} alt="icon of LinkedIn" className="icon" />
              
            </a>

        </footer>
    )
}

export default PageFooter;