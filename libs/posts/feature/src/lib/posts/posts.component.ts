import { Post, PostService } from '@angular-microfrontends/posts/data-access';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'angular-microfrontends-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
 
  @Input() posts:Post[]=[];

  postClicked(post:Post)
  {
    console.log(post);
  }
  ngOnInit(): void {
 }
}
