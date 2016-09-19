INPUTS

* ```<fg: FormGroup>```: The form group directive associated with the current form. This property is used to create the necessary form controls on the fly to support data binding.
* `<field: string>`: This name will be used to create the control and it will also be used to report the values when you call `form.value`
* `<label: string>`: The control's label
* `<disabled: boolean>`: Indicates if the control is enable or not
this property
* `<leftIcon|rightIcon: string>:` If set we are going to show the selected icon on the left|right of the control. The icons we are using are coming from here: http://zavoloklom.github.io/material-design-iconic-font/icons.html. Notice you only need the part of the name without the `zmdi`. Example, instead of "zmdi zmdi-email-open" you only need "email-open"
