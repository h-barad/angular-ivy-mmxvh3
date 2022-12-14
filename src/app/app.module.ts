import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NewComponent } from './new-component/nc.component';
import { AppRoutingModule } from './app-routing.module';
import { TableComponent } from './table-component/table.component';
import { HomeComponent } from './home-component/hc.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [AppComponent, NewComponent, TableComponent, HomeComponent],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule {}
