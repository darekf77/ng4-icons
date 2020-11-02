import { IconService } from 'components';
import { Component } from '@angular/core';
import home from '@iconify/icons-mdi/home';
import groupAdd from '@iconify/icons-mdi/group-add';
import bellSlash from '@iconify/icons-fa-solid/bell-slash';
import { appIcons } from './icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  homeIcon = home;
  groupAddIcon = groupAdd;
  bellSlashIcon = bellSlash;

  constructor(iconService: IconService){
    iconService.registerAll(appIcons);
  }
}
