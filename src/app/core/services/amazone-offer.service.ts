import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Amazonoffer } from '../interfaces/amazone-offer.model';

@Injectable({
  providedIn: 'root'
})
export class AmazoneOfferService {

  amazonoffersApi = '/API/amazon-offers.json';
  BestSellerApi = '/API/BestSeller.json';
  BestsellerclothingApi = '/API/Best-seller-clothing.json';
  KitchenToolsApi = '/API/Kitchen-Tools.json';

  constructor(private HTTP:HttpClient) { }

  getOffers() {
    return this.HTTP.get<Amazonoffer[]>(this.amazonoffersApi);
  }

  getBestseller() {
    return this.HTTP.get<Amazonoffer[]>(this.BestSellerApi);
  }

  getBestsellerclothing() {
    return this.HTTP.get<string[]>(this.BestsellerclothingApi);
  }

  getKitchenTools() {
    return this.HTTP.get<string[]>(this.KitchenToolsApi);
  }

}
