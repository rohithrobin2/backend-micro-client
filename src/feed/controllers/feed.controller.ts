import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices/decorators';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import { FeedService } from '../feed.service';
import { FeedPost } from '../services/models/post.interface';

@Controller()
export class FeedController {
  constructor(private feedService: FeedService) {}

  @MessagePattern('feed/post')
  create(@Body() feedPost: FeedPost) {
    // console.log(feedPost)
    return this.feedService.createPost(feedPost);
  }

  @MessagePattern('feed/get')
  findAll(): Observable<FeedPost[]> {
    return this.feedService.findAllPosts();
  }

  // @Put(':id')
  // update(
  //   @Param('id') id: number,
  //   @Body() feedPost: FeedPost,
  // ): Observable<UpdateResult> {
  //   return this.feedService.updatePost(id, feedPost);
  // }

  // @Delete(':id')
  // delete(@Param('id') id: number): Observable<DeleteResult> {
  //   return this.feedService.deletePost(id);
  // }
}
