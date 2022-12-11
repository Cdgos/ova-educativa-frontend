import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  
  private fragment = "";

  constructor(private route: ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    this.route.fragment.subscribe(fragment => { 
      this.fragment = fragment!; 
      this.route.params.subscribe(newParams => {
        console.log(this.fragment);
        document.querySelector('#' + this.fragment)?.scrollIntoView();
  });
    });
   
  }

  ngAfterViewInit(): void {
    try {
      document.querySelector('#' + this.fragment)?.scrollIntoView();
    } catch (e) { }
  }
}
