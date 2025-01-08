import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String, required: true })
  email: string;

  @Prop({ type: String, required: true })
  password: string;

  @Prop({ type: Number, required: true })
  phone: number;

  @Prop({ type: Number, required: true })
  age: number;

  @Prop({ type: String, required: true })
  address: string;

  @Prop({ type: Date})
  createdAt: Date;

  @Prop({ type: Date})
  updatedAt: Date;
}
export const UserSchema = SchemaFactory.createForClass(User);
