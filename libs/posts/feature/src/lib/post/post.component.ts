import { Post } from '@angular-microfrontends/posts/data-access';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'angular-microfrontends-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  constructor() {}
  @Input() post:Post|undefined;
  @Output()postClicked = new EventEmitter<Post>();

  clicked(){
    this.postClicked.emit(this.post);
  }

  ngOnInit(): void {}
}
