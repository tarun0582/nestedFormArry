import { Component, VERSION } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './form.component.html',

})
export class FormComponent {
  contactForm: FormGroup|any;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.contactForm = this.fb.group({
      employees: this.fb.array([])
    });
  }

  peoplesData(): FormArray {
    return this. contactForm.get('employees') as FormArray;
  }

  newPerson(): FormGroup {
    return this.fb.group({
      firstName: '',
      lastName: '',
      state: this.fb.array([])
    });
  }

  addPeople() {
    this.peoplesData().push(this.newPerson());
  }

  removeEmployee(empIndex: number) {
    this.peoplesData().removeAt(empIndex);
  }

  peoplesState(index: number): FormArray {
    return this.peoplesData()
      .at(index)
      .get('state') as FormArray;
  }

  newState(): FormGroup {
    return this.fb.group({
        state: '',
      disst: ''
    });
  }

  addState(index: number) {
    this.peoplesState(index).push(this.newState());
  }

  removeState(index: number, stateIndex: number) {
    this.peoplesState(index).removeAt(stateIndex);
  }

  onSubmit() {
    console.log(this. contactForm.value);
  }
}
