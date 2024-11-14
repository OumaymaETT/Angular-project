import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../services/transactions.service';

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.css']
})
export class TransactionsListComponent implements OnInit {

  transactions: any[] = [];
  sortField: string = '';

  constructor(private transactionsService: TransactionsService) {}

  ngOnInit() {
    this.transactionsService.getTransactions().subscribe(data => {
      this.transactions = data;
    });
  }

  sortTransactions(field: string) {
    this.sortField = field;
    this.transactions.sort((a, b) => (a[field] > b[field] ? 1 : -1));
  }

}
