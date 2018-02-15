import { Component, OnInit } from '@angular/core';
import { DetailsService } from './details.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  constructor(private detailsService: DetailsService) {}

  onSave() {
    this.detailsService.storeDetails(this.items)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }

  onGet() {
    this.detailsService.getDetails()
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }

  // tslint:disable-next-line:member-ordering
  items = [
    { 'name': 'Valstybinis numeris', 'value': 'JNJ 727' },
    { 'name': 'Vardas', 'value': 'Kostas' },
    { 'name': 'pavardė', 'value': 'Petrošius' },
    { 'name': 'Markė', 'value': 'BMW' },
    { 'name': 'Modelis', 'value': '320d' }
  ];

ngOnInit() {
}

}
