import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-dynamic-widget-card',
  templateUrl: './card.component.html'
})
export class NgxDynamicWidgetCardComponent implements OnInit {

  @Input() data: any;

  icon: string;
  path: string;
  actionType: string;

  ngOnInit() {
    this.path = this.data.uri_action.path;
    this.actionType = this.data.uri_action.action_type;
    this.icon = this.data.uri_action.icon;
  }
}