import { Injectable, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, ValidatorFn, Validators } from '@angular/forms';
import { FormField } from '../models/form.models';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  form: FormGroup;
  formData: any = [];
  @Output() choiceSelected: EventEmitter<boolean> = new EventEmitter();

  createForm(formData: FormField<string>[]): FormGroup {
      this.formData = []
      const group: any = {};
      
      Object.values(formData).forEach(input => {
        let validator: ValidatorFn[] = input.required ? [Validators.required] : [];
          // group[input.key] = validator.length > 0 ? new FormControl(input.empty_data || '', validator)
          // let value = input.data || ''
          let value = '';
          let disabled = input.disabled
          group[input.key] = new FormControl({
            value: value,
            disabled: disabled
          },validator);
          this.formData.push(input)
      });
      
      return new FormGroup(group);
  }

  public handleRequest(form: FormGroup) {

  }

  public createView() {
    return this.formData
  }

  public onChoiceSelected(){
    this.choiceSelected.emit(true)
  }
}