import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PilotsComponent } from './components/pilots/pilots.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'pilots',
        component: PilotsComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
