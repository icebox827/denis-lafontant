import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JumbotronComponent} from './jumbotron/jumbotron.component';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { ServicesComponent } from './services/services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';  


const routes: Routes = [
  { path: '', component: JumbotronComponent},
  { path: 'jumbotron', component: JumbotronComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'portfolio', component: PortfolioComponent},
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
