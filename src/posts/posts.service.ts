import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';

// interface Post {
//   id: number;
//   title: string;
//   content: string;
// }

@Injectable()
export class PostsService {
  private posts: CreatePostDto[] = [];

  create(post: CreatePostDto) {
    const newPost = { id: Date.now(), ...post };
    this.posts.push(newPost);
    return newPost;
  }

  findAll(): CreatePostDto[] {
    return [...this.posts]; // return a copy of the array
  }
}
