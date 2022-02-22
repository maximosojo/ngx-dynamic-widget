import { Component, Input } from '@angular/core';
import { FormField } from '../../../models/form.models';

@Component({
  selector: 'ngx-dynamic-form-resources-ui-help',
  templateUrl: './help.component.html'
})
export class NgxDynamicFormResourcesUIHelpComponent {

  @Input() input: FormField<string>;
  constructor() { }
}