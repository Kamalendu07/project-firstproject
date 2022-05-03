import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firsproject';
  ename="Kamal";
  address="Kolkata";

  display()
  {
    alert("Welcome to CG Angular Course!!!");
  }
  products: any=[

    {
      title:"LED Tv",
      company:"Sony",
      price:40000
    },
    {
      title:"Mobile",
      company:"Samsung",
      price:20000
    },
    {
      title:"Freeze",
      company:"LG",
      price:45000
    }
  ]
}