import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormField } from 'src/app/core/models/form.models';

@Component({
  selector: 'ngx-dynamic-form-extension-type-dropdown',
  templateUrl: './dropdown.component.html'
})
export class NgxDynamicFormExtensionTypeDropdownComponent {

  @Input() input: FormField<string>;
  @Input() form: FormGroup;
  
  get f() { return this.form.controls; }
}