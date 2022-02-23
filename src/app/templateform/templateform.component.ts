import { Component, OnInit } from '@angular/core';
import { Countries } from './countries';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {
countries:Countries[]=[{name:"Egypt"},{name:"India"},{name:"Sudan"},{name:"China"}]

  constructor() { }

  ngOnInit(): void {
  }

}
