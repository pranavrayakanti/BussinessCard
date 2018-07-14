import { CardComponent } from "./card/card.component";
import { RouterModule, Route } from "@angular/router";


// export const Routes=[
// {path:'',component:CardComponent},
// {path:'cards',component:CardComponent},
// {path:'cards/:id',component:DetailComponent},
// {path:'add',component:AddComponent},
// {path:'edit',component:EditComponent},
// ];
// export const APP_ROUTES=RouterModule.forRoot(Routes);


export const Routes:Route[]=[
    {path:'',redirectTo:'CardComponent',pathMatch:'full'},
    {path:'cards',component:CardComponent},
    {path:'cards/:id',loadChildren:'src/app/card/card/card.module#CardModule'}
    //{path:'userhome',loadChildren:'src/angular/cardsapp/src/app/users/users.module#UsersModule'}
      
,{path:'userlist',loadChildren:'src/app/users/users.module#UsersModule'}



];



 export const APP_ROUTES=RouterModule.forRoot(Routes);








