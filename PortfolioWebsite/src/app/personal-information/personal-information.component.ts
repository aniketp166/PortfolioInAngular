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
 ];

  constructor() {}

  ngOnInit(): void {}
}
