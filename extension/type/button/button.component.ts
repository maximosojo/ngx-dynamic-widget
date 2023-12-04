import { Component, Input, OnInit } from '@angular/core';
import { UriAction } from '../../../models/uri-action.models';

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
    // UriAction
    var uriAction = new UriAction(this.data.uri_action);
    this.path = uriAction.path;
    this.actionType = uriAction.action_type;
    this.icon = uriAction.icon;

    if (this.data.attr) {
      this.class = this.data.attr.class;
    }
  }
}