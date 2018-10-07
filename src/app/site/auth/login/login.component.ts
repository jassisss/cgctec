import { Component, OnInit} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss']

})
export class LoginComponent {


  constructor(private fb: FormBuilder,
    public dialogRef: MatDialogRef<LoginComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }


  loginForm: FormGroup;

  formErrors = {
    'email': '',
    'password': ''
  };
  validationMessages = {
    'email': {
      'required': 'O campo email é obrigatório',
      'email': 'Entre com um email válido'
    },
    'password': {
      'required': 'A password é um campo obrigatório',
      'pattern': 'A password deve conter números e letras',
      'minlength': 'A password deve ter 4 caracteres no minimo',
      'maxlength': 'A password deve ter 25 caracteres no máximo',
    }
  };


  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.loginForm = this.fb.group({
      'email': ['', [
        Validators.required,
        Validators.email
      ]
      ],
      'password': ['', [
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
        Validators.minLength(6),
        Validators.maxLength(25)
      ]
      ],
    });

    this.loginForm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    // if (!this.loginForm) {
    //   return;
    // }
    // const form = this.loginForm;
    // for (const field in this.formErrors) {
    //   if (Object.prototype.hasOwnProperty.call(this.formErrors, field)) {
    //     this.formErrors[field] = '';
    //     const control = form.get(field);
    //     if (control && control.dirty && !control.valid) {
    //       const messages = this.validationMessages[field];
    //       for (const key in control.errors) {
    //         if (Object.prototype.hasOwnProperty.call(control.errors, key)) {
    //           this.formErrors[field] += messages[key] + ' ';
    //         }
    //       }
    //     }
    //   }
    // }
  }
  login() {
    alert('Login');
  }


}