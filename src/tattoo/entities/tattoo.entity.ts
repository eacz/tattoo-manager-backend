import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ versionKey: false })
export class Tattoo {
  @Prop({ required: true })
  client: string;

  @Prop({ required: true })
  day: Date;

  @Prop({ required: true })
  price: number;

  @Prop({ default: '' })
  description?: string;

  @Prop({ default: [] })
  images?: [string];

  @Prop({ default: '' })
  clientContact?: string;

  @Prop({ default: false })
  hasPayedAdvancedDeposit?: boolean;

  @Prop({ default: 0 })
  advancedDepositAmount?: number;

  @Prop({ default: false })
  done?: boolean;

  @Prop({ default: 0 })
  hours?: number;
}

export const TattooSchema = SchemaFactory.createForClass(Tattoo);
