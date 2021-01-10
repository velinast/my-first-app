import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
 allowNewServer = false;
 serverCreationstatus = 'No server was created';
 serverName = 'Testserver';
  serverCreater = false;
  servers = ['Testserver', 'Testserver 2'];
 // userName = '' ;
  constructor() {
    setTimeout( () => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }
  // onResetUserName(){
  //     this.userName = '';
  // }
  // tslint:disable-next-line:typedef
  onCreateServer(){
      this.serverCreater = true;
      this.servers.push(this.serverName);
      this.serverCreationstatus = 'Server was created. Name is' + this.serverName;
  }
  // tslint:disable-next-line:typedef
  onUpdateServerName(event: Event){
  console.log(event);
  this.serverName = ( event.target as HTMLInputElement).value;
  }
}
