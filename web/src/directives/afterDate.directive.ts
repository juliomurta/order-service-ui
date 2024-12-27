import { Directive, Input } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, NgModel, ValidationErrors, Validator } from "@angular/forms";

@Directive({
    selector: "[afterDate]",
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: AfterDateDirective,
        multi: true
    }]
})
export class AfterDateDirective implements Validator {

    @Input()
    afterDate: NgModel | undefined;

    validate(control: AbstractControl): ValidationErrors | null {
        if (control.value && this.afterDate?.value) {
            const start = new Date(this.afterDate.value);
            const end = new Date(control.value);
            if (end < start) {
                return {
                    afterDate: true
                }
            }
        }
        return null;
    }
}