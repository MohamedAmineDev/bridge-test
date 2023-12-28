import React from "react";
import axios from "axios";
function MyModal({ course, title, target,type }) {
    const [theTitle,setTheTitle]=React.useState(course.title);
    const [imageUrl,setImageUrl]=React.useState(course.imageUrl);
    const [price,setPrice]=React.useState(course.price);
    React.useEffect(()=>{
        setTheTitle(course.title);
        setImageUrl(course.imageUrl);
        setPrice(course.price);
    },[course]);
    async function handleRegister(){
        const APILINK="localhost:8080/register_course";
        try {
            const response = await axios.post(APILINK, { title: theTitle, imageUrl: imageUrl,price:price }, {headers: { 'Content-Type': 'application/json'}});
            console.log(response.data);
        } catch (error) {
            console.error(error);
            // Handle error, display error message, etc.
        }
    }
    async function handleEdit(){
        const APILINK=`localhost:8080/edit_course/${course.id}`;
        try {
            const response = await axios.put(APILINK, { title: theTitle, imageUrl: imageUrl,price:price }, {headers: { 'Content-Type': 'application/json'}});
            console.log(response.data);
        } catch (error) {
            console.error(error);
            // Handle error, display error message, etc.
        }
    }
    return (
        <>
            <div className="modal fade" id={target} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">{title}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">Title</label>
                                <input type="text" className="form-control" id="title"  value={theTitle} onChange={(e)=>{
                                    setTheTitle(e.target.value);
                                }} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="image" className="form-label">Image url</label>
                                <input type="text" className="form-control" id="image" value={imageUrl} onChange={(e)=>{
                                    setImageUrl(e.target.value);
                                }} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="price" className="form-label">Price</label>
                                <input type="number" className="form-control" id="price" value={price} onChange={(e)=>{
                                    setPrice(e.target.value);
                                }} />
                            </div>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={(e)=>{
                                e.preventDefault();
                                if(type==0){
                                    handleRegister();
                                }
                                else{
                                    handleEdit();
                                }
                            }}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default MyModal;