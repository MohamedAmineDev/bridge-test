import logo from '../assets/newlogo.png';
import cover from '../assets/cover.jpg';
import '../App.css';
import Card from './Card';
function Header() {
  return (<>
    <div className="p-3">
      <img src={logo} alt="Logo" name='logo' />
    </div>
    <Card />
  </>);
}
export default Header;