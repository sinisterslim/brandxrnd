import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'brandxrnd';
    showNav: boolean = true;

    // Function that toggles the visibility of the left-hand navigation
    toggleNav() {
        this.showNav = !this.showNav;
    }
}
