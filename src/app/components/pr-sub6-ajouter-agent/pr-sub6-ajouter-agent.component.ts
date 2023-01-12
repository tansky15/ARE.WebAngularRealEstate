import { Component, OnInit } from '@angular/core';
import { Agent } from 'src/app/models/agent.model';
import { MaisonsService } from 'src/app/services/maisons.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-pr-sub6-ajouter-agent',
  templateUrl: './pr-sub6-ajouter-agent.component.html',
  styleUrls: ['./pr-sub6-ajouter-agent.component.css']
})
export class PrSub6AjouterAgentComponent implements OnInit {
  agent:Agent={
    nom:'',
    numero:''
    }
    constructor(private MaisonService : MaisonsService,
      private route:ActivatedRoute,
      private router:Router) { }

  ngOnInit(): void {
  }
  saveAgent():void{
    const data = {
      nom:this.agent.nom,
      numero:this.agent.numero,
    };
    this.MaisonService.addAgent(data).subscribe({
      next: ()=> console.log("Ajout agent fait"),
      error: (e)=> console.error(e),
      complete: ()=> this.router.navigate(['/liste-agents'])
    })
  }

}
