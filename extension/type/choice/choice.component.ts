import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormField } from 'src/app/core/models/form.models';
import { FormService } from 'src/app/core/services/form.service';

@Component({
  selector: 'ngx-dynamic-form-extension-type-choice',
  templateUrl: './choice.component.html'
})
export class NgxDynamicFormExtensionTypeChoiceComponent {

  @Input() input: FormField<string>;
  @Input() form: FormGroup;
  
  constructor(private formService: FormService) { }

  get f() { return this.form.controls; }

  onClick() {
    this.formService.onChoiceSelected()
  }
}