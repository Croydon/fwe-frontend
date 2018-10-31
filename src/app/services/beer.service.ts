import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Beer } from '../models/beer';

@Injectable({
  providedIn: 'root',
})
export class BeerService {
  baseUrl = 'http://localhost:3000/api/beer';

  constructor(private httpClient: HttpClient) {}

  async getBeer(beerId: string) {
    const result = await this.httpClient.get<any>(`${this.baseUrl}/${beerId}`).toPromise();
    return result.data;
  }

  async getBeers() {
    const result = await this.httpClient.get<any>(this.baseUrl).toPromise();
    return result.data;
  }
  async createBeer(beer: Beer) {
    const result = await this.httpClient.post<any>(this.baseUrl, beer).toPromise();
    return result.data;
  }

  async updateBeer(beer: Beer) {
    const result = await this.httpClient.put<any>(`${this.baseUrl}/${beer._id}`, beer).toPromise();
    return result.data;
  }

  async deleteBeer(beerId: string) {
    const result = await this.httpClient.delete(`${this.baseUrl}/${beerId}`).toPromise();
    return result;
  }
}
