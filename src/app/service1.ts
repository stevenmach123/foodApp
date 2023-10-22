import {Injectable} from '@angular/core';
import {dbfood,food} from './allClass'
import {Subject,BehaviorSubject,ReplaySubject} from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class Service1{
    private day_idService = new Subject<string>();
    private key_Service  = new Subject<Map<string,boolean>>();

    Serviceday_id = this.day_idService.asObservable();
    Service_key = this.key_Service.asObservable();

     state_dayPack$ = new BehaviorSubject<Map<string,dbfood[]>|null>(null);
     state_prev_day_id$ = new BehaviorSubject<any>(null);
    state_food_stored$ = new BehaviorSubject<food[]|null>(null); 
    state_drop2 = new BehaviorSubject<any>(null);
    state$ = new BehaviorSubject<any>(null);



    service_day_id(ha:string){
        this.day_idService.next(ha);
    }
    service_key(ha:Map<string,boolean>){
        this.key_Service.next(ha);
    }
   
    


   
}