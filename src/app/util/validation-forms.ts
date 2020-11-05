import { FormBuilder, FormGroup } from '@angular/forms';
export abstract class ValidationForms {
    
 form: FormGroup;


  abstract configForm() ;

  fieldsTouched(nameField: string) {
    return this.getField(nameField).valid && this.getField(nameField).touched && this.getField(nameField).dirty;
  }
  
  fieldIndividual(nameField:string){
    return !this.getField(nameField).pristine && this.getField(nameField).errors 
  }

  validationFields() {
    return  this.form.invalid;
  }

  getField(nameField:string) {
    return this.form.get(nameField);
  }

}
