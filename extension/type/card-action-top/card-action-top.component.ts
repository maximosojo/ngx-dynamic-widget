import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-dynamic-widget-card-action-top',
  templateUrl: './card-action-top.component.html'
})
export class NgxDynamicWidgetCardActionTopComponent {

  @Input() data: any;
}