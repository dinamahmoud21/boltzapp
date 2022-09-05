import { Component, OnInit } from '@angular/core';
import'../../../node_modules/datatables.net/js/jquery.dataTables.js';

@Component({
  selector: 'app-transction',
  templateUrl: './transction.component.html',
  styleUrls: ['./transction.component.css']
})
export class TransctionComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  posts:any=[{
    id:'#123552255222',
    time:'5:24:48 AM',
    name:'William',
    lastname:'harry',
    coin:' Biticon',
    total:'5.2552',
    summry:'lorem ipsum dol .....',
    status:'Completed'
  },
  {
    id:'#123552255222',
    time:'5:24:48 AM',
    name:'William',
    lastname:'harry',
    coin:' Biticon',
    total:'5.2552',
    summry:'lorem ipsum dol .....',
    status:'Completed'
  },
  {
    id:'#123552255222',
    time:'5:24:48 AM',
    name:'William',
    lastname:'harry',
    coin:' Biticon',
    total:'5.2552',
    summry:'lorem ipsum dol .....',
    status:'Completed'
  },
  {
    id:'#123552255222',
    time:'5:24:48 AM',
    name:'William',
    lastname:'harry',
    coin:' Biticon',
    total:'5.2552',
    summry:'lorem ipsum dol .....',
    status:'Completed'
  },
  {
    id:'#123552255222',
    time:'5:24:48 AM',
    name:'William',
    lastname:'harry',
    coin:' Biticon',
    total:'5.2552',
    summry:'lorem ipsum dol .....',
    status:'Completed'
  },
  {
    id:'#123552255222',
    time:'5:24:48 AM',
    name:'William',
    lastname:'harry',
    coin:' Biticon',
    total:'5.2552',
    summry:'lorem ipsum dol .....',
    status:'Completed',
    
  },
  {
    id:'#123552255222',
    time:'5:24:48 AM',
    name:'William',
    lastname:'harry',
    coin:' Biticon',
    total:'5.2552',
    summry:'lorem ipsum dol .....',
    status:'Completed'
  },
  {
    id:'#123552255222',
    time:'5:24:48 AM',
    name:'William',
    lastname:'harry',
    coin:' Biticon',
    total:'5.2552',
    summry:'lorem ipsum dol .....',
    status:'Completed'
  },

  {
    id:'#123552255222',
    time:'5:24:48 AM',
    name:'William',
    lastname:'harry',
    coin:' Biticon',
    total:'5.2552',
    summry:'lorem ipsum dol .....',
    status:'Completed'
  },

  {
    id:'#123552255222',
    time:'5:24:48 AM',
    name:'William',
    lastname:'harry',
    coin:' Biticon',
    total:'5.2552',
    summry:'lorem ipsum dol .....',
    status:'Completed'
  },


];
  
  constructor() { }

  ngOnInit(): void {
    this.dtOptions = {
      "searching": false,
      autoWidth: true
    };
  
  }

}
