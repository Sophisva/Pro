import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Workshop';
  score: number = 49;
  name: string = "นาย ก นามสกุล ข    "

  student = {
    name : "So",
    studentID : "5921602876",
    weight : 55,
    height : 175
  }

  studentlist = [{
    name : "Luffy",
    studentID : "5921602876",
    weight : 75,
    height : 999
    },
    {name : "A",
    studentID : "5921609999",
    weight : 60,
    height : 185
    },
    {name : "Wise",
    studentID : "5921605555",
    weight : 59,
    height : 173
  }]

  constructor() {
    

    this.studentlist.map((object,index)=>{
      let obj : any = object;
      obj.bmi = (object.weight/((object.height/100)*(object.height/100))).toFixed(2);
      return obj;
    })
  }
}
