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
    'Hi, I am a Software Engineer with 1 years of experience in software industry.',
    // 'Worked as Head of Product Management in Google for various technologies (Google Search Engine, Google Drive, Chrome Browser).',
    // 'Delivered all product withing deadlines. Always eager to learn new technologies.',
    'Currently, working as Software Developer at Flipick Pvt Ltd',
  ];

  constructor() {}

  ngOnInit(): void {}
}
