import { Component } from '@angular/core';
import { ValuesStore } from './values.store';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = '';

    constructor(private valuesStore: ValuesStore) {
        this.title = 'Indo ao servidor';

        setTimeout(() => {
            this.valuesStore.getWelcomeText().subscribe(resp => {
                this.title = resp;
            })
        }, 2000);
    }
}
