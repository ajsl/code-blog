import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  admin: boolean;

  constructor(private authservice: AuthService) { }

  ngOnInit() {
    this.checkIsAdmin();
  }

  checkIsAdmin() {
    this.authservice.checkUserIsAuthorised().subscribe({
      next: (response) => {
        console.log(response);
        this.admin = response;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

}
