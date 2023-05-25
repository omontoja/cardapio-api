import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Prato {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  ingredientes: string;

  @Column()
  link: string;

  @Column()
  ativo: boolean;

  @Column()
  foto: string;
}
