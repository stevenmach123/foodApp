import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HometestPage } from './hometest.page';

const routes: Routes = [
  {
    path: '',
    component: HometestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HometestPageRoutingModule {}
