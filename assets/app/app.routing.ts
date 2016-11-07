import {Routes, RouterModule} from "@angular/router";
import {DetailsComponent} from "./components/char-details/details.component";
/**
 * Created by ehigginsiii on 11/4/16.
 */

const APP_ROUTES: Routes = [
    {
        path: '',
        redirectTo: '/character',
        pathMatch: 'full'
    },
    {
        path: 'details',
        component: DetailsComponent
    }
];

export const routing = RouterModule.forRoot(APP_ROUTES);