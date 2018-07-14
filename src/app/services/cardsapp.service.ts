import { Card } from "../card/card";

export class CardsService {


  cards: Array<Card> = [new Card(1, 'pranav', 'raya', 'my@email',1231231234, 44),
  new Card(2, 'robert', 'steve', 'steve@email',1231231234, 25),
  new Card(3, 'trump', 'donald', 'trump@email',1231231234, 65)
  ];



  getCards() {

    return this.cards;
  }



   
  getcardid(id: number):Card {

    return this.cards.find(c => c.id === id);
  }

  // save(card) {

    
  //   card.id = this.getid();
  //   this.cards.push(card);
  //   console.log(this.cards);

  // }

  save(card) {

    if(card.id == -1) {
 
 
     card.id = this.getid();
     card.vote =0;
     this.cards.push(card);
     }
    //  else{
 
    //   const ok =this.cards.findIndex(c => c.id === card.id)
     
     
    //  }
    // console.log(this.cards);
 
   }
  
  //appi inclass code 
  getid() {
    let maxid = 0;
    for (let card of this.cards) {

      if (maxid < card.id) {

        maxid = card.id;
      }



    }
    return maxid + 1;

  }


}