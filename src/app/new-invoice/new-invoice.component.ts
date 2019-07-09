import {Component, OnInit} from '@angular/core';
import {ModuleService} from '../services/module.service';
import {Module} from '../models/module';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-invoice',
  templateUrl: './new-invoice.component.html',
  styleUrls: ['./new-invoice.component.css']
})
export class NewInvoiceComponent implements OnInit {
  moduleList: Module[];

  constructor(private router: Router, private moduleService: ModuleService) {
  }

  ngOnInit() {
    this.moduleService.getModules()
      .subscribe(data => {
        this.moduleList = data.DATA as Module[];
        console.log(this.moduleList);
      });
  }

  onSave() {
    this.router.navigate(['/create']);
  }

  onDelete(moduleId: number, model: Module) {
    this.moduleService.deleteModule(moduleId)
      .subscribe(resp => {
        const index = this.moduleList.indexOf(model);
        this.moduleList.splice(index, 1);
        console.log(resp);
    });
  }

  onEdit(moduleId: number) {
    this.router.navigate(['/edit', moduleId]);
  }
}
