import Item from "./Item";

function Courses() {
    const birdgeLink = 'https://9antra.tn/courses';
    const items = [
        { title: 'Spring boot / Angular', price: 350, image: 'https://i.ytimg.com/vi/uRkJINVgZWE/maxresdefault.jpg' },
        { title: 'Node js / React', price: 350, image: 'https://ichi.pro/assets/images/max/724/1*HjR1IqyGb4NpVOhPviYijQ.jpeg' },
        { title: 'Flutter / Firebase', price: 350, image: 'https://res.cloudinary.com/practicaldev/image/fetch/s--FdvWECpC--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/plm1k0ito8y2le1f5hmu.jpg' },
        { title: 'Business intelligence', price: 350, image: 'https://www.cio.com/wp-content/uploads/2022/10/bi-business-intelligence-ts-100646689-orig.jpg?quality=50&strip=all' },
        { title: 'Artificial intelligence', price: 350, image: 'https://ddma.nl/wp-content/uploads/2022/12/DDMA-Commissie-Voice-verder-als-Commissie-Conversational-AI.jpg' },
        { title: 'Devops', price: 350, image: 'https://static.javatpoint.com/top10-technologies/images/top-10-trending-technologies-latest-technologies-of-2023-4.png' }
    ];
    return (
        <>
            <div className="courses">
                <div className="courses-head">
                    <p className="courses-title">Discover our courses</p>
                    <a className="button-small" href={birdgeLink} target="_blank">View More</a>
                </div>
                <div className="courses-body">
                    {items.map((item) => {
                        return (< Item item={item} />);
                    })}
                </div>
            </div>
        </>
    );
}
export default Courses;