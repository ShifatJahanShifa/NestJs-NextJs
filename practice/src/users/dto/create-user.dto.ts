// import { IsString } from "class-validator";
// import { IsBoolean, IsDate, IsOptional, IsString } from "class-validator";
import { IsNotEmpty, IsString, IsInt } from "class-validator"
import { Type } from "class-transformer"

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    username: string;

    @IsString()
    @IsNotEmpty()
    email: string;

   
    @IsInt()
    age: number;

    @IsString()
    country: string;
}
