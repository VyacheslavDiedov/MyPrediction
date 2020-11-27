import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit{
    isExpanded = false;
    isLogin = false;
    currentUser: any = null;

    constructor(private router: Router){}

    ngOnInit(): void {
        this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
        if(this.currentUser == null){
            this.router.navigate(['']);
        }else {
            this.isLogin = true;
        }
    }

    isUser(isUser:boolean) {
        this.isLogin = isUser;
    }

    ngOnChanges(changes: boolean) {
        this.isLogin;
    }

    collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

    logout(): void{
        localStorage.removeItem("currentUser");
        this.isLogin = false;
    }
}
