import { Module } from '@nestjs/common';
import { FeedService } from './feed.service';
import { FeedController } from './controllers/feed.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedPostEntity } from './services/models/post.enitity';

@Module({
  imports: [TypeOrmModule.forFeature([FeedPostEntity])],
  providers: [FeedService],
  controllers: [FeedController]
})
export class FeedModule {}
