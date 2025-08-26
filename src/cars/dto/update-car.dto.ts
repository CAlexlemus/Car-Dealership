import { IsOptional, IsString, IsUUID } from "class-validator";

export class UpdateCarDto{

    @IsString()
    @IsOptional()
    @IsUUID()
    readonly id?: string;

    @IsOptional()
    @IsString()
    readonly brand?:string;

    @IsOptional()
    readonly model?: string;
}