import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Prato {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('simple-array')
  ingredients: string[];

  @Column()
  video: string;

  @Column()
  picture: string;

  @Column()
  description: string;

  @Column()
  active: boolean;

  @Column()
  price: number;
}
