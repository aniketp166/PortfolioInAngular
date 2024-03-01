import { Component, OnInit } from '@angular/core';
import { Skill } from '../models/models';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [
    {
      name: 'Angular',
      level: 'Intermidiate',
      rating: 60,
    },
    {
      name: 'ASP.NET Core, Dapper, MS Server',
      level: 'Intermidiate',
      rating: 60,
    },
    {
      name: 'HTML, CSS, JS',
      level: 'Intermidiate',
      rating: 70,
    },
    // {
    //   name: 'JAVA',
    //   level: 'Expert',
    //   rating: 80,
    // },
    // {
    //   name: 'C++',
    //   level: 'Intermidiate',
    //   rating: 70,
    // },
  ];
  constructor() {}

  ngOnInit(): void {}
}
