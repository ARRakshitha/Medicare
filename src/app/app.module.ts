import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddcustComponent } from './addcust/addcust.component';
import { CuslistComponent } from './cuslist/cuslist.component';
import { CustdetailsComponent } from './custdetails/custdetails.component';
import { EditcustComponent } from './editcust/editcust.component';
import { MedicenListComponent } from './medicen-list/medicen-list.component';
import { MedicenimajesComponent } from './medicenimajes/medicenimajes.component';

@NgModule({
  declarations: [
    AppComponent,
    AddcustComponent,
    CuslistComponent,
    CustdetailsComponent,
    EditcustComponent,
    MedicenListComponent,
    MedicenimajesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
