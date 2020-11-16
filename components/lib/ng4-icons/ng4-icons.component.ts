import { Component, Input, OnInit, SimpleChanges } from '@angular/core';



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
      console.error('Icon not found. Defaulting to alert icon.');
    } else {
      this.data = path;
    }
  }

  data: string = 'M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z';

  ngOnChanges(changes: SimpleChanges) {
    if (this.iconPath) {
      this.setPath(changes.iconPath.currentValue);
    }
  }




}
