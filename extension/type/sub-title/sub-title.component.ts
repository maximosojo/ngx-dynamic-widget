import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-dynamic-widget-sub-title',
  templateUrl: './sub-title.component.html'
})
export class NgxDynamicWidgetSubTitleComponent implements OnInit  {

  @Input() data: any;

  subTitle: string;

  ngOnInit() {
    this.subTitle = this.data.sub_title;
  }
}