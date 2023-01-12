import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Maison } from 'src/app/models/maison.model';
import { Agent } from 'src/app/models/agent.model';
import { MaisonsService } from 'src/app/services/maisons.service';

@Component({
  selector: 'app-pr-sub5-modifier-maison',
  templateUrl: './pr-sub5-modifier-maison.component.html',
  styleUrls: ['./pr-sub5-modifier-maison.component.css']
})
export class PrSub5ModifierMaisonComponent implements OnInit {

  currentMaison:Maison={
    _id:'',
    code:'',
    titre:'',
    description:'',
    prix:0,
    adresse:'',
    agent:'',
  }

  constructor(private maisonService:MaisonsService,
    private route:ActivatedRoute,private router:Router) { }
    Agents : Agent[] | undefined;

    retrieveAgents(){
        this.maisonService.getAllAgents().subscribe({
          next:(data)=> this.Agents=(data),
          error:(e)=>console.error(e),
          complete:()=>console.log('get all done')
        })
      }

  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get('id'));
    this.getMaison(this.route.snapshot.paramMap.get('id'));

    this.retrieveAgents();
  }

  getMaison(_id:any):void{
    this.maisonService.findById(_id).subscribe({
      next:(data)=>this.currentMaison=data,
      error:(e)=>console.error(e)
    })
  }

  deleteMaison(_id:any):void{
     this.maisonService.deleteMaison(this.currentMaison._id)
     .subscribe({
       next:()=>console.log("Delete done"),
      // error:(e)=>console.error(e),
       complete: ()=> this.router.navigate(['/liste-maisons'])
     });
  }

  cancelMaison():void{
    console.log("Cancel")
    this.router.navigate(['/liste-maisons'])
  }

  updateMaison(): void{
    this.maisonService.update(this.currentMaison._id,this.currentMaison)
    .subscribe({
      next:()=>console.log("update done"),
      complete: ()=> this.router.navigate(['/liste-maisons']),
      error:(e)=>console.error(e)
      });
  }


}
