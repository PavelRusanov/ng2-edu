import { Component } from '@angular/core';
import { HighlightDirective } from './highlight.directive';
import { SignaturePad } from './signaturepad.directive';
import { SignaturePadComponent } from './signaturepad.component';

@Component({
  selector: 'my-app',
  template: '<h1>My First Angular 2 App</h1> <span myHighlight>Highlight me!</span><signature-pad></signature-pad>',
  directives: [HighlightDirective,SignaturePad,SignaturePadComponent]
})
export class AppComponent { }
