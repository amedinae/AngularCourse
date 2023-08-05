import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showDetails: boolean = false;
  clickLog: Date[] = [];

  toggleDetails() {
    this.showDetails = !this.showDetails;
    this.clickLog.push(new Date());
  }
}
