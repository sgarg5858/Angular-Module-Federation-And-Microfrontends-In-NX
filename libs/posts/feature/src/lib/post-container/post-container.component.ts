import { Post, PostService } from '@angular-microfrontends/posts/data-access';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'angular-microfrontends-post-container',
  templateUrl: './post-container.component.html',
  styleUrls: ['./post-container.component.scss'],
})
export class PostContainerComponent implements OnInit {
  constructor(public postService:PostService) {}

  ngOnInit(): void {
    this.postService.getPosts();
  }
  postClicked(post:Post)
  {
    console.log(post);
  }

  filter(text:string)
  {
    this.postService.filter(text);
  }
}
