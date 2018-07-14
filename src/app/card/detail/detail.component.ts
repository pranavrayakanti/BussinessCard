import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CardsService } from '../../services/cardsapp.service';
import { Card } from '../card';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  
})
export class DetailComponent implements OnInit {


   cardcreatedby:string="admin";
    cardmodifyby:string ="user";
    carddate =Date.now(); 
    cardupdate=new Date();

  card:Card = new Card();
//private activatedRoute:ActivatedRoute
  //to access param from the link we should use activate link
  constructor(private routedetail: ActivatedRoute, private  cardsservice:CardsService){    
    
  }

  ngOnInit() {
    //lifecycle hooks
    //we can access using routedetail ref ,we have 2 approaches to do one way to subscribe to observable and otherone snapshot(see below)  
    // route module file params and this params should be same
   //by default it retruns value as string so use '+'n cast to number 
    
    //const id = ;
    // debugger;
    this.card=this.cardsservice.getcardid(+this.routedetail.snapshot.params['id']);
    //console.log("Value of Card:",this.card);

    // this.routedetail.params.
    // subscribe(
    //   (param:Params)=>{
    //     this.card=this.cardsservice.getcardid(param['id']);
    //   }
    // );

  }


  
  


  	
  

}
