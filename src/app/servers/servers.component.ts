import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreated = false;
  allowUsernameReset = false;
  serverCreationStatus = 'No server was created!';
  serverName ='test server';
  username:string = '';
  servers = ['Testserver', 'Testserver 2'];

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);

    if(this.username.length > 0) {
      this.allowUsernameReset = true;
    }
    else {
      this.allowUsernameReset = false;
    }

  }

  ngOnInit(): void {
  }


  onCreateServer() {
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
    this.servers.push(this.serverName);
    this.serverCreated = true;
  }

  onUpdateServerName(event: any) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
