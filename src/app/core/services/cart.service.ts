import { Injectable } from '@angular/core';
import { subscribe } from 'diagnostics_channel';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  counter = new BehaviorSubject<number>(0)
}
