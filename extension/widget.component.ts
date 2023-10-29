import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormField } from '../models/form.models';

@Component({
  selector: 'ngx-dynamic-widget',
  templateUrl: './widget.component.html'
})
export class NgxDynamicWidgetComponent {

  @Input() widget: any;
}