import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { SignupRoutingModule } from './signup-routing.module';
import { FormsModule } from '@angular/forms';
import {ServicesProvider} from '../../../service/services';
import { HttpClient } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    SignupRoutingModule,
    FormsModule
  ],
  providers: [
    HttpClient,
    ServicesProvider
  ],
  declarations: [SignupComponent]
})
export class SignupModule { }
