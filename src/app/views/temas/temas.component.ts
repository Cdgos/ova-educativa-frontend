import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-temas',
  templateUrl: './temas.component.html',
  styleUrls: ['./temas.component.css']
})
export class TemasComponent implements OnInit {

  id: number | null;

  constructor(private aRouter: ActivatedRoute,) {
    this.id =  Number(aRouter.snapshot.paramMap.get('idTema'));
   }

  ngOnInit(): void {
    this.aRouter.params.subscribe(newParams => {
       this.id = newParams["idTema"];
 });
  }

}
