import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngx-dynamic-widget-preloader',
  templateUrl: './preloader.component.html'
})
export class NgxDynamicWidgetPreloaderComponent implements OnInit {

  @Input() display = false;
  constructor() { }

  ngOnInit() {
  }

  /**
   * Shows the loader
   */
  show() {
    this.display = true;
  }

  /**
   * Hides the loader
   */
  hide() {
    this.display = false;
  }

}
