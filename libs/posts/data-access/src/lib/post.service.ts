import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { BehaviorSubject, catchError, concatMap, delay, of, retryWhen, tap, throwError } from 'rxjs';

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
  private cachedPosts:Post[]=[];
  private apiWorked:boolean=false;

  get didApiWork(){
    return this.apiWorked;
  }

  private postSubject = new BehaviorSubject<Post[]|null>(null);
  posts$ = this.postSubject.asObservable();

  getPosts(){
    this.httpClient.get<Post[]>('https://jsonplaceholder.typicode.com/posts').
    pipe(
      //Add Retry with Logic here
      tap((posts:Post[])=>{
        this.cachedPosts=posts;
        this.apiWorked = this.cachedPosts.length > 0 ;
      }),
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
  filter(text:string){
    console.log("Filtering for",text)
    let posts:Post[]=this.cachedPosts.filter((post:Post)=>post.title.includes(text));
    this.postSubject.next(posts);

  }
}
