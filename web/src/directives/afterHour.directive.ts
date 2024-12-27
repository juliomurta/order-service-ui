import { Directive, Input } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, NgModel, ValidationErrors, Validator } from "@angular/forms";

@Directive({
    selector: "[afterHour]",
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: AfterHourDirective,
        multi: true
    }]
})
export class AfterHourDirective implements Validator {

    @Input()
    afterHour: NgModel | undefined;

    validate(control: AbstractControl): ValidationErrors | null {
        if (control.value && this.afterHour?.value) {
            const startTime = this.afterHour.value.split(':');
            const endTime   = control.value.split(':');

            const start = new Date(2000, 1, 1, startTime[0], startTime[1]);
            const end = new Date(2000, 1, 1, endTime[0], endTime[1]);

            if (end < start) {
                return {
                    afterHour: true
                }
            }
        }
        return null;
    }
}