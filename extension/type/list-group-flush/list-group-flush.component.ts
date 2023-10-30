import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-dynamic-widget-list-group-flush',
  templateUrl: './list-group-flush.component.html'
})
export class NgxDynamicWidgetListGroupFlushComponent {

  @Input() data: any;
}