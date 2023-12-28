import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Navbar from './Navbar';
import axios from "axios";
import React from 'react';
import MyModal from './MyModal';
function AdminPanel() {
    const APILINK = "http://localhost:8080/fetch_courses";
    const [courses, setCourses] = React.useState([]);
    const [counter, setCounter] = React.useState(0);
    const [course, setCourse] = React.useState({ id:'',title: '', imageUrl: '', price: 0 });
    React.useEffect(() => {
        if (counter < 1) {
            setCounter(1);
            fetchCourses();
        }
    }, [courses]);
    async function fetchCourses() {
        try {
            const response = await axios.get(`${APILINK}`);
            const data = response.data;
            console.log(data);
            setCourses(data);
        } catch (error) {
            console.log('error');
        }
    }
    return (
        <>
            <Navbar />

            <table className="table mt-5">
                <thead className='table-dark'>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">title</th>
                        <th scope="col">image</th>
                        <th scope="col">Price</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map((item, index) => {
                        return (
                            <tr key={index + 1}>
                                <th scope="row">{index + 1}</th>
                                <td>{item.title}</td>
                                <td>
                                    <div className="text-center">
                                        <img src={item.imageUrl} className="rounded" alt={item.title} width={50}  />
                                    </div>
                                </td>
                                <td>{item.price}</td>
                                <td>
                                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editModal" onClick={(e) => {
                                        e.preventDefault();
                                        setCourse(item);
                                        //console.log(item);
                                    }} >Edit</button>
                                    <button type="button" className="btn btn-danger" onClick={(e) => {
                                        e.preventDefault();
                                        setCourse(item);
                                    }}>Delete</button>
                                </td>
                            </tr>
                        );
                    })}


                </tbody>
            </table>
            <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#registerModal" onClick={(e)=>{
                e.preventDefault();
                setCourse({ id:'',title: '', imageUrl: '', price: 0 });
            }}>Register</button>
            < MyModal title={'Register a course'} course={course} target={"registerModal"} type={0} />
            < MyModal title={'Edit a course'} course={course} target={"editModal"} type={1} />
        </>
    );
}
export default AdminPanel;