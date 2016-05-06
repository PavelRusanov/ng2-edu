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
var SignaturePadComponent = (function () {
    function SignaturePadComponent() {
    }
    SignaturePadComponent.prototype.ngAfterViewInit = function () {
        var canvas = this.signatureCanvas.nativeElement;
        var context = canvas.getContext("2d");
        canvas.style.backgroundColor = 'green';
        new SignaturePad(canvas, {
            backgroundColor: 'rgba(205, 205, 255, 0)',
            penColor: 'rgb(34, 100, 20)'
        });
    };
    __decorate([
        core_1.ViewChild("signatureCanvas"), 
        __metadata('design:type', Object)
    ], SignaturePadComponent.prototype, "signatureCanvas", void 0);
    SignaturePadComponent = __decorate([
        core_1.Component({
            selector: 'signature-pad',
            // template: '<h1>Hello</h1>'
            template: '<h1><canvas id = "signaturepd" #signatureCanvas width=400 height=200></canvas>'
        }), 
        __metadata('design:paramtypes', [])
    ], SignaturePadComponent);
    return SignaturePadComponent;
}());
exports.SignaturePadComponent = SignaturePadComponent;
//# sourceMappingURL=signaturepad.component.js.map