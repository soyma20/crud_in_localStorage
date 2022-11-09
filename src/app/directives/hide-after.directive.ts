import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';

class HideAfterContext {
  public appHideAfter = 0;
  public counter = 0;
}

@Directive({
  selector: '[appHideAfter]'
})
export class HideAfterDirective implements OnInit {

  @Input('appHideAfter')
  set delay(value: number | null) {
    this._delay = value ?? 0;
    this.context.appHideAfter = this.context.counter = this._delay / 1000;
  }

  private _delay = 0;

  private context = new HideAfterContext();

  constructor(private viewContainerRef: ViewContainerRef, private templateRef: TemplateRef<any>) {
  }

  ngOnInit(): void {
    this.viewContainerRef.createEmbeddedView(this.templateRef, this.context)
    const interval = setInterval(()=>{
      this.context.counter--;
    },1000)
    setTimeout(() => {
      this.viewContainerRef.clear()
      clearInterval(interval);
    }, this._delay)
  }


}
