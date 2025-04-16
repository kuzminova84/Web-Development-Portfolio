import { Component } from '@angular/core';
import { DataService } from './data.service';
import { Kuzminoo } from './kuzminoo';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'kuzminoo-A4';
  info: Kuzminoo;

    constructor(private dataService: DataService) {
        this.info = this.dataService.getData();
    }
}
