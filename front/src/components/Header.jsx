import logo from '../assets/newlogo.png';
import '../App.css';
import Card from './Card';
import Courses from './Courses';
function Header() {
  return (<>
    <div className="p-3">
      <img src={logo} alt="Logo" name='logo' />
    </div>
    <Card />
    <Courses />
  </>);
}
export default Header;