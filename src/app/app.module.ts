import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrSub1MenuComponent } from './components/pr-sub1-menu/pr-sub1-menu.component';
import { PrSub2FooterComponent } from './components/pr-sub2-footer/pr-sub2-footer.component';
import { PrSub3ListeMaisonsComponent } from './components/pr-sub3-liste-maisons/pr-sub3-liste-maisons.component';
import { PrSub4AjouterMaisonComponent } from './components/pr-sub4-ajouter-maison/pr-sub4-ajouter-maison.component';
import { FormsModule } from '@angular/forms';
import { PrSub5ModifierMaisonComponent } from './components/pr-sub5-modifier-maison/pr-sub5-modifier-maison.component';
import { PrSub6AjouterAgentComponent } from './components/pr-sub6-ajouter-agent/pr-sub6-ajouter-agent.component';
import { PrSub7ListeAgentsComponent } from './components/pr-sub7-liste-agents/pr-sub7-liste-agents.component';
import { PrSub8ModifierAgentComponent } from './components/pr-sub8-modifier-agent/pr-sub8-modifier-agent.component';

@NgModule({
  declarations: [
    AppComponent,
    PrSub1MenuComponent,
    PrSub3ListeMaisonsComponent,
    PrSub4AjouterMaisonComponent,
    PrSub2FooterComponent,
    PrSub5ModifierMaisonComponent,
    PrSub6AjouterAgentComponent,
    PrSub7ListeAgentsComponent,
    PrSub8ModifierAgentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
