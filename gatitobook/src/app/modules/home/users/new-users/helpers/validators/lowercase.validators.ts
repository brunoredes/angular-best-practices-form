import { AbstractControl } from "@angular/forms";
export function lowerCaseValidator(control: AbstractControl): null | { lowercase: boolean } {
    const lowerValue: string = control.value;
    // console.log(lowerValue, lowerValue.toLowerCase());
    if (lowerValue !== lowerValue.toLocaleLowerCase()) {
        return { lowercase: true };
    } else {
        return null;
    }
    // return lowerValue !== lowerValue.toLocaleLowerCase() ? { lowercase: true } : null;
}