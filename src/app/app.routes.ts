import { Routes } from '@angular/router';
import {AddItem} from './add-item/add-item';
import {HomeComponent} from './home-component/home-component';

export const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "add", component: AddItem},
];
