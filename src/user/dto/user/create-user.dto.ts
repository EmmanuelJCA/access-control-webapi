import { PickType } from '@nestjs/swagger';
import { UserDto } from './user.dto';

export class CreateUserDto extends PickType(UserDto, [
  'email',
  'password',
  'roles',
  'isActive',
  'profile',
  'address',
] as const) {}
