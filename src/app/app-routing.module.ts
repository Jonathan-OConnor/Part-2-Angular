import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatsComponent } from './cats/cats.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  {path: 'Cats', component: CatsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }