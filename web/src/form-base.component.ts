import { NgForm } from "@angular/forms";

export class  FormBaseComponent{
    checkFormValidation(form: NgForm) {
        Object.keys(form.controls).forEach(key => {
            const control = form.controls[key];
            if (control.status === "INVALID" && !control.touched) {
              control.markAsDirty();
            }
        });
    }
}