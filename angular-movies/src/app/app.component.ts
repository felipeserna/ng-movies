import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: any;
  myKey: string = environment.apiKey;

  private _listFilter: string = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = value;
    this.ngOnInit();
  }

  filteredProducts: string = '';

  constructor(private http: HttpClient) {

  } 
  
  ngOnInit() {
    this.http.get(`https://www.omdbapi.com/?apikey=${this.myKey}&s=${this.filteredProducts}`)
    .subscribe((data: any) => {
      this.data = data;
    })
  }  
}
