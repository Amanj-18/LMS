import { useEffect , useState } from "react";
// import { Link } from "react-router-dom";
import axios from 'axios'

const baseUrl = "http://127.0.0.1:8000/api/teacher/";
function TeacherRegister() {
    useEffect(()=>{
        document.title = "Teacher Register";
    })
    const [teacherData, setteacherData] = useState({
        'full_name': '',
        'email': '',
        'password': '',
        'qualification': '',
        'mobile_no': '',
        'skills': '',
        'status' : ''
    });
    // change element value
    const handleChange = (event) => {
        setteacherData({
            ...teacherData,
            [event.target.name]: event.target.value
        })
    }
    // submit form data
    const submitform = () => {
        const teacherFormData = new FormData();
        teacherFormData.append('full_name', teacherData.full_name);
        teacherFormData.append('email', teacherData.email);
        teacherFormData.append('password', teacherData.password);
        teacherFormData.append('qualification', teacherData.qualification);
        teacherFormData.append('mobile_no', teacherData.mobile_no);
        teacherFormData.append('skills', teacherData.skills);
        teacherFormData.append('status', teacherData.status);
        try {
            axios.post(baseUrl, teacherFormData).then((response) => {
            setteacherData({
                'full_name': '',
                'email': '',
                'password': '',
                'qualification': '',
                'mobile_no': '',
                'skills': '',
                'status' : 'success'
            });
        });
        } catch (error) {
            console.log(error)
            setteacherData({
                'status' : 'error'
            });
        }
        
    } 
    const teacherLoginStatus = localStorage.getItem('teacherLoginStatus');
    if(teacherLoginStatus === 'true'){
        window.location.href = '/teacher-dashboard';
    }
        return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-6 offset-3">
                    {teacherData.status === 'success' && <div className="alert alert-success" role="alert">  Teacher register successfully
                    </div> }
                     {teacherData.status === 'error' &&  <div className="alert alert-danger" role="alert">  Teacher register failed </div> }
                    <div className="card">
                        <h5 className="card-header">Teacher registeration</h5>
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Full name</label>
                                    <input value={teacherData.full_name} name='full_name' type="text" onChange={handleChange} className="form-control"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input value={teacherData.email} name="email" type="email" onChange={handleChange} className="form-control"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input value={teacherData.password} name="password" type="password" onChange={handleChange} className="form-control"  />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">qualification</label>
                                    <input value={teacherData.qualification} name="qualification" type="text" onChange={handleChange} className="form-control"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">mobile_no</label>
                                    <input value={teacherData.mobile_no} name="mobile_no" type="number" onChange={handleChange} className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Skills</label>
                                    <textarea value={teacherData.skills} name="skills" className="form-control" onChange={handleChange}></textarea>
                                    <div id="emailHelp" className="form-text">python , php</div>
                                </div>
                                <button onClick={submitform} type="submit" className="btn btn-primary">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeacherRegister;