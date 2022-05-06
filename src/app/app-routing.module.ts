import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './components/category/category.component';
import { ChickenComponent } from './components/chicken/chicken.component';
import { HeaderComponent } from './components/header/header.component';





const routes: Routes = [

  {path:'header', component:HeaderComponent},
  {path:'category', component:CategoryComponent},
  { path:'chicken',component:ChickenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
