import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatTabsModule } from "@angular/material/tabs";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuardService } from "../auth/auth-guard.service";
import { SharedModule } from "../shared/shared.module";
import { AccountComponent } from "./account.component";

const routes: Routes = [
    {path: '', component: AccountComponent, canActivate: [AuthGuardService]}
]


@NgModule({
    declarations: [
        AccountComponent,
    ],
    imports: [
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        SharedModule,
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatTabsModule,
        MatGridListModule,
        MatCheckboxModule,
    ],
    exports: [
        // AccountComponent,
        // RouterModule,
    ]
})

export class AccountModule {}