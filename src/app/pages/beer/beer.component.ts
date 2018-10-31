import { Component, OnInit } from '@angular/core';
import { Beer } from 'src/app/models/beer';
import { BeerService } from 'src/app/services/beer.service';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css'],
})
export class BeerComponent implements OnInit {
  beers: Beer[] = [];
  // = [
  //   {
  //     name: 'Augustiner',
  //     alcPercent: 5,
  //     price: 1.19,
  //     tasteRating: 5,
  //   },
  //   {
  //     name: 'Pfungstädter',
  //     description: 'Die Plörre Hessens',
  //     price: 1,
  //     alcPercent: 4.7,
  //     tasteRating: 1,
  //   },
  // ];

  constructor(private beerService: BeerService) {}

  ngOnInit() {
    this.beerService.getBeers().then((beers) => {
      this.beers = beers;
    });
  }
}
