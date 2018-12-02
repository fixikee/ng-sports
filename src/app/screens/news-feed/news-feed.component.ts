import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {IUser} from '../../dtos';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css']
})
export class NewsFeedComponent implements OnInit {

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.getCurrentUser()
      .subscribe(
        (user: IUser) => {
        },
        error => console.log('Login -> onSubmit', error)
      );
  }
}
