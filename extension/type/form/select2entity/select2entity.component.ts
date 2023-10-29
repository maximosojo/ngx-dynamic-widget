import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormField } from '../../../../models/form.models';
import { HttpService } from 'src/app/core/services/http.service';
import { FormService } from '../../../../services/form.service';

@Component({
  selector: 'ngx-dynamic-widget-extension-type-form-select2entity',
  templateUrl: './select2entity.component.html'
})
export class NgxDynamicWidgetExtensionTypeSelect2EntityComponent  implements OnInit {

  @Input() input: FormField<string>;
  @Input() form: FormGroup;
	loading: boolean = false
  response: any;

  constructor(private httpService: HttpService,private formService: FormService) { }

  get f() { return this.form.controls; }

  remotePath = null

  ngOnInit() {
    this.formService.choiceSelected.subscribe(choiceSelected => {
      this.onRender()
    })

    this.onRender()
  }

  onRender() {
    // Loading
    this.loading = true;
    // Parameters
    let reqParams = "";
    for (let req_param in this.input.req_params) {
      reqParams += `${req_param}=${this.form.value[req_param]}`
    }
    // Route
    // let route = `${this.input.remote_path}&${reqParams}`.replace(/&/gi,'%26')
    let route = `${this.input.remote_path}&${reqParams}`
    this.httpService.get(`${route}`)
		.subscribe({
			complete: () => {
				this.loading = false;
			},
			next: (data:any) => {
          this.response = data
			}
		})
  }

  onClick() {
    // this.formService.onChoiceSelected()
  }
}