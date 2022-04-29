import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';
import { RouterModule } from '@angular/router';
import { PostsDataAccessModule } from '@angular-microfrontends/posts/data-access';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterPostsComponent } from './filter-posts/filter-posts.component';
import { PostContainerComponent } from './post-container/post-container.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: PostContainerComponent,
      },
    ]),
    PostsDataAccessModule,
    ReactiveFormsModule,
  ],
  declarations: [
    PostsComponent,
    PostComponent,
    PostDetailComponent,
    FilterPostsComponent,
    PostContainerComponent,
  ],
})
export class PostsFeatureModule {}
