import {Component} from '@angular/core';
import {DataService} from '../../data.service';

@Component({
  selector: 'rra-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  users: Array<any>;

  constructor(private _dataService: DataService) {
    this._dataService.getUsers()
      .subscribe(res => this.users = res);
  }
}
