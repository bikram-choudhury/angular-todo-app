import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  price: number = 10;
  date: Date = new Date();
  text: string = 'Angular';
  numberForPower: number = 2;
  courses: string[] = ['Angular', 'React', 'Vue', 'JS', 'sevelte', 'Python', 'Node', 'C++'];
  rollnumber: number[] = [1,2,34,10,5,6,7,7];
  constructor() { }

  ngOnInit() {
  }

}
