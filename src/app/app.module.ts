import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
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
    // {path: 'subject', loadChildren: () => import('./subject/subject.module').then(m => m.SubjectModule)},
    {path: 'subject', loadChildren: () => import('./subject/subject.module').then(m => m.SubjectModule), data: { preload: true, delay: true }},
    // {path: 'behavior-subject', loadChildren: () => import('./behavior-subject/behavior-subject.module').then(m => m.BehaviorSubjectModule)}
    {path: 'behavior-subject', loadChildren: () => import('./behavior-subject/behavior-subject.module').then(m => m.BehaviorSubjectModule), data: { preload: true, delay: false }}
]

@NgModule({
	declarations: [
        AppComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(routes, {
			preloadingStrategy : CustomPreloadingService
		}),
        MatDividerModule,
        MatButtonModule,
        MatTabsModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatChipsModule
    ],
    exports: [RouterModule],
    providers: [CustomPreloadingService],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor() {
        console.log("App Module loaded")
    }
}