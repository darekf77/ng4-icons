import { mdiAccount } from '@mdi/js'
import { mdiAbjadHebrew } from '@mdi/js'
import { mdiHome } from '@mdi/js';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  mdiAccount = mdiAccount;
  mdiHome = mdiHome;
  mdiAbjadHebrew = mdiAbjadHebrew;
  constructor() {

  }
}
