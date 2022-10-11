import { Component, OnInit } from "@angular/core";
import { IUserModel } from "../../models/user-model";
import { HomeService } from "../../services/home.service";


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    title:string;
    users: IUserModel[];
    condition1 = true;
    condition2 = true;
    condition3 = true;
    list: any[];
    constructor(private homeService: HomeService){
        this.list = ['C', 'D', 'A', 'AV', 'CD'];
    }

    ngOnInit(): void {
        
        this.title = this.homeService.title;
        this.homeService.getUsers().subscribe(
            (users) => this.users = users);
    }


}