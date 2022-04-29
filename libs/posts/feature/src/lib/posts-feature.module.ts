import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';
import { RouterModule } from '@angular/router';
import { PostsDataAccessModule } from '@angular-microfrontends/posts/data-access';
import { PostDetailComponent } from './post-detail/post-detail.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: PostsComponent
      },
    ]),
    PostsDataAccessModule,
  ],
  declarations: [PostsComponent, PostComponent, PostDetailComponent],
})
export class PostsFeatureModule {}
