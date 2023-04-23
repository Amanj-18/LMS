// import { Link } from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar"
import { useEffect, useState } from 'react'
import axios from "axios"
const baseUrl = "http://127.0.0.1:8000/api";



function AddChapter() {

    const [chapterData, setChapterData] = useState({
        title: '',
        description: '',
        video: '',
        remarks: ''
    });

    const handleChange = (event) => {
        setChapterData({
            ...chapterData,
            [event.target.name]: event.target.value
        });
    }
    const handleFileChange = (event) => {
        setChapterData({
            ...chapterData,
            [event.target.name]: event.target.files[0]
        });
    }
    // submit form data
    const formSubmit = () => {
        const _formData = new FormData();
        _formData.append('category', chapterData.category);
        _formData.append('teacher', 1);
        _formData.append('title', chapterData.title);
        _formData.append('description', chapterData.description);
        _formData.append('featured_img', chapterData.f_image);
        _formData.append('techs', chapterData.techs);
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
                        <h5 className="card-header">Add Chapter</h5>
                        <div className="card-body">
                            <div className="mb-3 row">
                                <label for="title" className="col-sm-2 col-form-label">Title </label>
                                <div className="col-sm-10">
                                    <input type="text" onChange={handleChange} className="form-control" id="staticEmail" />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label for="staticEmail" className="col-sm-2 col-form-label">Description </label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="staticEmail" />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label for="inputPassword" className="col-sm-2 col-form-label">Video</label>
                                <div className="col-sm-10">
                                    <input type="file" className="form-control" id="inputPassword" />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label for="inputPassword" className="col-sm-2 col-form-label">Remark</label>
                                <div className="col-sm-10">
                                    <input type="text" placeholder="this video is focused onn basic " className="form-control" id="inputPassword" />
                                </div>
                            </div>
                            <hr/>
                            <button className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default AddChapter;
