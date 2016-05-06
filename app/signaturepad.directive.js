"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var signaturepadJs = require('../node_modules/signature_pad/signature_pad.js');
var SignaturePad = (function () {
    function SignaturePad(el) {
        // el.nativeElement.style.backgroundColor = 'yellow';
        this.canvasEl = el;
        // var ctx: any = el.nativeElement.getContext("2d");
        //    new .SignaturePad(el, {
        // 	backgroundColor: 'rgba(255, 255, 255, 0)',
        //  		penColor: 'rgb(0, 0, 0)'
        // });
        // console.log("signature 2 on init end");
    }
    SignaturePad.prototype.ngOnInit = function () {
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
    };
    SignaturePad = __decorate([
        core_1.Directive({
            selector: '[signaturepad]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], SignaturePad);
    return SignaturePad;
}());
exports.SignaturePad = SignaturePad;
//# sourceMappingURL=signaturepad.directive.js.map