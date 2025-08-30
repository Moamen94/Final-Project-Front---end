import AboutHeaDer from "../AboutUs/AboutHeaDer";
import Footer from "../compuntsFooTer/FooTer";
import Navbar from "../compuntsHome1/heder";
import CouresCard from "./CouresCard";

function Courses ()
{
return(
<>

<AboutHeaDer
  title = "Courses"
  homeHref = "#"
  homeLabel = "Home" 
  />
<CouresCard/>
<Footer/>

  </>
  

);

}
export default Courses;