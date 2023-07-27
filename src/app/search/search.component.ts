import { Component,OnInit } from '@angular/core';
import { Person, SearchService } from '../shared';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})


export class SearchComponent implements OnInit {
  query!: string; // query: string = ''; will also work
  searchResults: Person[] = [];
  constructor(private searchService: SearchService, private route: ActivatedRoute) { }
  ngOnInit(): void { }

  
  search(): void {
    this.searchService.getAll().subscribe({
    next: (data: Person[]) => {
    this.searchResults = data;
    },
    error: error => console.log(error)
    });
    }
  }