import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrSub3ListeMaisonsComponent } from './components/pr-sub3-liste-maisons/pr-sub3-liste-maisons.component';
import { PrSub4AjouterMaisonComponent } from './components/pr-sub4-ajouter-maison/pr-sub4-ajouter-maison.component';
import { PrSub5ModifierMaisonComponent } from './components/pr-sub5-modifier-maison/pr-sub5-modifier-maison.component';
import { PrSub6AjouterAgentComponent } from './components/pr-sub6-ajouter-agent/pr-sub6-ajouter-agent.component';
import { PrSub7ListeAgentsComponent } from './components/pr-sub7-liste-agents/pr-sub7-liste-agents.component';
import { PrSub8ModifierAgentComponent } from './components/pr-sub8-modifier-agent/pr-sub8-modifier-agent.component';
const routes: Routes = [
  {path:'liste-maisons',component:PrSub3ListeMaisonsComponent},
  {path:'ajoutmaison',component:PrSub4AjouterMaisonComponent},
  {path:'liste-maisons/:id',component:PrSub5ModifierMaisonComponent},
  {path:'ajout-agents',component:PrSub6AjouterAgentComponent},
  {path:'liste-agents',component:PrSub7ListeAgentsComponent},
  {path:'modifierAgent/:id',component:PrSub8ModifierAgentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
