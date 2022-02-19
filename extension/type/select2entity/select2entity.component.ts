import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormField } from 'src/app/core/models/form.models';
import { HttpService } from 'src/app/core/services/http.service';
import { FormService } from 'src/app/core/services/form.service';

@Component({
  selector: 'ngx-dynamic-form-extension-type-select2entity',
  templateUrl: './select2entity.component.html'
})
export class NgxDynamicFormExtensionTypeSelect2EntityComponent  implements OnInit {

  @Input() input: FormField<string>;
  @Input() form: FormGroup;
	loading: boolean = false
  response

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
    let route = `${this.input.remote_path}&${reqParams}`.replace(/&/gi,'%26')
    this.httpService.get(`/api/core/select/data.json?route=${route}`)
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