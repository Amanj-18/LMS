import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


function CourseDetail() {
    let { course_id } = useParams();
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-4">
                    <img src="/logo512.png" className="img-thumbnail" alt="Course Image" />
                </div>
                <div className="col-8">
                    <h3>Course Title</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum odit commodi impedit iste labore iusto, in temporibus cupiditate ipsa aperiam! Illum provident minima vero corrupti atque ullam nesciunt voluptatem eaque.</p>
                    <p className="fw-bold">Course By:<Link to="/teacher-detail/1">Teacher 1</Link></p>
                    <p className="fw-bold">Duration : 3 hours 30 minutes </p>
                    <p className="fw-bold">Total enrolled : 456 students</p>
                    <p className="fw-bold">Rating : 4.5 </p>
                </div>
            </div>
            {/* course videos */}
            <div className="card mt-4">
                <h5 className="card-header">
                    Course videos
                </h5>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Introduction <span className="float-end">
                        <span className="me-5">1 hour 30 minutes</span>
                        <button className="btn btn-sm btn-danger" data-bs-toggle="modal" data-bs-target="#videoModal1"><i className="bi bi-play-btn"></i> </button></span>

                        {/* <!-- start Modal --> */}
                        <div className="modal fade" id="videoModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-lg">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title " id="exampleModalLabel">Modal title</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <div class="ratio ratio-16x9">
                                            <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- end Modal --> */}

                    </li>
                    <li className="list-group-item">Introduction <span className="float-end">
                        <span className="me-5">1 hour 30 minutes</span>
                        <button className="btn btn-sm btn-danger float-right"><i className="bi bi-play-btn"></i> </button></span>
                    </li>
                    <li className="list-group-item">Introduction <span className="float-end">
                        <span className="me-5">1 hour 30 minutes</span>
                        <button className="btn btn-sm btn-danger float-right"><i className="bi bi-play-btn"></i> </button></span>
                    </li>
                    <li className="list-group-item">Introduction <span className="float-end">
                        <span className="me-5">1 hour 30 minutes</span>
                        <button className="btn btn-sm btn-danger float-right"><i className="bi bi-play-btn"></i> </button></span>
                    </li>
                </ul>
            </div>

            <h3 className="pb-1 mb-4 mt-5">Latest Courses</h3>
            <div className="row">
                <div className="col-md-3">
                    <div className="card">
                        <Link to="/detail/1"><img src="/logo512.png" className="card-img-top" alt="..." /> </Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/detail/1"> Courses Title</Link></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <a href="#"><img src="/logo512.png" className="card-img-top" alt="..." /> </a>
                        <div className="card-body">
                            <h5 className="card-title"><a href="#"> Courses Title</a></h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CourseDetail;