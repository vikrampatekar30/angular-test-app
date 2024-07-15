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
import { MatDividerModule } from "@angular/material/divider";
import { MatButtonModule } from "@angular/material/button";
import { MatTabsModule } from "@angular/material/tabs";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatCardModule } from "@angular/material/card";
import { MatChipsModule } from "@angular/material/chips";
import { CustomPreloadingService } from "./service/custom-preloading.service";

const routes : Routes = [
    {path: '', component: HomeComponent},
    {path: 'subject', component: SubjectComponent},
    {path: 'behavior-subject', component: BehaviorSubjectComponent}
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
        SubjectModule,
        BehaviorSubjectModule,
        MatTabsModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatChipsModule
    ],
    providers: [CustomPreloadingService],
    bootstrap: [AppComponent]
})
export class AppModuleEager {
    constructor() {
        console.log("App Module loaded")
    }
}