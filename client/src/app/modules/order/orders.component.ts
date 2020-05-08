import { filter } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { TranslateService } from '../../services/translate.service';
import * as fromRoot from '../../store/reducers';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {

  orders$   : Observable<any>;
  ordersUrl : string;

  constructor(private store: Store<fromRoot.State>, private translate: TranslateService) {
    this.store.select(fromRoot.getLang)
    .pipe(filter(Boolean))
    .subscribe(lang => {
      this.ordersUrl = `/${lang}/${translate.data['orders']}`;
    });

    this.orders$ = this.store.select(fromRoot.getUserOrders);

   }


}
