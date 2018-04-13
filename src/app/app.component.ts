import {Component} from '@angular/core';

@Component({
  selector: 'rra-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  users: Array<any>;

  constructor() {
    $(document).ready(function () {
      //    $('#records').DataTable();
    });
  }

}
