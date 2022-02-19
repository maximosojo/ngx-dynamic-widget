import { Injectable, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, ValidatorFn, Validators } from '@angular/forms';
import { FormField } from '../models/form.models';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  form:FormGroup;
  formData:any = [];
  @Output() choiceSelected: EventEmitter<boolean> = new EventEmitter();

  createForm(formData: FormField<string>[]): FormGroup {
      this.formData = []
      //this.formData.push([])
      const group: any = {};
      Object.keys(formData).forEach(key => {
          let input = formData[key]
          let validator: ValidatorFn[] = input.required ? [Validators.required] : [];
          // group[input.key] = validator.length > 0 ? new FormControl(input.empty_data || '', validator)
          let value = input.data || ''
          let disabled = input.disabled
          group[input.key] = new FormControl({
            value: value,
            disabled: disabled
          },validator);
          this.formData.push(formData[key])
      })
      
      return new FormGroup(group);
  }

  public handleRequest(form) {

  }

  public createView() {
    return this.formData
  }

  public onChoiceSelected(){
    this.choiceSelected.emit(true)
  }
}