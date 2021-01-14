import { Resolver, Query, Field, Mutation, InputType, Arg } from "type-graphql";
import Video from "./Video";
import VideoSchema from '../model/VideoSchemas'

@InputType()
class VideoInput{
    @Field()
    description: string;
    @Field()
    name: string;
    @Field()
    category:string
}



@Resolver(Video)
class VideoResolver {

    @Query(()=> [Video])
    async Videos(){
        const videos = await VideoSchema.find();
        return videos;
    }

    @Mutation(() => Video)
    async createVideos (@Arg("videoInput") videoInput: VideoInput) {
        const video = await VideoSchema.create(videoInput);
        return video;

    }
}

export default VideoResolver;