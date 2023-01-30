import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClimaComponent } from './componentes/clima/clima.component';
import { MainComponent } from './componentes/main/main.component';

const routes: Routes = [
  {path:'main', component: MainComponent},
  {path: 'clima', component: ClimaComponent},
  {path:'', redirectTo: '/main',  pathMatch:'full'},
  {path: '**', component: MainComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot (routes),
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
