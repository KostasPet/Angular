import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { DetailsComponent } from './vehicle/details/details.component';
import { LogsComponent } from './vehicle/logs/logs.component';
import { DetailsService } from './vehicle/details/details.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    VehicleComponent,
    DetailsComponent,
    LogsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      [{
        path: '',
        component: VehicleComponent
      },
      {
        path: 'details',
        component: DetailsComponent
      }
    ]
    )
  ],
  providers: [DetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
