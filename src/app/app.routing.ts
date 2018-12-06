import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { PackageComponent } from './package/package.component';
import { SiteinfoComponent } from './siteinfo/siteinfo.component';
import { ClientMsgComponent } from './client-msg/client-msg.component';
import { BookingComponent } from './booking/booking.component';
import { BookingAddComponent } from './booking-add/booking-add.component';
import { BookingEditComponent } from './booking-edit/booking-edit.component';
import { PackageAddComponent } from './package-add/package-add.component';
import { PackageEditComponent } from './package-edit/package-edit.component';
import { ClientMsgViewComponent } from './client-msg-view/client-msg-view.component';
import { UsersComponent } from './users/users.component';
import { UsersAddComponent } from './users-add/users-add.component';
import { UsersEditComponent } from './users-edit/users-edit.component';
import { PackageCategoriesComponent } from './package-categories/package-categories.component';
import { PackageCategoriesAddComponent } from './package-categories-add/package-categories-add.component';
import { PackageCategoriesEditComponent } from './package-categories-edit/package-categories-edit.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CustomerReviewComponent } from './customer-review/customer-review.component';
import { CustomerReviewViewComponent } from './customer-review-view/customer-review-view.component';
import { PackageTypeComponent } from './package-type/package-type.component';
import { PackageTypeAddComponent } from './package-type-add/package-type-add.component';
import { PackageTypeEditComponent } from './package-type-edit/package-type-edit.component';
import { SiteinfoEditComponent } from './siteinfo-edit/siteinfo-edit.component';
import { ComposeClientMsgComponent } from './compose-client-msg/compose-client-msg.component';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';
import { WhatWeDoEditComponent } from './what-we-do-edit/what-we-do-edit.component';
import { UsersViewComponent } from './users-view/users-view.component';


export const router: Routes = [

    { path: '', component: IndexComponent },
    { path: 'login', component: LoginComponent },
    { path: 'package', component: PackageComponent },
    { path: 'siteinfo', component: SiteinfoComponent },
    { path: 'clientmsg', component: ClientMsgComponent },
    { path: 'booking', component: BookingComponent },
    { path: 'bookingAdd', component: BookingAddComponent },
    { path: 'bookingEdit', component: BookingEditComponent },
    { path: 'packageAdd', component: PackageAddComponent },
    { path: 'packageEdit', component: PackageEditComponent },
    { path: 'clientMsgView', component: ClientMsgViewComponent },
    { path: 'users', component: UsersComponent },
    { path: 'usersAdd', component: UsersAddComponent },
    { path: 'usersEdit', component: UsersEditComponent },
    { path: 'packageCategories', component: PackageCategoriesComponent },
    { path: 'packageCategoriesAdd', component: PackageCategoriesAddComponent },
    { path: 'packageCategoriesEdit', component: PackageCategoriesEditComponent },
    { path: 'userProfile', component: UserProfileComponent },
    { path: 'customerReview', component: CustomerReviewComponent },
    { path: 'customerReviewView', component: CustomerReviewViewComponent },
    { path: 'packageType', component: PackageTypeComponent },
    { path: 'packageTypeAdd', component: PackageTypeAddComponent },
    { path: 'packageTypeEdit', component: PackageTypeEditComponent },
    { path: 'siteinfoEdit', component: SiteinfoEditComponent },
    { path: 'composeClientMsg', component: ComposeClientMsgComponent },
    { path: 'whatWeDo', component: WhatWeDoComponent },
    { path: 'whatWeDoEdit', component: WhatWeDoEditComponent },
    { path: 'usersView', component: UsersViewComponent }


];

export const routes: ModuleWithProviders = RouterModule.forRoot(router, {useHash: true});