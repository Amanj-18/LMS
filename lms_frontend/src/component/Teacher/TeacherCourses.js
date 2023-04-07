import { Link } from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar"

function TeacherCourses() {
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
                                        <th>Created by</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <td>React JS</td>
                                    <td><Link to="/">Aman Jaiswal</Link></td>
                                    <td>
                                        <button className="btn btn-sm btn-danger active">Delete</button>
                                        <Link className="btn btn-success btn-sm active ms-2" to="/add-chapter/2">Add Chapters</Link>
                                    </td>
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