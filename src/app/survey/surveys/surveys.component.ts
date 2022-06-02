import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-surveys',
  templateUrl: './surveys.component.html',
  styleUrls: ['./surveys.component.css']
})
export class SurveysComponent implements OnInit {

  data = [
    {name :'Kübra Özyakışır', age:24, job: 'Computer Engineer', employed:'Yes'},
    {name :'Mehmet Öztürk', age:34, job: 'Software Engineer', employed:'No'},
    {name :'Mesut Arslanoğlu', age:24, job: 'Mechatronics Engineer', employed:'Yes'},
    {name :'Emre Coşkun', age:25, job: 'Mechatronics Engineer', employed:'No'}

  ];
  headers = [
    {key : 'employed' , label :'Is she/he happy for salary? '},
    {key : 'name' , label :'Name Surname '},
    {key : 'age' , label :'Age '},
    {key : 'job' , label :'Job '}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
