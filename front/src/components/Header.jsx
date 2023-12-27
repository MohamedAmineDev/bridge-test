import logo from '../assets/newlogo.png';
import '../App.css';
import Card from './Card';
import Courses from './Courses';
import Contact from './Contact';
function Header() {
  return (<>
    <div className="p-3">
      <img src={logo} alt="Logo" name='logo' />
    </div>
    <Card />
    <Courses />
    <Contact />
  </>);
}
export default Header;