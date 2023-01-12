import { Component, OnInit } from '@angular/core';
import { Agent } from 'src/app/models/agent.model';
import { MaisonsService } from 'src/app/services/maisons.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pr-sub8-modifier-agent',
  templateUrl: './pr-sub8-modifier-agent.component.html',
  styleUrls: ['./pr-sub8-modifier-agent.component.css']
})
export class PrSub8ModifierAgentComponent implements OnInit {

  currentAgent:Agent={
    nom:'',
    numero:''
    }
    constructor(private MaisonService : MaisonsService,
      private route:ActivatedRoute,
      private router:Router) { }


  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get('id'));
    this.getAgent(this.route.snapshot.paramMap.get('id'));
  }


  getAgent(_id:any):void{
    this.MaisonService.findAgentById(_id).subscribe({
      next:(data)=>this.currentAgent=data,
      error:(e)=>console.error(e)
    })
  }

  deleteAgent(_id:any):void{
     this.MaisonService.deleteAgent(this.currentAgent._id)
     .subscribe({
       next:()=>console.log("Delete done"),
      // error:(e)=>console.error(e),
       complete: ()=> this.router.navigate(['/liste-agents'])
     });
  }

  updateAgent(): void{
    this.MaisonService.updateAgent(this.currentAgent._id,this.currentAgent)
    .subscribe({
      next:()=>console.log("update done"),
      complete: ()=> this.router.navigate(['/liste-agents']),
      error:(e)=>console.error(e)
      });
  }

}
