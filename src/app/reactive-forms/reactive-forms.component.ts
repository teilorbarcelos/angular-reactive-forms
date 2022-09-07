import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss'],
})
export class ReactiveFormsComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  public registerForm: FormGroup = this.formBuilder.group({
    firstName: [''],
    lastName: [''],
  })

  public submitForm() {
    console.log(this.registerForm.value)
  }

  ngOnInit(): void {}
}
