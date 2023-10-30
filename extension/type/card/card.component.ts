import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-dynamic-widget-card',
  templateUrl: './card.component.html'
})
export class NgxDynamicWidgetCardComponent {

  @Input() data: any;
}