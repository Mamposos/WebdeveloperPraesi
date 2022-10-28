import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EightComponent } from './eight/eight.component';
import { FiveComponent } from './five/five.component';
import { FourComponent } from './four/four.component';
import { NineComponent } from './nine/nine.component';
import { OneComponent } from './one/one.component';
import { SevenComponent } from './seven/seven.component';
import { SixComponent } from './six/six.component';
import { ThreeComponent } from './three/three.component';
import { TwoComponent } from './two/two.component';

const routes: Routes = [
  { path: "", redirectTo: "/one", pathMatch: "full" },
  { path: "one", component: OneComponent },
  { path: "two", component: TwoComponent },
  { path: "three", component: ThreeComponent },
  { path: "four", component: FourComponent },
  { path: "five", component: FiveComponent },
  { path: "six", component: SixComponent },
  { path: "seven", component: SevenComponent },
  { path: "eight", component: EightComponent },
  { path: "nine", component: NineComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
