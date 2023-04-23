import { Link } from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar"
import { useState, useEffect } from "react";
import axios from "axios";
const baseUrl = "http://localhost:8000/api";

const teacherId = localStorage.getItem('teacherId');
console.log(teacherId)


function TeacherCourses() {
    const [courseData, setCourseData] = useState([]);
    useEffect(() => {
        try {
            axios.get(baseUrl + '/teacher-courses/'+teacherId).then((response) => {
                setCourseData(response.data);
            });
        } catch (error) {
            console.log(error);
        }

    }, []);
    // console.log(courseData)


    return (
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <TeacherSidebar />
                </aside>
                <section className="col-md-9">
                    <div className="card">
                        <h5 className="card-header">My Courses</h5>
                        <div className="card-body">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Image</th>
                                        <th>Total enrolled</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {courseData.map((course, index) => <tr>
                                        <td>{course.title}</td>
                                        <td><img src={course.featured_img} width="80" className="rounded" alt={course.title}/></td>
                                        <td><Link to="/">123</Link></td>
                                        <td>
                                            <button className="btn btn-sm btn-danger ">Delete</button>
                                            <Link className="btn btn-success btn-sm ms-2" to={'/add-chapter/'+course.id}>Add Chapters</Link>
                                        </td>
                                    </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );

}
export default TeacherCourses;