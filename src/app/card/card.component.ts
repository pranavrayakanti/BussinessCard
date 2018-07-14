import { Component, Input, Output, OnInit } from '@angular/core';
import { CardsService } from '../services/cardsapp.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Card } from './card';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent  {
card:Card;
    cards = this.cardsService.getCards();
  count: number;
  constructor(private cardsService: CardsService,
    private routerdetail: Router,private _acrouter:ActivatedRoute) {
     
  }
   onClick(id: number) {
    this.routerdetail.navigate(['cards', id]);
  }
editcard(id:number){
  this.routerdetail.navigate(['edit', id]);
  }

  handle(){
 
    this.cardsService.save(this.card);
    
    this.routerdetail.navigate(['cards']);
    }
}