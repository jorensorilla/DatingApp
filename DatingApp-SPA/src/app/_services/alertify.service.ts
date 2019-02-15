import { Injectable } from '@angular/core';
// this wrapper is just a demonstration.. can be used globally even without this service
// already imported via angular.json. added just to avoid lint errors
declare let alertify: any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  confirm(message: string, okCallback: () => any) {
    alertify.confirm (message, function(event) {
      if (event) {
        okCallback();

      } else {}
    });
  }

  success(message: string) {
    alertify.success(message);
  }

  error(message: string) {
    alertify.error(message);
  }

  warning(message: string) {
    alertify.warning(message);
  }

  message(message: string) {
    alertify.message(message);
  }
}
