import { Component, Input } from '@angular/core';
import { FormField } from '../../../models/form.models';

@Component({
  selector: 'ngx-dynamic-widget-resources-ui-help',
  templateUrl: './help.component.html'
})
export class NgxDynamicWidgetResourcesUIHelpComponent {

  @Input() input: FormField<string>;
  constructor() { }
}