import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid} from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dto';


@Injectable()
export class CarsService {

    private cars: Car[] = [
        {
            id: uuid(),
            brand: 'Toyota',
            model: 'Corolla'
        },
        {
            id: uuid(),
            brand: 'Honda',
            model: 'civic'
        },
        {
            id: uuid(),
            brand: 'Jeep',
            model: 'Cherokee'    
        },
    ];

    //por defecto se le coloca public 
    //public findAll
    findAll(){
        return this.cars;
    }

    findOneById(idCar: string){
       const car = this.cars.find(({id})=> idCar == id);

       if(!car)
            throw new NotFoundException(`car with id ${idCar} not found`);
        
       return car;
    }

    create(createCarDto: CreateCarDto){

        const {brand, model} = createCarDto;
        const id: string = uuid();
        
        const car: Car = {
            id,
            brand,
            model
        }

        console.log(car);
        this.cars.push(car);
        return car
    }

    update(id: string, updateCarDto: UpdateCarDto){
        
        let cardb = this.findOneById(id);

        this.cars = this.cars.map(car => {
            if(car.id === id){
                cardb = {...cardb,...updateCarDto,id}
                return cardb;
            }
            return car;
        })
        console.log(cardb);
        return cardb;
    }

    delete(id: string ){
        const car = this.findOneById(id);
        this.cars = this.cars.filter(car=> car.id !== id)
    }
}
