//#region @notForNpm
//#region @browser
import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
selector: 'app-ng4-icons',
template: 'hello from ng4-icons'
})
export class Ng4IconsComponent implements OnInit {
constructor() { }

ngOnInit() { }
}

@NgModule({
imports: [],
exports: [Ng4IconsComponent],
declarations: [Ng4IconsComponent],
providers: [],
})
export class Ng4IconsModule { }
//#endregion

//#region @backend
async function start(port: number)  {

}

export default start;

//#endregion

//#endregion