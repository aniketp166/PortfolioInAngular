import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css'],
})
export class PersonalInformationComponent implements OnInit {
  myData: string[][] = [
    ['Name', 'Aniket Patil'],
    ['DOB', '11/12/1996'],
    ['Work Exp', '1 Years'],
    ['Education', 'BE, CDAC'],
    ['Interests', 'Chess, Web Dvpt'],
  ];

  aboutMe: string[] = [
    'Hi, I am a Software Engineer with 1 years of experience in the software industry.',
    'Currently, working as a Software Developer at Flipick Pvt Ltd',
    'Building <a href="https://mpscplanner.com" target="_blank" rel="noopener noreferrer">mpscplanner.com</a> and <a href="https://upscplanner.com" target="_blank" rel="noopener noreferrer">upscplanner.com</a>'
  ];
  
  constructor() {}

  ngOnInit(): void {}
}
