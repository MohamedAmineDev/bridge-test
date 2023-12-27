function Item({item}){
    return (
        <>
        <div className="card">
                        <img src={item.image} alt="course image" className="card-image" />
                        <div className="card-content">
                            <div className="card-title">
                                <p>
                                    {item.title}
                                </p>
                            </div>
                            <div className="card-price">
                                <p>
                                    {item.price} DT/ Month
                                </p>
                            </div>
                        </div>
                    </div>
        </>
    );
}
export default Item;