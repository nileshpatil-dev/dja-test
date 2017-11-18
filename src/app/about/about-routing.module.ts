import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route } from '../core/route.service';
import { AboutComponent } from './about.component';
import { ProfileComponent } from './profile/profile.component';
import { ContactComponent } from './contact/contact.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = Route.withShell([
  // { path: 'about', component: AboutComponent, data: { title: 'About' } },
  { path: 'aboutus/profile', component: ProfileComponent, data: { title: 'Profile' } },
  { path: 'aboutus/team', component: TeamComponent, data: { title: 'Team' } },
  { path: 'aboutus/contact', component: ContactComponent, data: { title: 'Contact' } }
]);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
  declarations: [ProfileComponent, ContactComponent, TeamComponent]
})
export class AboutRoutingModule { }
