import { Component } from '@angular/core';

@Component({
  selector: 'app-call-action',
  templateUrl: './call-action.component.html',
  styleUrls: ['./call-action.component.sass'],
})
export class CallActionComponent {

  public buttonState1 = {
    name: 'DEPOSIT CRYPTO',
    class: 'redBig'
  };
}
