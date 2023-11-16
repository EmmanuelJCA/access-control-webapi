import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEnum,
  IsOptional,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';
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

  @ApiPropertyOptional({
    example: '+584146380056',
    description: 'User phone',
    nullable: true,
  })
  @IsOptional()
  @IsString()
  @Matches(/^\+[1-9]{1}[0-9]{1,14}$/)
  phone?: string;
}
