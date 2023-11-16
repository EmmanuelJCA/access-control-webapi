import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsString, MinLength } from 'class-validator';
import { Gender } from '../../interfaces';

export class ProfileDto {
  @ApiProperty({
    example: 'V-12345678',
    uniqueItems: true,
    minLength: 8,
    description: 'User dni',
  })
  @IsString()
  @MinLength(10)
  identification: string;

  @ApiProperty({
    example: 'Admin',
    description: 'User first name',
    minLength: 2,
  })
  @IsString()
  @MinLength(2)
  firstName: string;

  @ApiProperty({
    example: 'Admin',
    description: 'User last name',
    minLength: 2,
  })
  @IsString()
  @MinLength(2)
  lastName: string;

  @ApiProperty({
    example: 'M',
    description: 'User gender',
    enum: Gender,
  })
  @IsEnum(Gender)
  gender: Gender;
}
