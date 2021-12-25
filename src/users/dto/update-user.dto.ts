import { ApiProperty } from '@nestjs/swagger';
import { IsAlphanumeric, Max, MaxLength, Min } from 'class-validator';

export class UpdateUserDto {
  @ApiProperty()
  @IsAlphanumeric()
  @MaxLength(25)
  name: string;

  @ApiProperty({ required: false })
  @Max(100)
  @Min(10)
  age?: number;
}
