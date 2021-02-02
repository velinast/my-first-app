import {Component, OnInit} from '@angular/core';
import {AppService} from '../app.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
  .online{
    color: white;
  }
  `]
})
export class ServerComponent implements OnInit{
 serverID = 10;
 serverStatus = 'offline';
 directorName: any;
 movieName: any;

 constructor(private moviesService: AppService,
             private route: ActivatedRoute){
  this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
 }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {

      this.directorName = params['director'];
      this.moviesService.getDirectorName(this.directorName).subscribe((data:any[]) => {
        this.directorName = data;
        this.movieName = this.directorName.map(res => res["Title"]);
      });
    });

  }

  // tslint:disable-next-line:typedef
 getColor() {
   return this.serverStatus === 'online' ? 'green' : 'red';
 }
}
