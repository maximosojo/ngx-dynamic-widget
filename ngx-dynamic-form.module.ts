import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgxCurrencyModule } from "ngx-currency";

import {
    NgxDynamicFormExtensionTypeCheckboxComponent,
    NgxDynamicFormExtensionTypeChoiceComponent,
    NgxDynamicFormExtensionTypeDropdownComponent,
    NgxDynamicFormExtensionTypeMoneyComponent,
    NgxDynamicFormExtensionTypeSelect2EntityComponent,
    NgxDynamicFormExtensionTypeTextComponent,
    NgxDynamicFormExtensionTypeTextareaComponent,
    NgxDynamicFormComponent
} from './extension';

import {
    NgxDynamicFormResourcesUIHelpComponent,
    NgxDynamicFormResourcesUILabelComponent
} from './resources';

const COMPONENTS = [
    NgxDynamicFormExtensionTypeCheckboxComponent,
    NgxDynamicFormExtensionTypeChoiceComponent,
    NgxDynamicFormExtensionTypeDropdownComponent,
    NgxDynamicFormExtensionTypeMoneyComponent,
    NgxDynamicFormExtensionTypeSelect2EntityComponent,
    NgxDynamicFormExtensionTypeTextComponent,
    NgxDynamicFormExtensionTypeTextareaComponent,
    NgxDynamicFormResourcesUIHelpComponent,
    NgxDynamicFormResourcesUILabelComponent,
    NgxDynamicFormComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    NgxCurrencyModule
  ],
  exports: [...COMPONENTS],
  declarations: [...COMPONENTS],
})
export class NgxDynamicFormModule { }
