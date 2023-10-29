import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CurrencyMaskConfig, CurrencyMaskModule, CURRENCY_MASK_CONFIG } from 'ng2-currency-mask';

import {
    NgxDynamicWidgetExtensionTypeCheckboxComponent,
    NgxDynamicWidgetExtensionTypeChoiceComponent,
    NgxDynamicWidgetExtensionTypeChoiceMultipleComponent,
    NgxDynamicWidgetExtensionTypeDropdownComponent,
    NgxDynamicWidgetExtensionTypeMoneyComponent,
    NgxDynamicWidgetExtensionTypeSelect2EntityComponent,
    NgxDynamicWidgetExtensionTypeTextComponent,
    NgxDynamicWidgetExtensionTypeTextareaComponent,
    NgxDynamicWidgetFormComponent,
    NgxDynamicWidgetTitleComponent,
    NgxDynamicFormComponent,
    NgxDynamicWidgetComponent,
} from './extension';

import {
    NgxDynamicWidgetResourcesUIHelpComponent,
    NgxDynamicWidgetResourcesUILabelComponent
} from './resources';

const COMPONENTS = [
    NgxDynamicWidgetExtensionTypeCheckboxComponent,
    NgxDynamicWidgetExtensionTypeChoiceComponent,
    NgxDynamicWidgetExtensionTypeChoiceMultipleComponent,
    NgxDynamicWidgetExtensionTypeDropdownComponent,
    NgxDynamicWidgetExtensionTypeMoneyComponent,
    NgxDynamicWidgetExtensionTypeSelect2EntityComponent,
    NgxDynamicWidgetExtensionTypeTextComponent,
    NgxDynamicWidgetExtensionTypeTextareaComponent,
    NgxDynamicWidgetResourcesUIHelpComponent,
    NgxDynamicWidgetResourcesUILabelComponent,
    NgxDynamicWidgetFormComponent,
    NgxDynamicWidgetTitleComponent,
    NgxDynamicFormComponent,
    NgxDynamicWidgetComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    CurrencyMaskModule
  ],
  exports: [...COMPONENTS],
  declarations: [...COMPONENTS],
})
export class NgxDynamicWidgetModule { }
