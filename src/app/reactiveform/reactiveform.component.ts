import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Countries } from '../templateform/countries';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  constructor(private formBuilder:FormBuilder) { }
  contactForm=this.formBuilder.group(
    {
      firstName:['',[Validators.required,Validators.minLength(3)]],
      lastname:['',[Validators.required,Validators.minLength(3)]],
      email:['',[Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[gmail|yahoo]+.[a-z]{2,4}$')]], 
      gender:['',[Validators.required]],
      isMarried:[''],
      country:['',[Validators.required]]

    }
  )
  countries:Countries[]=[{name:"Egypt"},{name:"India"},{name:"Sudan"},{name:"China"}]
log(){
  console.log(this.contactForm.controls)
  console.log(this.contactForm)
}
 get userValues (){
   return this.contactForm.controls;
 } 
 onSubmit(value:any){
  console.log(value)
  }

  ngOnInit(): void {
  }

}
