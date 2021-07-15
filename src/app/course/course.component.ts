import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  course = [
    {'id': 1,'name': 'Learn Angular', 'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,', 'image': '../../assets/dois.jpg'},
    {'id': 2,'name': 'Learn Angular', 'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,', 'image': '../../assets/dois.jpg'},
    {'id': 3,'name': 'Learn Angular', 'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,', 'image': '../../assets/dois.jpg'},
    {'id': 4,'name': 'Learn Angular', 'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,', 'image': '../../assets/dois.jpg'},
    {'id': 5,'name': 'Learn Angular', 'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,', 'image': '../../assets/dois.jpg'},
    {'id': 6,'name': 'Learn Angular', 'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,', 'image': '../../assets/dois.jpg'},
    {'id': 7,'name': 'Learn Angular', 'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,', 'image': '../../assets/dois.jpg'},
  ]

}
