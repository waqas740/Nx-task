import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type Review = {
  rating: number;
  comment: string;
  date: Date;
};

@Schema()
export class Product extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true, enum: ['in stock', 'out of stock', 'pre-order'] })
  status: string;

  @Prop({ required: true })
  quantity: number;

  @Prop({ type: [{ rating: Number, comment: String, date: Date }] })
  reviews: Review[];
}

export const ProductSchema = SchemaFactory.createForClass(Product);
