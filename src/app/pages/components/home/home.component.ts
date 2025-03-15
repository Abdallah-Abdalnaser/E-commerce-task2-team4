import { Component, OnInit } from '@angular/core';
import { Amazonoffer } from '../../../core/interfaces/amazone-offer.model';
import { AmazoneOfferService } from '../../../core/services/amazone-offer.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  offers:Amazonoffer[] = [];
  Bestseller:Amazonoffer[] = [];
  Bestsellerclothing:string[] = [];
  KitchenTools:string[] = [];

  constructor(private AmazoneOfferService:AmazoneOfferService) {
  }

  ngOnInit(): void {
    this.getAmazoneoffer();
    this.getBestSeller();
    this.getBestsellerclothing();
    this.getKitchenTools();
  }

  getAmazoneoffer() {
    this.AmazoneOfferService.getOffers().subscribe(
      (data:Amazonoffer[])=> {
        this.offers = data;
      }
    )
  }

  getBestSeller() {
    this.AmazoneOfferService.getBestseller().subscribe(
      (data:Amazonoffer[]) => {
        this.Bestseller = data;
      }
    )
  }

  getBestsellerclothing() {
    this.AmazoneOfferService.getBestsellerclothing().subscribe(
      (data:string[]) => {
        this.Bestsellerclothing = data;
      }
    )
  }

  getKitchenTools() {
    this.AmazoneOfferService.getKitchenTools().subscribe(
      (data:string[]) => {
        this.KitchenTools = data;
      }
    )
  }
}
