import { Component, OnInit } from '@angular/core';
import { MaisonsService } from 'src/app/services/maisons.service';
import { Maison } from 'src/app/models/maison.model';
import { Agent } from 'src/app/models/agent.model';

@Component({
  selector: 'app-pr-sub7-liste-agents',
  templateUrl: './pr-sub7-liste-agents.component.html',
  styleUrls: ['./pr-sub7-liste-agents.component.css']
})
export class PrSub7ListeAgentsComponent implements OnInit {
  Agents : Agent[] | undefined;
  constructor(private MaisonService:MaisonsService) { }

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

}
