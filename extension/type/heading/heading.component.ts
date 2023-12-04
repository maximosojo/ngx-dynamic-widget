import { Component, Input, OnInit } from '@angular/core';
import { Heading } from '../../../models/heading.models';

@Component({
  selector: 'ngx-dynamic-widget-heading',
  templateUrl: './heading.component.html'
})
export class NgxDynamicWidgetHeadingComponent implements OnInit {

  @Input() data: any;

  tag: string;
  title: string;

  ngOnInit() {
    var heading = new Heading(this.data)
    this.tag = heading.tag;
    this.title = heading.title;
  }
}