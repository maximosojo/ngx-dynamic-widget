import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormField } from '../../../../models/form.models';

@Component({
  selector: 'ngx-dynamic-widget-extension-type-form-dropdown',
  templateUrl: './dropdown.component.html'
})
export class NgxDynamicWidgetExtensionTypeDropdownComponent {

  @Input() input: FormField<string>;
  @Input() form: FormGroup;
  
  get f() { return this.form.controls; }
}