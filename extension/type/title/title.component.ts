import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-dynamic-widget-title',
  templateUrl: './title.component.html'
})
export class NgxDynamicWidgetTitleComponent implements OnInit  {

  @Input() data: any;

  title: string;

  ngOnInit() {
    this.title = this.data.title;
  }
}