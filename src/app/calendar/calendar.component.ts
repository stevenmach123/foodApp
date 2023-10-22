import { Component, OnInit,EventEmitter, Output,ChangeDetectorRef, AfterViewInit} from '@angular/core';
import {MonthDays, Monthday,food} from "../allClass";
import {Router,ActivatedRoute} from "@angular/router";
import {Service1} from "../service1";
import {Subject, BehaviorSubject,Subscription} from "rxjs"
import {Location} from "@angular/common";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],

})
export class CalendarComponent implements OnInit {
  months:any = {
    1:"January",
    2:"Feburary",
    3:"March",
    4:"April",
    5:"May",
    6:"June",
    7:"July",
    8:"August",
    9:"September",
    10:"October",
    11:"November",
    12:"December"
}

@Output() aa = new EventEmitter<boolean>(); 

constructor(private router:Router, private service1:Service1,private _location :Location,private cdr: ChangeDetectorRef,private route:ActivatedRoute ){
  
  
  console.log("cal constructor");
  this.select_pos();


  /*this.sub1 =this.service1.Service_key.subscribe(k_id=>{
    console.log("we sub");
    this.k_id = k_id;
  })*/
 

  
} 


ngOnInit() {

  this.k_id  = this.router.getCurrentNavigation()?.extras.state?.kd;
  console.log(this.k_id);
  if(this.service1.state$.getValue()!=null){
    this.state = this.service1.state$.getValue();
 
    this.id_month=this.state.get("id_month");
    this.id_day =this.state.get("id_day");
    this.select_pos();
  }
  
  this.generateCalendar();
  this.pushMonthDay();





}

ngAfterViewInit(){
  //this.blue_day()
  
}
/*blue_day(){
  let my_days = document.querySelector(".days");
  if(!my_days)
      throw "no my_days"
  
  for(let i=0; i<my_days.children.length;i++){
    let child = my_days.children[i].children[0];
    let check =false; 
    for(let [k,v] of this.k_id){
      if(child.id == k && v==true){
        check = true
      }
    }
    if(check)
      child.classList.add("blue_day");
    else
      child.classList.remove("blue_day");
  }
}*/
blue_day(id_day:string):boolean{
  return this.k_id.get(id_day)
}



dayMap:Map<number,boolean> = new Map<number,boolean>();
k_id:Map<string,boolean> = new Map<string,boolean>();
sub1: Subscription|undefined;
true_cal:MonthDays[]=[]


monthDay:Monthday[] =[] ;

id_month:number = 10;
id_day:number  = 10;
parti_day:string|undefined;
parti_month:string|undefined ;

state = new Map();

ngAfterViewChecked() {

  this.cdr.detectChanges();
}



ha:Map<number,boolean> = new Map<number,boolean>(); 

naviMain(){
  //this._location.back();
  this.router.navigate([".."]);
}



confirm(){

  this.state.set("id_month",this.id_month);
  this.state.set("id_day",this.id_day); 
  this.service1.state$.next(this.state);
  if(!this.parti_day)
    throw "parti_day is undefined"
  this.service1.service_day_id(this.parti_day);
  
  this.router.navigate([".."]);
  //this.router.navigate(["..",{parti_day:this.parti_day}]);
}

select_pos(){


  this.parti_day = this.id_month.toString() + "-"+this.id_day.toString();
  this.parti_month  = this.months[this.id_month] ;
}

select_day(d:number){
  this.id_day=d;
  this.parti_day = this.id_month.toString() + "-"+this.id_day.toString();
  
}








deleteMap(e:Map<any,any>){
  let ha2:Map<any,any> = new Map<any,any>();
  for(let i of e.keys()){
      ha2.set(i,e.get(i))
  }
  
  for(let i of ha2.keys()){
    
    e.delete(i);
  }
} 
deleteList(e:Monthday[]){
  while(e.length!=0)[
    e.pop()
  ]
}
pushMonthDay(){
  this.deleteList(this.monthDay);
  var current_month=this.true_cal.find( (e)=>{
    if(e.month==this.id_month)
      return true;
  });
  if(!current_month)
    return
  for(let i in current_month.days){
    let oi = new Monthday(); 
    oi.day = current_month.days[i];
    oi.acti = current_month.acti[i]; 
    this.monthDay.push(oi);
    
  }
 

}

monthUp(){
  
  if(this.id_month<12){
    this.id_month++;
    let next = this.months[this.id_month];
    this.parti_month = next; 
  }
  
  let ha2:Map<number,boolean> = new Map<number,boolean>(); 
  ha2.set(1,true);
  if(!this.ha.get(2)){
    console.log("good");
  }
  this.pushMonthDay();
  /*
  setTimeout(e=>{
    this.blue_day()
  },100)  */
 

}
 
  

monthDown(){

  if(this.id_month>1){
    this.id_month--;
    var next = this.months[this.id_month];
    this.parti_month = next; 
  }
  this.pushMonthDay();
 /* setTimeout((e:any)=>{
    this.blue_day()
  },100)*/


  

}




generateCalendar(){
  let const_day:number =0
  let push_day:number =6;
  for(let i =1; i<=12;i++){
    var mymonth = new MonthDays;
    mymonth.month = i
    const_day = 0; 

    for(let i=0;i< push_day ;i++){
         mymonth.days.push(0);
         mymonth.acti.push(false);
        const_day++
    }
    
    push_day =0;
    
    
    if(i==1 || i==3 || i==5 || i==7 || i==8 || i==10 || i==12){
        
        for(let d=1;d<=31;d++){
            
            mymonth.days.push(d);
            mymonth.acti.push(true);
            const_day++
        }
    }
    if(i==4 || i==6 || i==9 || i==11){
      
        for(let d=1;d<=30;d++){
             mymonth.days.push(d);
            mymonth.acti.push(true);
            const_day++;
        }
    }
    if(i==2){
      
         for(let d=1;d<=28;d++){
             mymonth.days.push(d);
             mymonth.acti.push(true);
             const_day++
        }

    }
    if(const_day% 7 != 0){
        let blank_day = 7-(const_day % 7); 
        push_day = const_day% 7
        for(let d=1; d <=blank_day ;d++){
            mymonth.days.push(d);
            mymonth.acti.push(false);
            
        }
    
    }
    this.true_cal.push(mymonth);
   
  }
  
 


}




ngOnDestroy(){
  console.log("calendar destroyed"); 
  //this.sub1.unsubscribe();
}






}
