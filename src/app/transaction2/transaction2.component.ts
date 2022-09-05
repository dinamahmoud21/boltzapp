import { Component, OnInit } from '@angular/core';
import'../../../node_modules/datatables.net/js/jquery.dataTables.js';

@Component({
  selector: 'app-transaction2',
  templateUrl: './transaction2.component.html',
  styleUrls: ['./transaction2.component.css']
})
export class Transaction2Component implements OnInit {

  constructor() { }
  posts:any=[{
   
    classstyle:'bg-success fa fa-sort-alpha-down',
  
    name:'harry',
    coin:' Biticon',
    total:'5.2552',
    summry:'lorem ipsum dol .....',
   
  },
  {
   
    classstyle:' bg-danger fa fa-sort-alpha-up',
  
    name:'harry',
    coin:' Biticon',
    total:'5.2552',
    summry:'lorem ipsum dol .....',
   
  },
  {
   
    classstyle:'bg-success fa fa-sort-alpha-down',
  
    name:'harry',
    coin:' Biticon',
    total:'5.2552',
    summry:'lorem ipsum dol .....',
   
  },
  {
   
    classstyle:' bg-danger fa fa-sort-alpha-up',
  
    name:'harry',
    coin:' Biticon',
    total:'5.2552',
    summry:'lorem ipsum dol .....',
   
  },
  {
   
    classstyle:'bg-success fa fa-sort-alpha-down',
  
    name:'harry',
    coin:' Biticon',
    total:'5.2552',
    summry:'lorem ipsum dol .....',
   
  }
  ,{
   
    classstyle:' bg-danger fa fa-sort-alpha-up',
  
    name:'harry',
    coin:' Biticon',
    total:'5.2552',
    summry:'lorem ipsum dol .....',
   
  }
  ,{
   
    classstyle:'bg-success fa fa-sort-alpha-down',
  
    name:'harry',
    coin:' Biticon',
    total:'5.2552',
    summry:'lorem ipsum dol .....',
   
  },
  {
   
    classstyle:' bg-danger fa fa-sort-alpha-up',
  
    name:'harry',
    coin:' Biticon',
    total:'5.2552',
    summry:'lorem ipsum dol .....',
   
  }


]
  dtOptions: DataTables.Settings = {};
  ngOnInit(): void {
    this.dtOptions = {
      "searching": false,
      autoWidth: true
    };
  }

}
