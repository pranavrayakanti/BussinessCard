// import { Route, RouterModule } from "@angular/router";
// import { DetailComponent } from "../detail/detail.component";
// import { AddComponent } from "../add/add.component";
// import { EditComponent } from "../edit/edit.component";
// import { CardComponent } from "../card.component";

import { CardComponent } from "../card.component";
import { AddComponent } from "../add/add.component";
import { EditComponent } from "../edit/edit.component";
import { DetailComponent } from "../detail/detail.component";
import { RouterModule } from "@angular/router";
import { CardFormComponentComponent } from "../card-form-component/card-form-component.component";
import { Route } from "@angular/compiler/src/core";

export const Routes=[
     {path:'',component:CardComponent},
    {path:'cards',component:CardComponent},
    // {path:'Home',component:CardComponent},
    {path:'add',component:CardFormComponentComponent},
    {path:'edit/:id',component:CardFormComponentComponent},
    {path:'cards/:id',component:DetailComponent},
        ];



        export const Child_ROUTES=RouterModule.forChild(Routes);









        //{path:'cards/:id/:name',component:DetailComponent}



    // const ROUTES:Route[]=[
//     {path:'', component:CardComponent},
//     {path:'cards',component:CardComponent},


//     {path:'cards/:id',component:DetailComponent},
//      {path:'add',component:AddComponent},
//      {path:'edit',component:EditComponent},
//     ];



//     export const Child_ROUTES= RouterModule.forChild(ROUTES);