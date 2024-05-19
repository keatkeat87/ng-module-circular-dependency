import { NgModule } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';

@NgModule({
  imports: [ParentComponent, ChildComponent],
  exports: [ParentComponent, ChildComponent]
})
export class TestModule { }
