import { FormBuilder, FormGroup } from '@angular/forms';
export class ValidationForms {
    
 form: FormGroup;

  fieldsTouched(nameField: string) {
    return this.form.get(nameField).valid && this.form.get(nameField).touched && this.form.get(nameField).dirty;
  }

  validationFields() {
    return  this.form.invalid;
  }

}
