
export class food{
    name:string;
    carb:number;
    fat:number;
    mineral:number;
    protein:number;
    calories:number;
    pic:string;
    ee:Monthday|undefined;
    
    constructor(name:string,calories:number,carb:number,fat:number,protein:number,mineral:number,pic:string){
        this.name =name;
        this.calories = calories;
        this.carb = carb;
        this.fat =fat;
        this.mineral = mineral;
        this.protein = protein;
        this.pic = pic;
        
    }
    nameParse():string{
        var ar = this.pic.split(".");
        var ab = ar[ar.length-2].split("/");
        var ac = ab[ab.length-1];
        return ac;
    }
}

export class MonthDays{
    month:number|undefined;
    days:number[]=[];
    acti:boolean[]=[];
}

export class Monthday{
    day:number|undefined;
    acti:boolean|undefined;
}


export class dbfood{
    food:food |undefined;
    amount: number|undefined;
    constructor(){}

}

export class total_intake{
    calories:number=0;
    carb:number=0 ;
    protein:number=0;
    fat:number=0;
    mineral:number=0;
    x:MonthDays|undefined; 
    constructor(){};

    addCalories(a:number){
        this.calories +=a;
        this.calories =  Math.round(this.calories *10)/10;  
    }
    addCarb(a:number){
        this.carb += a;
        this.carb =  Math.round(this.carb *10)/10;  
    }
    addProtein(a:number){
        this.protein +=a;
        this.protein =  Math.round(this.protein *10)/10;  
    }

    addFat(a:number){
        this.fat += a;
        this.fat =  Math.round(this.fat *10)/10;    
    }
    addMineral(a:number){
    
        this.mineral += a;
        this.mineral = Math.round(this.mineral *10)/10;    
        
    }
    sum(){
        return this.carb + this.protein + this.fat + this.mineral;
    }
    perProtein(){
        if(this.protein == 0){ return 0}
    
        return Math.round(Math.round(this.protein/this.sum()*100)/100*100);
    }
    perCarb(){
        if(this.carb == 0){ return 0}
    
        return Math.round(Math.round(this.carb/this.sum()*100)/100*100);
    }
    perFat(){
        if(this.fat ==0){ return 0}
        return Math.round( Math.round(this.fat/this.sum()*100)/100*100);
    }
    perMineral(){
        if(this.mineral ==0){ return 0}
        return Math.round(Math.round(this.mineral/this.sum()*100)/100*100);
    }



}
