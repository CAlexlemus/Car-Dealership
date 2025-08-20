import { Injectable } from '@nestjs/common';

@Injectable()
export class CarsService {

    private cars = [
        {
            id: 1,
            brand: 'Toyota',
            model: 'Corolla'
        },
        {
            id: 2,
            brand: 'Honda',
            model: 'civic'
        },
        {
            id: 3,
            brand: 'Jeep',
            model: 'Cherokee'    
        },
    ];

    //por defecto se le coloca public 
    //public findAll
    findAll(){
        return this.cars;
    }

    findOneById(idCar: number){
       return this.cars.find(({id})=> idCar == id);
    }

}
