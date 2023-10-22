import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HometestPageRoutingModule } from './hometest-routing.module';

import { HometestPage } from './hometest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HometestPageRoutingModule
  ],
  declarations: [HometestPage]
})
export class HometestPageModule {}
