import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const baseUrl = "http://localhost:8000/api";
function PopularTeacher() {
    const [teacher, setTeacher] = useState(null);
    useEffect(() => {
        axios.get(baseUrl+'/teacher').then((response) => {
            setTeacher(response.data);
        });
    }, []);
    return (
        <div className="container mt-4">
            <h3 className="pb-1 mb-4 mt-5">Popular Teachers </h3>
            <div className="row">
                <div className="col-md-3">
                    <div className="card">
                        <a href="#"><img src="logo512.png" className="card-img-top" alt="..." /> </a>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/teacher-detail/1">Teacher Name</Link></h5>
                        </div>
                        <div className="card-footer">
                            <div className="title">
                                <span>Rating 4.5/5</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <a href="#"><img src="logo512.png" className="card-img-top" alt="..." /> </a>
                        <div className="card-body">
                            <h5 className="card-title"><a href="#"> Teacher Name</a></h5>
                        </div>
                        <div className="card-footer">
                            <div className="title">
                                <span>Rating 4.5/5</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <a href="#"><img src="logo512.png" className="card-img-top" alt="..." /> </a>
                        <div className="card-body">
                            <h5 className="card-title"><a href="#">Teacher Name</a></h5>
                        </div>
                        <div className="card-footer">
                            <div className="title">
                                <span>Rating 4.5/5</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <a href="#"><img src="logo512.png" className="card-img-top" alt="..." /> </a>
                        <div className="card-body">
                            <h5 className="card-title"><a href="#">Teacher Name</a></h5>
                        </div>
                        <div className="card-footer">
                            <div className="title">
                                <span>Rating 4.5/5</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <a href="#"><img src="logo512.png" className="card-img-top" alt="..." /> </a>
                        <div className="card-body">
                            <h5 className="card-title"><a href="#">Teacher Name</a></h5>
                        </div>
                        <div className="card-footer">
                            <div className="title">
                                <span>Rating 4.5/5</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <a href="#"><img src="logo512.png" className="card-img-top" alt="..." /> </a>
                        <div className="card-body">
                            <h5 className="card-title"><a href="#">Teacher Name</a></h5>
                        </div>
                        <div className="card-footer">
                            <div className="title">
                                <span>Rating 4.5/5</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <a href="#"><img src="logo512.png" className="card-img-top" alt="..." /> </a>
                        <div className="card-body">
                            <h5 className="card-title"><a href="#">Teacher Name</a></h5>
                        </div>
                        <div className="card-footer">
                            <div className="title">
                                <span>Rating 4.5/5</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <a href="#"><img src="logo512.png" className="card-img-top" alt="..." /> </a>
                        <div className="card-body">
                            <h5 className="card-title"><a href="#"> Teacher Name</a></h5>
                        </div>
                        <div className="card-footer">
                            <div className="title">
                                <span>Rating 4.5/5</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* pagination start */}
            <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-center">
                    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item"><a class="page-link" href="#">Next</a></li>
                </ul>
            </nav>
            {/* pagination end */}
        </div>
    );
}

export default PopularTeacher;