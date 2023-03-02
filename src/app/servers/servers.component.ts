import { Component,OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus ='No server was created!';
  serverName = 'test server';
  serverCreated = false;
  servers = ["TestServer","TestServer 2"];

  constructor(){
setTimeout(() => {
  this.allowNewServer = true;
},2000);
  }
  ngOnInit() {
  }
  onCreateServer(){
    this.serverCreated = true;
    this.serverCreationStatus='Server was created'+this.serverName;
    this.servers.push(this.serverName); 
  }
  onUpdayeServerName(event: any){
    this.serverName = event.target.value;
  }

  }


