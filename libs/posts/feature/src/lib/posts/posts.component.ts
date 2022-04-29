import { Post, PostService } from '@angular-microfrontends/posts/data-access';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'angular-microfrontends-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
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
