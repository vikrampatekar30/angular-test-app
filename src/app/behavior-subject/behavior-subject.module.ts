import { NgModule } from "@angular/core";
import { BehaviorSubjectComponent } from "./behavior-subject.component";
import { BehaviorSubjectLeftComponent } from "../behavior-subject-left/behavior-subject-left.component";
import { BehaviorSubjectRightComponent } from "../behavior-subject-right/behavior-subject-right.component";
import { MatDividerModule } from "@angular/material/divider";
import { MatButtonModule } from "@angular/material/button";
import { SubjectService } from "../service/subject-service";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { MatTabsModule } from "@angular/material/tabs";
import { MatCardModule } from "@angular/material/card";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

const routes : Routes = [
    {path: '', component: BehaviorSubjectComponent}
]

@NgModule({
	declarations: [
        BehaviorSubjectComponent,
        BehaviorSubjectLeftComponent,
        BehaviorSubjectRightComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatDividerModule,
        MatButtonModule,
        MatTabsModule,
        MatCardModule
    ],
    providers: [SubjectService],
    bootstrap: [BehaviorSubjectComponent]
})
export class BehaviorSubjectModule {
    constructor() {
        console.log("Behavior Subject Module loaded")
    }
}