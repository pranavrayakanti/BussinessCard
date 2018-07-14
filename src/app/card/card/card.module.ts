import { NgModule } from '@angular/core';
import { VoteComponent } from '../../vote/vote.component';
import { CardComponent } from '../card.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CardsService } from '../../services/cardsapp.service';
import { APP_ROUTES } from '../../app.routing';
import { Child_ROUTES } from './child.routing';
import { EditComponent } from '../edit/edit.component';
import { AddComponent } from '../add/add.component';
import { CardFormComponentComponent } from '../card-form-component/card-form-component.component';
import { DetailComponent } from '../detail/detail.component';

@NgModule({
  declarations: [
    CardComponent,
    VoteComponent,
    EditComponent,
    AddComponent,
    CardFormComponentComponent,
    DetailComponent
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
     Child_ROUTES    
  ],

  
providers:[

  
  CardsService
],

})
export class CardModule { }



// import { NgModule } from '@angular/core';
// import { VoteComponent } from '../../vote/vote.component';
// import { CardComponent } from '../card.component';
// import { FormsModule } from '@angular/forms';
// import { BrowserModule } from '@angular/platform-browser';
// import { CardsService } from '../../services/cardsapp.service';
// import { APP_ROUTES } from '../../app.routing';
// import { Child_ROUTES } from './child.routing';
// import { EditComponent } from '../edit/edit.component';
// import { HomeComponent } from '../home/home.component';
// import { DetailComponent } from '../detail/detail.component';
// import { CommonModule } from '@angular/common';

// @NgModule({
//   declarations: [
//     CardComponent,
//     VoteComponent,
//     EditComponent,
//     HomeComponent,
//     DetailComponent
    
    
//   ],
//   imports: [
//     BrowserModule,
//     FormsModule,
//     Child_ROUTES

    
//   ],

  
// providers:[

//   CardsService
// ],

// })
// export class CardModule { }
