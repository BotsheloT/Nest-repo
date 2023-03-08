import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {HydratedDocument} from 'mongoose';

export type playlistDocument = HydratedDocument<playlist>;

@Schema()
export class playlist{
    @Prop()
    name: string;

    @Prop()
    theme:string;
}

export const playlistSchema = SchemaFactory.createForClass(playlist);