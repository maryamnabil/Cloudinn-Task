import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../services/service.service';
// import {DragulaService} from 'ng2-dragula/dist/components/dragula.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  JsonData :any;
  persons:any;

// injecting the service into the component
  constructor(private service: ServiceService ) { }
// The json data needed from the API are in results that's why we are making a new variable to append the data.results to to use in html easily 
  
    GetPeopleFromService(){
    this.service.GetAllPeople().subscribe((res) => {
      this.JsonData = res;
      this.persons= this.JsonData.results
    });

  }

// Calling this function on ngInit for the informtion to be loaded whenever the page loads
  ngOnInit() {
    this.GetPeopleFromService();
  }

}
