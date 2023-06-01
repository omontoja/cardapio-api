import { ApiProperty } from '@nestjs/swagger';

export class CreatePratoDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  ingredients: string[];
  @ApiProperty()
  video: string;
  @ApiProperty()
  picture: string;
  @ApiProperty()
  description: string;
  @ApiProperty()
  active: boolean;
  @ApiProperty()
  price: number;
}
