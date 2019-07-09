import {Component, OnInit} from '@angular/core';
import {Module} from '../models/module';
import {ModuleService} from '../services/module.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-create-action',
  templateUrl: './create-action.component.html',
  styleUrls: ['./create-action.component.css']
})
export class CreateActionComponent implements OnInit {
  addModuleForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private moduleService: ModuleService) { }

  ngOnInit() {
    this.addModuleForm = this.formBuilder.group({
      code: ['', Validators.required],
      name: ['', Validators.required]
    });
  }

  get f() {
    return this.addModuleForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.addModuleForm.invalid) {
      return;
    }

    this.loading = true;
    const module: Module = {
      code: this.f.code.value,
      name: this.f.name.value
    };
    this.moduleService.saveModule(module)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['/action']);
        },
        error => {
          this.loading = false;
        });
  }
}
