import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude } from 'class-transformer';
import { Gender } from '../interfaces';
import { User } from './';

@Entity({ schema: 'person' })
export class Profile {
  @Exclude()
  @PrimaryGeneratedColumn('uuid', {
    name: 'profile_id',
    comment: 'User primary key',
  })
  profileId: string;

  @ApiProperty({
    example: 'V-12345678',
    uniqueItems: true,
    description: 'Person dni',
  })
  @Column('text', {
    unique: true,
    comment: 'Person dni',
  })
  identification: string;

  @ApiProperty({
    example: 'John',
    description: 'Person first name',
  })
  @Column('text', {
    name: 'first_name',
    comment: 'User first name',
  })
  firstName: string;

  @ApiProperty({
    example: 'Due',
    description: 'User last name',
  })
  @Column('text', { name: 'last_name', comment: 'User last name' })
  lastName: string;

  @ApiProperty({
    example: 'M',
    description: 'User gender',
    enum: Gender,
  })
  @Column('enum', {
    enum: Gender,
    comment: 'User gender enum "M" or "F"',
  })
  gender: Gender;

  @Exclude()
  @OneToOne(() => User, (user) => user.profile, {
    onDelete: 'CASCADE',
  })
  user: User;
}
