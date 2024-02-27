import { Component, OnInit } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  educationList: Education[] = [
    {
      institute: "CDAC Mumbai",
      course: 'Diploma in Advanced Computing',
      duration: '2022',
      score: '',
    },
    {
      institute: "AISSMS's College of Engineering, Pune",
      course: 'BE in Civil Engineering',
      duration: '2014-2018',
      score: 'First Class',
    },
    {
      institute: 'Dayanand Science College, Latur',
      course: 'HSC',
      duration: '2012-2014',
      score: '68%',
    },
    {
      institute: 'Jawahar Navodaya Vidyalaya, Latur',
      course: 'SSC',
      duration: '2012',
      score: '9 CGPA',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
