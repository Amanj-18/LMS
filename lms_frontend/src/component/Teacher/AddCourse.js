// import { Link } from "react-router-dom";
import axios from "axios";
import TeacherSidebar from "./TeacherSidebar"
import { useEffect, useState } from 'react'
const baseUrl = "http://127.0.0.1:8000/api";
function AddCourse() {
    const [cats, setCats] = useState([]);
    const [courseData, setCourseData] = useState({
        category: '',
        title: '',
        description: '',
        f_image: '',
        techs: ''
    });
    useEffect(() => {
        try {
            axios.get(baseUrl + '/category').then((response) => {
                setCats(response.data);
            });
        } catch (error) {
            console.log(error)
        }
    }, [])

    const handleChange = (event) => {
        setCourseData({
            ...courseData,
            [event.target.name]: event.target.value
        });
    }
    const handleFileChange = (event) => {
        setCourseData({
            ...courseData,
            [event.target.name]: event.target.files[0]
        });
    }
    // submit form data
    const formSubmit = () => {
        const _formData = new FormData();
        _formData.append('category', courseData.category);
        _formData.append('teacher', 1);
        _formData.append('title', courseData.title);
        _formData.append('description', courseData.description);
        _formData.append('featured_img', courseData.f_image);
        _formData.append('techs', courseData.techs);
        try {
            axios.post(baseUrl + '/course/', _formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then((response) => {
                // console.log(response.data);
                window.location.href = '/add-course';
            });
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <TeacherSidebar />
                </aside>
                <section className="col-md-9">
                    <div className="card">
                        <h5 className="card-header">Add Course</h5>
                        <div className="card-body">
                            <form>
                                <div className="mb-3 row">
                                    <label htmlFor="title" className="col-sm-2 col-form-label">Category </label>
                                    <select name="category" onChange={handleChange} className="form-control">
                                        {cats.map((category, index) => { 
                                            return <option key={index} value={category.id}> {category.title} </option> 
                                            })}
                                    </select>
                                </div>
                                
                                <div className="mb-3 row">
                                    <label htmlFor="title" className="col-sm-2 col-form-label">Title </label>
                                    <div className="col-sm-10">
                                        <input onChange={handleChange} type="text" className="form-control" id="staticEmail" />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Description </label>
                                    <div className="col-sm-10">
                                        <input onChange={handleChange} type="text" className="form-control" id="staticEmail" />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Featured Image</label>
                                    <div className="col-sm-10">
                                        <input onChange={handleFileChange} type="file" className="form-control" id="inputPassword" />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Technologies</label>
                                    <div className="col-sm-10">
                                        <input onChange={handleChange} type="text" placeholder="php , python" className="form-control" id="inputPassword" />
                                    </div>
                                </div>
                                <hr />
                                <button type="button" onClick={formSubmit} className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default AddCourse;
