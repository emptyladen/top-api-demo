import { IsString, IsNumber, Max, Min } from 'class-validator';

export class CreateReviewDto {
  @IsString()
  name: string;

  @IsString()
  title: string;

  @IsString()
  description: string;

  @Max(5, { message: 'Рейтинг не может быть больше 5' })
  @Min(1)
  @IsNumber()
  rating: number;

  @IsString()
  productId: string;
}
