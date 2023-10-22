import {Component,ElementRef,Renderer2,Input,OnInit,EventEmitter, Output, ViewChild } from '@angular/core';
import {food} from "../allClass";

@Component({
  selector: 'food-root',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss'],
})
export class FoodComponent {

  constructor(public rd:Renderer2){
  }
  img_location = "../assets/foods/";
  food_shop:food[] =[
    new food("Tuna",260, 0, 1.3, 5.8, 2.2,this.img_location+"tuna.png"),
    new food("Bison",152, 15, 7, 2, 1.2,this.img_location+"bison.png"),
    new food("Crab",100, 12, 5, 12, 2.5,this.img_location+"crab.png"),
    new food("Go Nut",50, 9, 3, 2, 1,this.img_location+"go_nut.png" ),
    new food("Green Bean",31, 7, 1, 4, 1,this.img_location+"green_bean.png"),

    new food("Lean Beef",250, 0, 15, 26, 2.3,this.img_location+"lean_beef.png"),
    new food("Oister",200, 0, 13, 9, 3,this.img_location+"oister.png" ),
    new food("Pork",250, 5, 14, 27, 1.2,this.img_location+"pork.png"),
    new food("Salmon",208, 2, 13, 20, 3,this.img_location+"salmon.png"),
    new food("Whole Bread",240,50,5,13,2.5,this.img_location+"whole_bread.png"),
  
  ];
  
  @Output() sent_obj = new EventEmitter<food>();
  ngAfterViewInit(){

    setTimeout(()=>{
    for(let f of this.food_shop){
        const item:HTMLElement|null = document.querySelector("#"+f.nameParse()+" #img")
        if(!item)  
          throw "no item"
        const w = item.offsetWidth.toString()+"px"; 
        this.rd.setStyle(item,"height",w);
        console.log(item.offsetHeight);
    }
    },500)
   
    //this.img_source.nativeElement.height =w;
  }
  sent_food(e:food){

    this.sent_obj.emit(e);
  }
  hi(e:any){
    console.log(e.target.parentElement);
  }


}
