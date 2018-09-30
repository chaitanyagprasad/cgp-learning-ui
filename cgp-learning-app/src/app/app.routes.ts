import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginPageComponent } from "./login-page/login-page.component";


export const routes: Routes = [
    { path: 'login', component: LoginPageComponent },
    { path: '**' , redirectTo: '/login' },
    { path:'', redirectTo: '/login', pathMatch:'full' }
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class CgpLearningRoutingModule { }