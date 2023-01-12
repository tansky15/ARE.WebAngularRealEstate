import { Component, OnInit } from '@angular/core';
import { Maison } from 'src/app/models/maison.model';
import { MaisonsService } from 'src/app/services/maisons.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Agent } from 'src/app/models/agent.model';


@Component({
  selector: 'app-pr-sub4-ajouter-maison',
  templateUrl: './pr-sub4-ajouter-maison.component.html',
  styleUrls: ['./pr-sub4-ajouter-maison.component.css']
})
export class PrSub4AjouterMaisonComponent implements OnInit {
  maison:Maison={
  code:'',
  titre:'',
  description:'',
  prix:0,
  adresse:'',
  agent:''
  }
  Agents : Agent[] | undefined;
  constructor(private MaisonService : MaisonsService,
    private route:ActivatedRoute,
    private router:Router) { }
    ngOnInit(): void {
      this.retrieveAgents();
    }
    retrieveAgents(){
      this.MaisonService.getAllAgents().subscribe({
        next:(data)=> this.Agents=(data),
        error:(e)=>console.error(e),
        complete:()=>console.log('get all done')
      })
    }

  saveMaison():void{
    const data = {
      code:this.maison.code,
      titre:this.maison.titre,
      description:this.maison.description,
      prix:this.maison.prix,
      adresse:this.maison.adresse,
      agent:this.maison.agent
    };
    this.MaisonService.create(data).subscribe({
      next: ()=> console.log("Ajout fait"),
      error: (e)=> console.error(e),
      complete: ()=> this.router.navigate(['/liste-maisons'])
    })
  }

}
