import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, map, switchMap } from 'rxjs/operators';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    showNav: boolean = true;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private titleService: Title
    ) {}

    ngOnInit() {
        // Set page title based on data.title set in the router
        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd),
            map(() => this.activatedRoute),
            map(route => route.firstChild),
            switchMap(route => route.data),
            map((data) => {
                if (data.title) {
                    // If a route has a title set (e.g. data: {title: "Foo"}) then we use it
                    return data.title;
                } 
                else {
                    // No title set
                    return '';
                }
            })
        )
        .subscribe((pathString) => this.titleService.setTitle('Brand X RnD - ' + pathString));
    }

    // Function that toggles the visibility of the left-hand navigation
    toggleNav() {
        this.showNav = !this.showNav;
    }
}
