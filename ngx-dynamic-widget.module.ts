import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CurrencyMaskConfig, CurrencyMaskModule, CURRENCY_MASK_CONFIG } from 'ng2-currency-mask';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

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
    NgxDynamicWidgetHeadingComponent,
    NgxDynamicWidgetFormComponent,
    NgxDynamicWidgetButtonComponent,
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
    NgxDynamicWidgetHeadingComponent,
    NgxDynamicWidgetFormComponent,
    NgxDynamicWidgetButtonComponent,
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
    MatIconModule,
  ],
  exports: [
    RouterModule,
    MatIconModule,
    ...COMPONENTS
  ],
  declarations: [...COMPONENTS],
})
export class NgxDynamicWidgetModule { }
