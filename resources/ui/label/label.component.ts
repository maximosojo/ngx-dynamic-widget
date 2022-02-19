import { Component, Input } from '@angular/core';
import { FormField } from 'src/app/core/models/form.models';

@Component({
  selector: 'ngx-dynamic-form-resources-ui-label',
  templateUrl: './label.component.html'
})
export class NgxDynamicFormResourcesUILabelComponent {

  @Input() input: FormField<string>;
  constructor() { }
}