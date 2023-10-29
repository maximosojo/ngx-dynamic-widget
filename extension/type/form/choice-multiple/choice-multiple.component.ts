import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormField } from '../../../../models/form.models';
import { FormService } from '../../../../services/form.service';

@Component({
  selector: 'ngx-dynamic-widget-extension-type-form-choice-multiple',
  templateUrl: './choice-multiple.component.html'
})
export class NgxDynamicWidgetExtensionTypeChoiceMultipleComponent {

  @Input() input: FormField<string>;
  @Input() form: FormGroup;

  constructor(private formService: FormService) { }

  get f() { return this.form.controls; }

  onClick() {
    this.formService.onChoiceSelected()
  }
}