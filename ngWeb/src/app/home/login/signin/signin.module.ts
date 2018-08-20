import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin.component';
import { SigninRoutingModule } from './signin-routing.module';
import { FormsModule } from '@angular/forms';
import {ServicesProvider} from '../../../service/services';

@NgModule({
  imports: [
    CommonModule,
    SigninRoutingModule,
    FormsModule
  ],
  providers:[
    ServicesProvider
  ],
  declarations: [SigninComponent]
})
export class SigninModule { }
