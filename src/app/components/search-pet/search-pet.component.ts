import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder } from '@angular/forms';
import { ValidationForms } from 'src/app/util/validation-forms';

@Component({
  selector: 'search-pet',
  templateUrl: './search-pet.component.html',
  styleUrls: ['./search-pet.component.css']
})
export class SearchPetComponent extends ValidationForms implements OnInit {
  
  formSearch: FormGroup;
 

  constructor(
    private _formBuilder: FormBuilder
  ) { 
    super();
  }

 ngOnInit(): void {
  }

  configForm() {
    this.formSearch = this._formBuilder.group({
      chosePet: [null],
      choseAge: [null],
      choseGender: [null],
      ChoseCity: [null]
    })
  }

}
