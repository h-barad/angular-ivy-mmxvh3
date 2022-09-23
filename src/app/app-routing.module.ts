import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home-component/hc.component';
import { NewComponent } from './new-component/nc.component';
import { TableComponent } from './table-component/table.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'newc', component: NewComponent },
  { path: 'table', component: TableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
