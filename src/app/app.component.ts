import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'invoicing-slt';
  chatuska = 'Hi .....';
  isClick = false;
  student = {name: 'How are you?'};
  job = 'sjskfs';
  test() {
    this.isClick = true;
  }
}
