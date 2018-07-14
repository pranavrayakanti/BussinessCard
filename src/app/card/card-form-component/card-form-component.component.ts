import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CardsService } from '../../services/cardsapp.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { Card } from 'src/app/card/card';

@Component({
  selector: 'app-card-form-component',
  templateUrl: './card-form-component.component.html',
  styleUrls: ['./card-form-component.component.css']
})
export class CardFormComponentComponent 
{




  
   card:Card = new Card(0,'','','', 0,0 );
  //card:Card = new Card() ;
  constructor( private cardsService:CardsService,private router:Router,private _acrouter:ActivatedRoute){
    const cardId = this._acrouter.snapshot.params['id'];
  	if(cardId){
  		this.card = cardsService.getcardid(parseInt(cardId));
    }
    
    else{
      this.card.id = -1;
    }
    console.log(this.card);
  }
  // cards=this.cardsService.getCards();
  handleSubmit(cForm:NgForm)
  {
    console.log("handlesubmit method called");
    console.log(this.card)
    this.cardsService.save(this.card);
    console.log(this.card)
    this.router.navigate(['cards']);
  }
//   navigate(){
//   this.router.navigate(['cards']);



  
// }


}