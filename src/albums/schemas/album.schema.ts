import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {HydratedDocument} from 'mongoose';

export type albumDocument = HydratedDocument<album>;

@Schema()
export class album{
    @Prop()
    name: string;

    @Prop()
    genre:string;

}

export const albumSchema = SchemaFactory.createForClass(album);