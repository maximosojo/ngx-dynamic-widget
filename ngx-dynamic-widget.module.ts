import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CurrencyMaskConfig, CurrencyMaskModule, CURRENCY_MASK_CONFIG } from 'ng2-currency-mask';
import { RouterModule, Routes } from '@angular/router';

import {
    NgxDynamicWidgetExtensionTypeCheckboxComponent,
    NgxDynamicWidgetExtensionTypeChoiceComponent,
    NgxDynamicWidgetExtensionTypeChoiceMultipleComponent,
    NgxDynamicWidgetExtensionTypeDropdownComponent,
    NgxDynamicWidgetExtensionTypeMoneyComponent,
    NgxDynamicWidgetExtensionTypeSelect2EntityComponent,
    NgxDynamicWidgetExtensionTypeTelComponent,
    NgxDynamicWidgetExtensionTypeTextComponent,
    NgxDynamicWidgetExtensionTypeTextareaComponent,
    NgxDynamicWidgetExtensionTypeButtonComponent,
    NgxDynamicWidgetFormComponent,
    NgxDynamicWidgetTitleComponent,
    NgxDynamicWidgetSubTitleComponent,
    NgxDynamicWidgetListGroupComponent,
    NgxDynamicWidgetListGroupFlushComponent,
    NgxDynamicWidgetCardComponent,
    NgxDynamicWidgetCardActionTopComponent,
    NgxDynamicWidgetPreloaderComponent,
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
    NgxDynamicWidgetExtensionTypeTelComponent,
    NgxDynamicWidgetExtensionTypeTextComponent,
    NgxDynamicWidgetExtensionTypeTextareaComponent,
    NgxDynamicWidgetExtensionTypeButtonComponent,
    NgxDynamicWidgetResourcesUIHelpComponent,
    NgxDynamicWidgetResourcesUILabelComponent,
    NgxDynamicWidgetFormComponent,
    NgxDynamicWidgetTitleComponent,
    NgxDynamicWidgetSubTitleComponent,
    NgxDynamicWidgetListGroupComponent,
    NgxDynamicWidgetListGroupFlushComponent,
    NgxDynamicWidgetCardComponent,
    NgxDynamicWidgetCardActionTopComponent,
    NgxDynamicWidgetPreloaderComponent,
    NgxDynamicFormComponent,
    NgxDynamicWidgetComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    CurrencyMaskModule,
    RouterModule,
  ],
  exports: [
    RouterModule,
    ...COMPONENTS
  ],
  declarations: [...COMPONENTS],
})
export class NgxDynamicWidgetModule { }
