from django.urls import path
from . import views

urlpatterns=[
    #teacher
    path('teacher/',views.TeacherList.as_view()),
    path('teacher/<int:pk>/',views.TeacherDetail.as_view()),
    path('teacher-login',views.teacher_login),

    #category
    path('category/',views.CategoryList.as_view()),

    #category
    path('course/',views.CourseList.as_view()),

    #category
    path('teacher-courses/<int:teacher_id>',views.TeacherCourseList.as_view()),


]