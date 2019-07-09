import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ModuleService} from '../services/module.service';
import {Module} from '../models/module';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-update-action',
  templateUrl: './update-action.component.html',
  styleUrls: ['./update-action.component.css']
})
export class UpdateActionComponent implements OnInit {
  module: Module;
  selectedId: number;
  editModuleForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute,
              private router: Router, private moduleService: ModuleService) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.selectedId = params.id;
      }
    );
    this.moduleService.getModule(this.selectedId)
      .subscribe(data => {
        this.module = data.DATA as Module;
        this.f.code.setValue(this.module.code);
        this.f.name.setValue(this.module.name);
      });

    this.editModuleForm = this.formBuilder.group({
      code: ['', Validators.required],
      name: ['', Validators.required]
    });
  }

  get f() {
    return this.editModuleForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.editModuleForm.invalid) {
      return;
    }

    this.loading = true;
    const module: Module = {
      code: this.f.code.value,
      name: this.f.name.value
    };

    this.moduleService.updateModule(module, this.selectedId)
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
