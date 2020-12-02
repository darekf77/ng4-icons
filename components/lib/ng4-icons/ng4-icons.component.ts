import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Log, Level } from 'ng2-logger';
const log = Log.create(`[ng4-icons] component`);

import { mdiPin } from '@mdi/js';
import { mdiPinOff } from '@mdi/js';

const customIconsByName = {
  pin: mdiPin,
  'pin-off': mdiPinOff,
}


@Component({
  selector: 'ng4-icons',
  templateUrl: './ng4-icons.component.html',
  styleUrls: ['./ng4-icons.component.scss']
})
export class Ng4IconsComponent {

  @Input() label: string;
  @Input('name') iconName: string;
  @Input('path') iconPath: string;
  setPath(path: string) {
    if (path == undefined || path == null) {
      log.error('Icon not found. Defaulting to alert icon.');
    } else {
      this.data = path;
    }
  }

  data: string = 'M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z';

  ngOnInit() {
    log.d(`ngOnInit`)
    if (this.iconPath) {
      log.warn(`Please try to use icon by name not by icon path ("${this.iconPath}") `);
    }
    if (this.localMode) {
      this.iconPath = customIconsByName[this.iconName];
      this.setPath(customIconsByName[this.iconPath]);
    }
  }

  get localMode() {
    return !!customIconsByName[this.iconName];
  }

  ngOnChanges(changes: SimpleChanges) {
    // log.d(`ngOnChanges`)

    if (this.localMode) {
      const d = customIconsByName[changes.iconName.currentValue] ? customIconsByName[changes.iconName.currentValue] : this.iconPath;
      // log.d(`set to lcal mode: ${d}`)
      this.setPath(d);
    } else {
      if (this.iconPath) {
        this.setPath(changes.iconPath.currentValue);
      }
    }
  }
}




}
