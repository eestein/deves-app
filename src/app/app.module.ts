import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ValuesStore } from './values.store';
import { RequestService } from './request.service';
import { HttpModule } from '@angular/http';
import { DevesComponentsModule } from 'dev-es-test-lib';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        DevesComponentsModule
    ],
    providers: [
        RequestService,
        ValuesStore
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
