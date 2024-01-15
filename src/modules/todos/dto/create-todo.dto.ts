import { IsBoolean, IsNotEmpty } from 'class-validator';

export class CreateTodoDto {
  @IsNotEmpty({ message: `can't be a empty` })
  task: string;

  @IsNotEmpty()
  @IsBoolean()
  status: boolean;
}
