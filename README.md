# modal-directive

A simple and light-weighted solution for making Bootstrap modal.
This directive is to include Bootstrap modal without any extra code.

# How to Install
  `bower install modal-directive`

# Configration

Include `'ngModal'` into dependencies of your app.
`angular.module('yourApp', [
  'ngModal'
])`

# Example

`<ng-modal title="Leads Details" visible="true">
    Hello hi
</ng-modal>`

  
Attributes are: 


| Attribute      | Default | Type    | Description                                             |
| -------------- | ------- | ------- | ------------------------------------------------------- |
| title          | null    | String  | Title placed in the header of the modal dialog.         |
| visible        | false   | Boolean | True for show the modal and False for hide the modal    |
