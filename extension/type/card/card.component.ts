import { Component, Input, OnInit } from '@angular/core';
import { UriAction } from '../../../models/uri-action.models';

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
    var uriAction = new UriAction(this.data.uri_action)
    this.path = uriAction.path;
    this.actionType = uriAction.action_type;
    this.icon = uriAction.icon;
  }
}