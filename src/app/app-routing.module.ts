import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAccessControlComponent } from './components/add-access-control/add-access-control.component';

const routes: Routes = [
{
path: "", redirectTo: "AddAccessControl", pathMatch: "full"
},
  {
    path: "AddAccessControl", component: AddAccessControlComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
