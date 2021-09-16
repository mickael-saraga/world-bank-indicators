import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatListModule } from "@angular/material/list";
import { MatSelectModule } from "@angular/material/select";
import { MatTableModule } from "@angular/material/table";
import { FormsModule } from "@angular/forms";
import { CountriesDataService } from "../../countries-data.service";
import { DashboardComponent } from "./dashboard.component";

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatSelectModule,
    MatTableModule,
    FormsModule
  ],
  exports: [
    DashboardComponent
  ],
  providers: [
    CountriesDataService
  ]
})
export class DashboardModule { }