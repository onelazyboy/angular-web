import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkComponent } from './work.component';
import { ResolveWorkService } from '../../../app-routes/resolve-work.service';

const routes: Routes = [{
  path:'',
  component:WorkComponent,
  resolve:{
    data: ResolveWorkService
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkRoutingModule { }
