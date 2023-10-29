import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';
import { FormService } from 'src/app/core/services/ngx-dynamic-widget/services/form.service';

@Component({
  selector: 'ngx-dynamic-widget-form',
  templateUrl: './form.component.html'
})
export class NgxDynamicWidgetFormComponent implements OnInit  {

  @Input() data: any;
  submitted = false;
  loading = false;
  form: FormGroup;
  formProperty: any = null;
  formData = null;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private httpService: HttpService,
    private formService: FormService
    ) { }

  ngOnInit() {
    const data = this.data.data;
    this.formProperty = data
    this.form = this.formService.createForm(data.properties)
    this.formData = this.formService.createView()
  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  /**
   * On submit form
   */
   onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    this.loading = true;
    const data: any = {};
    data[this.formProperty.name] = this.form.value    
    this.httpService
        .post(this.formProperty.action,data)
        .subscribe({
          complete: () => {
            this.loading = false;
          },
          error: () => {
            this.loading = false;
          },
          next: () => {
            
          },  
        })
  }
}