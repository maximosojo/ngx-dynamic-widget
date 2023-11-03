import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormField } from '../../../../models/form.models';

@Component({
  selector: 'ngx-dynamic-widget-extension-type-form-tel',
  templateUrl: './tel.component.html'
})
export class NgxDynamicWidgetExtensionTypeTelComponent {

  @Input() input: FormField<string>;
  @Input() form: FormGroup;
  
  get f() { return this.form.controls; }
}