import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { ActivationComponent } from '../../activation/activation.component';
import { DegreasingComponent } from '../../degreasing/degreasing.component';
import { LoginComponent } from '../../login/login.component';
import { HttpClientModule } from  '@angular/common/http';
import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';
import { GeneralReferenceComponent } from '../../general-reference/general-reference.component';
import { NewGeneralRefComponent } from '../../new-general-ref/new-general-ref.component';
import { APIServiceService } from '../../apiservice.service';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    HttpClientModule,
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    NotificationsComponent,
    UpgradeComponent,
    ActivationComponent,
    DegreasingComponent,
    LoginComponent,
    GeneralReferenceComponent,
    NewGeneralRefComponent,
  ],
  providers: [HttpClientModule, APIServiceService, Location]
})

export class AdminLayoutModule {}
