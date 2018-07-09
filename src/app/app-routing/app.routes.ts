import { Routes } from "@angular/router";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { NotFoundComponent } from "../utils/not-found/not-found.component";
import { GameManagerComponent } from "../game/game-manager/game-manager.component";

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
    },
    {
        path: 'play',
        component: GameManagerComponent
    },
    {
        path: 'chat',
        component: DashboardComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];

export { routes };