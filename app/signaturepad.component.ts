import { Component, AfterViewInit,ViewChild } from '@angular/core';

@Component({
  selector: 'signature-pad',
  // template: '<h1>Hello</h1>'
  template: '<h1><canvas id = "signaturepd" #signatureCanvas width=400 height=200></canvas>'
})
export class SignaturePadComponent implements AfterViewInit{ 
	@ViewChild("signatureCanvas") signatureCanvas;

	ngAfterViewInit() {
	   	let canvas = this.signatureCanvas.nativeElement;
	    var context = canvas.getContext("2d");
	    canvas.style.backgroundColor = 'green';	
	    new SignaturePad(canvas, {
    		backgroundColor: 'rgba(205, 205, 255, 0)',
    		penColor: 'rgb(34, 100, 20)'
  		});
	}
}
