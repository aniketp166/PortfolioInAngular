import { Component, OnInit } from '@angular/core';
import { WorkExperience } from '../models/models';

@Component({
  selector: 'work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css'],
})
export class WorkExperienceComponent implements OnInit {
  workExpList: WorkExperience[] = [
    {
      role: 'Software Developer',
      company: 'Flipick Pvt Ltd',
      duration: 'Aug 2023 - Now',
      description: [
        // 'Working to expand google in remote areas.',
        // 'Working to develop new technologies to make life easier.',
      ],
    },
    {
      role: 'Software Engineer',
      company: 'Cybage ',
      duration: 'Feb 2023 - Aug 2023',
      description: [
        // 'Worked with multiple teams to develop desktop and web applications',
        // 'Worked on different technologies such as (Dotnet, C++, Java)',
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
