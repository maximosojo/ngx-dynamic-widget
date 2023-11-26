import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-dynamic-widget-button',
  templateUrl: './button.component.html'
})
export class NgxDynamicWidgetButtonComponent implements OnInit  {

  @Input() data: any;

  class: string;
  icon: string;
  path: string;
  actionType: string;

  constructor() {
    this.class = 'btn btn-primary'
  }

  ngOnInit() {
    this.path = this.data.uri_action.path;
    this.actionType = this.data.uri_action.action_type;
    this.icon = this.data.uri_action.icon;
    if (this.data.attr) {
      this.class = this.data.attr.class;
    }
  }
}