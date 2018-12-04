import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routes } from './app.routing';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
import { SiteinfoComponent } from './siteinfo/siteinfo.component';
import { PackageComponent } from './package/package.component';
import { ClientMsgComponent } from './client-msg/client-msg.component';
import { BookingComponent } from './booking/booking.component';
import { PageTopBarComponent } from './page-top-bar/page-top-bar.component';
import { BookingEditComponent } from './booking-edit/booking-edit.component';
import { BookingAddComponent } from './booking-add/booking-add.component';
import { PackageAddComponent } from './package-add/package-add.component';
import { PackageEditComponent } from './package-edit/package-edit.component';
import { ClientMsgViewComponent } from './client-msg-view/client-msg-view.component';
import { UsersComponent } from './users/users.component';
import { UsersAddComponent } from './users-add/users-add.component';
import { PackageCategoriesComponent } from './package-categories/package-categories.component';
import { PackageCategoriesAddComponent } from './package-categories-add/package-categories-add.component';
import { PackageCategoriesEditComponent } from './package-categories-edit/package-categories-edit.component';
import { UsersEditComponent } from './users-edit/users-edit.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CustomerReviewComponent } from './customer-review/customer-review.component';
import { CustomerReviewViewComponent } from './customer-review-view/customer-review-view.component';
import { PackageTypeComponent } from './package-type/package-type.component';
import { PackageTypeAddComponent } from './package-type-add/package-type-add.component';
import { PackageTypeEditComponent } from './package-type-edit/package-type-edit.component';
import { SiteinfoEditComponent } from './siteinfo-edit/siteinfo-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    SidebarComponent,
    LoginComponent,
    SiteinfoComponent,
    PackageComponent,
    ClientMsgComponent,
    BookingComponent,
    PageTopBarComponent,
    BookingEditComponent,
    BookingAddComponent,
    PackageAddComponent,
    PackageEditComponent,
    ClientMsgViewComponent,
    UsersComponent,
    UsersAddComponent,
    PackageCategoriesComponent,
    PackageCategoriesAddComponent,
    PackageCategoriesEditComponent,
    UsersEditComponent,
    UserProfileComponent,
    CustomerReviewComponent,
    CustomerReviewViewComponent,
    PackageTypeComponent,
    PackageTypeAddComponent,
    PackageTypeEditComponent,
    SiteinfoEditComponent
  ],
  imports: [
    routes,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
