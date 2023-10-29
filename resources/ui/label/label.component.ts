import { Component, Input } from '@angular/core';
import { FormField } from '../../../models/form.models';

@Component({
  selector: 'ngx-dynamic-widget-resources-ui-label',
  templateUrl: './label.component.html'
})
export class NgxDynamicWidgetResourcesUILabelComponent {

  @Input() input: FormField<string>;
  constructor() { }
}