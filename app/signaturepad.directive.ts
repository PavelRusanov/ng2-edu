import { Directive, ElementRef, Input } from '@angular/core';
let signaturepadJs = require('../node_modules/signature_pad/signature_pad.js');

@Directive({
    selector: '[signaturepad]'
})
export class SignaturePad implements OnInit{
	private canvasEl:any;

    constructor(el: ElementRef) {
       // el.nativeElement.style.backgroundColor = 'yellow';
       this.canvasEl = el;

           // var ctx: any = el.nativeElement.getContext("2d");
 //    new .SignaturePad(el, {
	// 	backgroundColor: 'rgba(255, 255, 255, 0)',
 //  		penColor: 'rgb(0, 0, 0)'
	// });
    // console.log("signature 2 on init end");
    }


     ngOnInit() {
     	console.log('on init ');
     	this.canvasEl.nativeElement.style.backgroundColor = 'green';
     	// new SignaturePad(this.canvasEl, {});
     	new SignaturePad(document.getElementById('tst'), {
    		backgroundColor: 'rgba(205, 205, 255, 0)',
    		penColor: 'rgb(34, 100, 20)'
  		});
  		console.log(document.getElementById('tst'));
     	console.log(this.canvasEl);
     	this.canvasEl.nativeElement.style.backgroundColor = 'red';


     }
}
