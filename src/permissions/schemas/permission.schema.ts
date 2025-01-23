import mongoose, { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type PermissionDocument = HydratedDocument<Permission>;

@Schema({ timestamps: true })
export class Permission {
  @Prop({type: String, required: true})
  name: string;

  @Prop({type: String, required: true})
  apiPath: string;

  @Prop({type: String, required: true})
  method: string;

  @Prop({type: String, required: true})
  module: string;

  @Prop({ type: Object })
  createdBy: {
    _id: mongoose.Schema.Types.ObjectId;
    email: string;
  };

  @Prop({ type: Object })
  updatedBy: {
    _id: mongoose.Schema.Types.ObjectId;
    email: string;
  };

  @Prop({ type: Object })
  deletedBy: {
    _id: mongoose.Schema.Types.ObjectId;
    email: string;
  };

  @Prop({type: Date})
  createdAt: Date;

  @Prop({type: Date})
  updatedAt: Date;

  @Prop({type: Boolean})
  isDeleted: boolean;

  @Prop({type: Date})
  deletedAt: Date;
}

export const PermissionSchema = SchemaFactory.createForClass(Permission);
