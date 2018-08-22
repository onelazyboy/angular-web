import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkComponent } from './work.component';
import { WorkRoutingModule } from './work-routing.module';
import { StepsModule } from '../../../components/home/steps/steps.module';
import { FoodModule } from '../../../components/home/food/food.module';
import {ServicesProvider} from '../../../service/services';
@NgModule({
  imports: [
    CommonModule,
    WorkRoutingModule,
    StepsModule,
    FoodModule
  ],
  providers:[
    ServicesProvider
  ],
  declarations: [WorkComponent]
})
export class WorkModule { }
