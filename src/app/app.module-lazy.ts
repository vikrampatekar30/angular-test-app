import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { SubjectModule } from "./subject/subject.module";
import { BehaviorSubjectModule } from "./behavior-subject/behavior-subject.module";
import { RouterModule, Routes } from "@angular/router";
import { SubjectComponent } from "./subject/subject.component";
import { BehaviorSubjectComponent } from "./behavior-subject/behavior-subject.component";
import { HomeComponent } from "./home/home.component";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatDividerModule } from "@angular/material/divider";
import { MatButtonModule } from "@angular/material/button";
import { MatTabsModule } from "@angular/material/tabs";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatCardModule } from "@angular/material/card";
import { MatChipsModule } from "@angular/material/chips";
import { CustomPreloadingService } from "./service/custom-preloading.service";

const routes : Routes = [
    {path: '', component: HomeComponent},
    {path: 'subject', loadChildren: () => import('./subject/subject.module').then(m => m.SubjectModule)},
    {path: 'behavior-subject', loadChildren: () => import('./behavior-subject/behavior-subject.module').then(m => m.BehaviorSubjectModule)}
    // {path: 'behavior-subject', component: BehaviorSubjectComponent}
]

@NgModule({
	declarations: [
        AppComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(routes),
        MatDividerModule,
        MatButtonModule,
        // BehaviorSubjectModule,
        MatTabsModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatChipsModule
    ],
    exports:[RouterModule],
    providers: [CustomPreloadingService],
    bootstrap: [AppComponent]
})
export class AppModuleLazy {
    constructor() {
        console.log("App Module loaded")
    }
}