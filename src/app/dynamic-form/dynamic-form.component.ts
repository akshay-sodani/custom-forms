import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormConfigService } from '../form-config.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
})
export class DynamicFormComponent implements OnInit {
  form: FormGroup = this.fb.group({});
  sections: any[] = [];

  constructor(
    private fb: FormBuilder,
    private formConfigService: FormConfigService
  ) {}

  ngOnInit() {
    this.formConfigService.getFormConfig().subscribe((config) => {
      this.sections = config.sections;
      this.createForm(this.sections);
    });
  }

  createForm(sections: any[]) {
    const formControls: any = {};
    sections.forEach((section) => {
      section.fields.forEach((field: any) => {
        const validators = [];
        if (field.validation.required) validators.push(Validators.required);
        if (field.validation.email) validators.push(Validators.email);
        formControls[field.name] = ['', validators];
      });
    });
    this.form = this.fb.group(formControls);
  }

  getSectionClass(layout: string): string {
    switch (layout) {
      case '2x2':
        return 'grid-2x2';
      case '2x3':
        return 'grid-2x3';
      default:
        return '';
    }
  }

  getFieldClass(layout: string): string {
    return layout === '2x2' || layout === '2x3' ? 'field' : '';
  }
}
