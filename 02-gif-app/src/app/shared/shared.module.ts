import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GifsModule } from '../gifs/gifs.module';

import { SidebarComponent } from './components/sidebar/sidebar.component';

import { GifService } from '../gifs/services/gif-service.service';


@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarComponent
  ]
})
export class SharedModule { }
