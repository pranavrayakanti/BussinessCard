//import{ Component,Input,Output,EventEmitter} from '@angular/core';
// import{Component,Input,OnChanges,SimpleChange,EventEmitter,Output }from '@angular/core';

import{Component,Input, Output, EventEmitter}from '@angular/core'

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})

export class VoteComponent {




  @Input()
 
   voteCount1:number=0;

@Output()
contentChanged:EventEmitter<number>=new EventEmitter<number>();
handleChange()
{

this.contentChanged.emit(this.voteCount1);

}
// @Output() 

//      messageFromChild = new EventEmitter();


//     sendMessageToParent() { 
//         this..emit(this.voteCount1); 
//     }


votei=0;



handleclick(event:MouseEvent)
{
  
  this.voteCount1++;
  this.votei=this.voteCount1;
  alert("thanks for the feedback,Now you can Dislike");
}

handleclick1(event:MouseEvent){

this.voteCount1--;
//this.voted=this.voteCounter;
this.handleclick
if(this.voteCount1 <0){
alert("like cant be negative");
this.voteCount1++;

this.handleclick
}
 


}


  
  

}