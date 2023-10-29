import { Injectable, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, ValidatorFn, Validators } from '@angular/forms';
import { FormField } from '../models/form.models';

@Injectable({
  providedIn: 'root'
})
export class WidgetService {

  widgetData: any = [];

  createForm(widgetData: FormField<string>[]): FormGroup {
      this.widgetData = []
      const group: any = {};
      
      Object.values(widgetData).forEach(widget => {
        this.widgetData.push(widget)
      });
      
      return new FormGroup(group);
  }

  public createView() {
    return this.widgetData
  }
}