import { Component, OnInit } from '@angular/core';
import { MaisonsService } from 'src/app/services/maisons.service';
import { Maison } from 'src/app/models/maison.model';

@Component({
  selector: 'app-pr-sub3-liste-maisons',
  templateUrl: './pr-sub3-liste-maisons.component.html',
  styleUrls: ['./pr-sub3-liste-maisons.component.css']
})
export class PrSub3ListeMaisonsComponent implements OnInit {

  Maisons : Maison[] | undefined;
  constructor(private MaisonService:MaisonsService) { }

  ngOnInit(): void {
    this.retrieveMaisons();
  }
  retrieveMaisons(){
    this.MaisonService.getAllHouses().subscribe({
      next:(data)=> this.Maisons=(data),
      error:(e)=>console.error(e),
      complete:()=>console.log('get all done')
    })
  }

}
