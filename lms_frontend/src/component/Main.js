import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import Aboutus from './Aboutus';
import {  Routes, Route } from 'react-router-dom';
import CourseDetail from './CourseDetail';
import TeacherDetail from './TeacherDetail';

// teacher 
import TeacherDashboard from './Teacher/TeacherDashboard';
import TeacherLogin from './Teacher/TeacherLogin';
import TeacherRegister from './Teacher/TeacherRegister';
import TeacherProfileSetting from './Teacher/TeacherProfileSetting';
import TeacherChangePassword from './Teacher/TeacherChangePassword';
import TeacherCourses from './Teacher/TeacherCourses';
import AddCourse from './Teacher/AddCourse';
import UserList from './Teacher/UserList';

// user
import Dashboard from './User/Dashboard';
import Login from './User/Login';
import Register from './User/Register';
import MyCourses from './User/MyCourses';
import FavouriteCourses from './User/FavouriteCourses';
import RecommendedCourses from './User/RecommendedCourses';
import ProfileSetting from './User/ProfileSetting';
import ChangePassword from './User/ChangePassword';

//List pages 
import AllCourses from './AllCourses';
import PopularCourses from './PopularCourses';
import PopularTeacher from './PopularTeacher';
import CategoryCourses from './CategoryCourses';


function Main() {
    return (
      <div className="App">
          <Header />
          <Routes>
            
            <Route exact path="/" element={<Home />} /> 
            <Route exact path="/aboutus" element={<Aboutus />} />
            <Route exact path="/detail/:course_id" element={<CourseDetail />} />
            <Route exact path="/teacher-detail/:teacher_id" element={<TeacherDetail />} />
            <Route exact path="/all-courses" element={<AllCourses />} />
            <Route exact path="/popular-courses" element={<PopularCourses />} />
            <Route exact path="/popular-teacher" element={<PopularTeacher />} />
            <Route exact path="/category/:category_slug" element={<CategoryCourses />} />

            // user
            <Route exact path="/user-login" element={<Login />} />
            <Route exact path="/user-register" element={<Register />} />
            <Route exact path="/user-dashboard" element={<Dashboard />} />
            <Route exact path="/my-courses" element={<MyCourses />} />
            <Route exact path="/favourite-courses" element={<FavouriteCourses />} />
            <Route exact path="/recommended-courses" element={<RecommendedCourses />} />
            <Route exact path="/profile-setting" element={<ProfileSetting />} />
            <Route exact path="/change-password" element={<ChangePassword />} />

            // teacher
            <Route exact path="/teacher-profile-setting" element={<TeacherProfileSetting />} />
            <Route exact path="/teacher-change-password" element={<TeacherChangePassword />} />
            <Route exact path="/teacher-login" element={<TeacherLogin />} />
            <Route exact path="/teacher-register" element={<TeacherRegister />} />
            <Route exact path="/teacher-dashboard" element={<TeacherDashboard />} />
            <Route exact path="/teacher-courses" element={<TeacherCourses />} />
            <Route exact path="/add-course" element={<AddCourse />} />
            <Route exact path="/teacher-users" element={<UserList />} />


          
          </Routes>
        <Footer />
      </div>
    );
  }
  
  export default Main;
  