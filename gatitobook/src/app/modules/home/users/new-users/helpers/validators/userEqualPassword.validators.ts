import { FormGroup } from '@angular/forms';
export const userEqualPasswordValidator: Function = (formGroup: FormGroup) => {
    const username = formGroup.get('userName')?.value ?? '';
    const password = formGroup.get('password')?.value ?? '';

    return (username.trim() + password.trim()) ?
        (username !== password ? null : { passwordEqualUser: true })
        : null
}