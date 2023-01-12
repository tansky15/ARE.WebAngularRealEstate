import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { Maison } from '../models/maison.model';
import { Agent } from '../models/agent.model';

@Injectable({
  providedIn: 'root'
})
export class MaisonsService {
  baseUrl = "http://10.30.40.121:3092/maison";

  constructor (private http:HttpClient){}

  getAllHouses():Observable <Maison[]>{
    return this.http.get<Maison[]>(`${this.baseUrl}/ListMaisons`);
  }

  create(data:any):Observable<any>{
    return this.http.post(`${this.baseUrl}/addMaison`,data);
  }

  findById(_id: any):Observable<any>{
    return this.http.get<Maison[]>(`${this.baseUrl}/readMaison/${_id}`);
  }
  update(_id:any,data:any):Observable<any>{
    return this.http.put(`${this.baseUrl}/upMaison/${_id}`,data);
  }
  deleteMaison(_id:any):Observable<any>{
    return this.http.delete(`${this.baseUrl}/delMaison/${_id}`);
  }


  //pour les agents
  updateAgent(_id:any,data:any):Observable<any>{
    return this.http.put(`${this.baseUrl}/upAgent/${_id}`,data);
  }
  deleteAgent(_id:any):Observable<any>{
    return this.http.delete(`${this.baseUrl}/delAgent/${_id}`);
  }
  findAgentById(_id: any):Observable<any>{
    return this.http.get<Agent[]>(`${this.baseUrl}/readAgent/${_id}`);
  }
  addAgent(data:any):Observable<any>{
    return this.http.post(`${this.baseUrl}/addAgent`,data);
  }
  getAllAgents():Observable <Agent[]>{
    return this.http.get<Agent[]>(`${this.baseUrl}/ListAgents`);
  }
}
