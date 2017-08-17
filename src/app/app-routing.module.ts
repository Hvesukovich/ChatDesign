import {NgModule} from "@angular/core";
import {RouterModule, PreloadAllModules} from "@angular/router";
import {AppComponent} from "./app.component";


const ROUTES = [
    {path: '', component: AppComponent},
    {path: '**', component: AppComponent}
    
];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES, {useHash: false, preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule {
}


