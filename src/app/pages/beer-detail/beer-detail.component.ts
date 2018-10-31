import { Component, OnInit } from '@angular/core';
import { Beer } from 'src/app/models/beer';
import { BeerService } from 'src/app/services/beer.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-beer-detail',
  templateUrl: './beer-detail.component.html',
  styleUrls: ['./beer-detail.component.css'],
})
export class BeerDetailComponent implements OnInit {
  beer: Beer;
  mode: 'new' | 'edit' | 'view' = 'view';

  constructor(private beerService: BeerService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const beerId = params.get('beerId');
      if (beerId == 'new') {
        this.mode = 'new';
        this.beer = new Beer();
      } else {
        this.beerService.getBeer(beerId).then((beer) => {
          this.beer = beer;
        });
      }
    });
  }

  async onSaveClicked() {
    try {
      if (this.mode === 'new') {
        await this.beerService.createBeer(this.beer);
        this.router.navigate(['/beer']);
      } else if (this.mode === 'edit') {
        await this.beerService.updateBeer(this.beer);
        this.mode = 'view';
      }
    } catch (error) {
      console.log(error);
    }
  }

  onEditClicked() {
    this.mode = 'edit';
  }

  onBackClicked() {
    this.router.navigate(['/beer']);
  }

  async onDeleteClicked() {
    try {
      await this.beerService.deleteBeer(this.beer._id);
      this.router.navigate(['/beer']);
    } catch (error) {
      console.log(error);
    }
  }
}
