import { NgModule } from "@angular/core";
import { SubjectComponent } from "./subject.component";
import { SubjectLeftComponent } from "../subject-left/subject-left.component";
import { SubjectRightComponent } from "../subject-right/subject-right.component";
import { SubjectService } from "../service/subject-service";
import { MatDividerModule } from "@angular/material/divider";
import { MatButtonModule } from "@angular/material/button";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { MatTabsModule } from "@angular/material/tabs";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatCardModule } from "@angular/material/card";

const routes : Routes = [
    {path: '', component: SubjectComponent}
]

@NgModule({
	declarations: [
        SubjectComponent,
        SubjectLeftComponent,
        SubjectRightComponent
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
    bootstrap: [SubjectComponent]
})
export class SubjectModule {
    constructor() {
        console.log("Subject Module loaded")
    }
}