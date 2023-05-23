import { NgModule } from '@angular/core';
import { TestingAngularAppComponent } from './testing-angular-app.component';
import { InputComponent } from './input/input.component';



@NgModule({
  declarations: [
    TestingAngularAppComponent,
    InputComponent
  ],
  imports: [
  ],
  exports: [
    TestingAngularAppComponent
  ]
})
export class TestingAngularAppModule { }
