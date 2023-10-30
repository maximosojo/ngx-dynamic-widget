import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-dynamic-widget-list-group',
  templateUrl: './list-group.component.html'
})
export class NgxDynamicWidgetListGroupComponent {

  @Input() data: any;
}