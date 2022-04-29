import { Post, PostService } from '@angular-microfrontends/posts/data-access';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'angular-microfrontends-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  constructor(public postService:PostService) {}

  ngOnInit(): void {
    this.postService.getPosts();
  }
  postClicked(post:Post)
  {console.log(post);
  }
}
