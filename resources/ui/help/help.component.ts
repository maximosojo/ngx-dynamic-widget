import { Component, Input } from '@angular/core';
import { FormField } from 'src/app/core/models/form.models';

@Component({
  selector: 'ngx-dynamic-form-resources-ui-help',
  templateUrl: './help.component.html'
})
export class NgxDynamicFormResourcesUIHelpComponent {

  @Input() input: FormField<string>;
  constructor() { }
}