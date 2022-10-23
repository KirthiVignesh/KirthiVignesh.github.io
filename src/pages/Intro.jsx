import './Intro.css'
import {Heading,Text} from '@chakra-ui/react'
	 function Intro(){
        return(<>
			 <div className="hero-container">
    <div className="environment"></div>
    <Heading>Hey I am</Heading>
    <Heading className="hero glitch layers" data-text="Kirthi Vignesh Govindarajan"><span>Kirthi Vignesh Govindarajan</span></Heading>
    <Text>Seeking a beginner role to enhance and explore my technical knowledge.<br></br> I'm currently pursuing B.E Computer Science and Engineering from Sri Eshwar College of Engineering. </Text>
  </div>
		</>
        )
	}
export default Intro