import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { Car } from './interfaces/car.interface';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Controller('cars')
// @UsePipes(ValidationPipe) //esto debe estar a nivel aplicacion
export class CarsController {

    // private cars = ['Toyota', 'honda', 'mazda'];

    constructor(
        private readonly carsService:CarsService //inyeccion de dependencia
    ){}


    @Get()
    getAllCars(){
        return this.carsService.findAll();
    }


    @Get(':id')
    getCarById(@Param('id', ParseUUIDPipe) id: string){
        console.log({id});
        return this.carsService.findOneById(id);

    }

    @Post()
    // @UsePipes(ValidationPipe)
    createCar(@Body() createCarDto: CreateCarDto){
        return this.carsService.create(createCarDto);
    }

    @Patch(':id')
    updateCar(
        @Param('id', ParseUUIDPipe) id: string, 
        @Body() updateCarDto: UpdateCarDto){
            this.carsService.update(id, updateCarDto);
    }

    @Delete(':id')
    deleteCar(@Param('id', ParseUUIDPipe) id: string){
        return this.carsService.delete(id);
    }
}
