import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subtema',
  templateUrl: './subtema.component.html',
  styleUrls: ['./subtema.component.css']
})
export class SubtemaComponent implements OnInit {

  id: number | null;

  constructor(private aRouter: ActivatedRoute,) {
    this.id =  Number(aRouter.snapshot.paramMap.get('idSubtema'));
   }

  ngOnInit(): void {
    this.aRouter.params.subscribe(newParams => {
       this.id = newParams["idSubtema"];
 });
  }

}
