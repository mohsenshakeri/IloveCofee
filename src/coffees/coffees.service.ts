import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
    private coffees:Coffee[] = [
        {
        id:1,
        name:'Shipwerk Roast',
        brand:'Buddy brew',
        flavors:['chocolate','vanlla']
    },


];


findAll(){
    return this.coffees;

}

findOne(id: string){
    
    const coffee=this.coffees.find(item=>item.id=== +id);
    if(!coffee){
        throw new NotFoundException(`cofee#${id}not found`);
    }
    return coffee;
    
}

create(createCoffeeDto: any){
    this.coffees.push(createCoffeeDto);
}

update(id: string,upadteCoffeeDto:any){
    const exsistingCoffee=this.findOne(id);
    if(exsistingCoffee){

    }
}

remove(id:string){
    const coffeeIndex=this.coffees.findIndex(item=> item.id === +id);
    if(coffeeIndex>=0){
        this.coffees.splice(coffeeIndex,1);
    }

}


}
