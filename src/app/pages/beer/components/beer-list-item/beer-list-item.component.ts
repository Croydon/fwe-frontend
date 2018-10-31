import { Component, OnInit, Input } from '@angular/core';
import { Beer } from 'src/app/models/beer';

@Component({
  selector: 'app-beer-list-item',
  templateUrl: './beer-list-item.component.html',
  styleUrls: ['./beer-list-item.component.css'],
})
export class BeerListItemComponent implements OnInit {
  @Input('beerItem')
  beer: Beer;

  constructor() {}

  ngOnInit() {}
}
