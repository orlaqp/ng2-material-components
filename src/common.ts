import {Directive, Input, TemplateRef, ViewContainerRef, Inject, OnChanges, AfterViewInit } from '@angular/core';

// export interface KeyAttribute {
//   [key: string]: any;
// }

@Directive({
  selector: '[ngTransclude]',
  // properties: [ 'ngTransclude' ],
})
export class NgTranscludeDirective implements AfterViewInit, OnChanges {
  @Input() ngTransclude: TemplateRef<any>;

  public viewRef: ViewContainerRef;

  // private _ngTransclude: TemplateRef<any>;

  // private set ngTransclude(templateRef: TemplateRef<any>) {
  //   this._ngTransclude = templateRef;
  //   if (templateRef) {
  //     this.viewRef.createEmbeddedView(templateRef);
  //   }
  // }

  // private get ngTransclude(): TemplateRef<any> {
  //   return this._ngTransclude;
  // }

  public constructor( @Inject(ViewContainerRef) _viewRef: ViewContainerRef) {
    this.viewRef = _viewRef;
  }

  ngOnChanges(changes: any) {
    if (changes.ngTransclude) {
      this._createEmbeddedView(changes.ngTransclude.currentValue);
    }
  }

  ngAfterViewInit() {
    this._createEmbeddedView(this.ngTransclude);
  }

  private _createEmbeddedView(viewRef: TemplateRef<any>) {
    if (viewRef) {
      this.viewRef.createEmbeddedView(viewRef);
    }
  }

}
