import cover from '../assets/new-cover.jpg';
import '../App.css';
function Card() {
    return (
        <>
            <div class="banner">
                <img src={cover} className='banner-image' alt="Banner Image" />
                <div class="banner-content">
                    <h1 className='banner-content-h1'>Improve your skills on your own
                        To prepare for a better future</h1>
                    <a className="button-large">Register now</a>
                </div>
            </div>
        </>
    );
}
export default Card;