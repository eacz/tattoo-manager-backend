import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Tattoo {
  @Prop()
  client: string;

  @Prop()
  day: Date;

  @Prop()
  price: number;

  @Prop()
  description?: string;

  @Prop()
  image?: string;

  @Prop()
  clientContact?: string;

  @Prop({ default: false })
  hasPayedAdvancedDeposit?: boolean;

  @Prop({ default: 0 })
  advancedDepositAmount: number;
}

export const TattooSchema = SchemaFactory.createForClass(Tattoo);
