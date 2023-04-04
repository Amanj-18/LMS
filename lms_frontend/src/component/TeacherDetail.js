import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function TeacherDetail(){
    return (
        <div className="container mt-3">
        <div className="row">
            <div className="col-4">
                <img src="/logo512.png" className="img-thumbnail" alt="Teacher Image" />
            </div>
            <div className="col-8">
                <h3>Swapnil Bhagat</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum odit commodi impedit iste labore iusto, in temporibus cupiditate ipsa aperiam! Illum provident minima vero corrupti atque ullam nesciunt voluptatem eaque.</p>
                <p className="fw-bold">Skills <Link to="/category/php">PHP</Link> , <Link to="/category/python">Python</Link> ,<Link to="/category/js">Js</Link></p>
                <p className="fw-bold">Recent Course : <Link to="/teacher-detail/1">React Js</Link> </p>
                <p className="fw-bold">Rating : 4.5 </p>
            </div>
        </div>
        {/* course videos */}
        <div className="card mt-4">
            <h5 className="card-header">
                Course videos
            </h5>
            <div className="list-group list-group-flush">
                <Link to="/detail/1" className="list-group-item list-group-item-action">Php Course 1</Link>
                <Link to="/detail/1" className="list-group-item list-group-item-action">Php Course 2</Link>
                <Link to="/detail/1" className="list-group-item list-group-item-action">Python Course 1</Link>
                <Link to="/detail/1" className="list-group-item list-group-item-action">Python Course 2</Link>
                <Link to="/detail/1" className="list-group-item list-group-item-action">Js Course 1</Link>
                <Link to="/detail/1" className="list-group-item list-group-item-action">Js Course 2</Link>
            </div>
        </div>
    </div>
    );
}

export default TeacherDetail