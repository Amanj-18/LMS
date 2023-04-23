// import { Link } from "react-router-dom";
import { useEffect, useState } from 'react'
import axios from "axios";
const baseUrl = 'http://127.0.0.1:8000/api'


function TeacherLogin() {
    const [teacherLoginData, setteacherLoginData] = useState({
        email: '',
        password: ''
    });
    const handleChange = (event) => {
        setteacherLoginData({
            ...teacherLoginData, [event.target.name]: event.target.value
        });
    }
    const submitForm = () => {
        const teacherFormData = new FormData();
        teacherFormData.append('email', teacherLoginData.email);
        teacherFormData.append('password', teacherLoginData.password);
        try {
            axios.post(baseUrl + '/teacher-login', teacherFormData)
                .then((response) => {
                    if(response.data.bool === true){
                        localStorage.setItem('teacherLoginStatus', true);
                        localStorage.setItem('teacherId', response.data.teacher_id);
                        window.location.href = '/teacher-dashboard';
                    }
                }
                );
        } catch (error) {
            console.log(error);
        }

    }
    const teacherLoginStatus = localStorage.getItem('teacherLoginStatus');
    if(teacherLoginStatus === 'true'){
        window.location.href = '/teacher-dashboard';
    }
    useEffect(() => {
        document.title = "Teacher Login";
    }, []);

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-6 offset-3">
                    <div className="card">
                        <h5 className="card-header">Teacher Login</h5>
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email </label>
                                    <input value={teacherLoginData.email} onChange={handleChange} name="email" type="email" className="form-control" />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input value={teacherLoginData.password} onChange={handleChange} name="password" type="password" className="form-control" id="exampleInputPassword1" />
                                </div>
                                <button type="submit" onClick={submitForm} className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeacherLogin;