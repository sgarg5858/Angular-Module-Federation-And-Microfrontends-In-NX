import { ChangeDetectionStrategy, Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged, Subscription } from 'rxjs';

@Component({
  selector: 'angular-microfrontends-filter-posts',
  templateUrl: './filter-posts.component.html',
  styleUrls: ['./filter-posts.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class FilterPostsComponent implements OnInit,OnDestroy {
  constructor() {}

  @Output() filter= new EventEmitter<string>();
  filterText= new FormControl('',[Validators.required]);
  mySubscription= new Subscription();

  ngOnInit(): void {

    this.mySubscription.add(
      this.filterText.valueChanges
      .pipe(
        debounceTime(200),
        distinctUntilChanged()
      )
      .subscribe((value:string)=>{
        this.filter.emit(value);
      })
    )

  }
  ngOnDestroy(): void {
      this.mySubscription.unsubscribe();
  }
}
