import { Link } from "react-router-dom";


function CategoryCourses() {
    return (
        <div className="container mt-4">
            <h3 className="pb-1 mb-4">Web development Courses</h3>
            <div className="row">
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <Link to="/detail/1"><img src="/logo512.png" className="card-img-top" alt="..." /> </Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/detail/1"> Courses Title</Link></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <Link to="/detail/1"><img src="/logo512.png" className="card-img-top" alt="..." /> </Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/detail/1"> Courses Title</Link></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <Link to="/detail/1"><img src="/logo512.png" className="card-img-top" alt="..." /> </Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/detail/1"> Courses Title</Link></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <Link to="/detail/1"><img src="/logo512.png" className="card-img-top" alt="..." /> </Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/detail/1"> Courses Title</Link></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <Link to="/detail/1"><img src="/logo512.png" className="card-img-top" alt="..." /> </Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/detail/1"> Courses Title</Link></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <a href="#"><img src="/logo512.png" className="card-img-top" alt="..." /> </a>
                        <div className="card-body">
                            <h5 className="card-title"><a href="#"> Courses Title</a></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <a href="#"><img src="/logo512.png" className="card-img-top" alt="..." /> </a>
                        <div className="card-body">
                            <h5 className="card-title"><a href="#"> Courses Title</a></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <a href="#"><img src="/logo512.png" className="card-img-top" alt="..." /> </a>
                        <div className="card-body">
                            <h5 className="card-title"><a href="#"> Courses Title</a></h5>
                        </div>
                    </div>
                </div>
            </div>
            {/* pagination start */}
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                </ul>
            </nav>
            {/* pagination end */}
        </div>
    );
}

export default CategoryCourses;