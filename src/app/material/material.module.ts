import { NgModule } from '@angular/core';

import {MatMenuModule} from '@angular/material'

const MaterialComponents = [MatMenuModule];
@NgModule({
 
  imports: [MaterialComponents
 
  ],
  exports:[MaterialComponents]
})
export class MaterialModule { }
