import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreatingStatus = 'server wasn`t created';
  serverName = '';
  serverCreated= false;
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {}

  onCreateServer() {
    this.serverCreatingStatus = 'server was created! Name is '+ this.serverName;
    this.serverCreated = true;
  }
  onupdateServerName(event: any) {
    this.serverName = event.target.value;
  }
}
