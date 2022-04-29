import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { BehaviorSubject, catchError, concatMap, delay, of, retryWhen, throwError } from 'rxjs';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient:HttpClient) { }

  private postSubject = new BehaviorSubject<Post[]|null>(null);
  posts$ = this.postSubject.asObservable();

  getPosts(){
    this.httpClient.get<Post[]>('https://jsonplaceholder.typicode.com/posts').
    pipe(
      //Add Retry with Logic here
      retryWhen(
        //notifier observable
        (errors)=> errors.pipe(
        concatMap((error,index)=>{
          if(index > 2) return throwError(error);
          return of(error).pipe(delay(1000))
        })
      )
      ),
      //If retry also fails then we provide replacement observable
      catchError(()=>of([]))
    ).
    subscribe((posts:Post[])=>{
      this.postSubject.next(posts);
      // this.postSubject.unsubscribe();
    })
  }
}
