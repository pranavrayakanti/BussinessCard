import { ListComponent } from "./list/list.component";
import { FormComponent } from "./form/form.component";
import { RouterModule } from "@angular/router";

export const Routes=[
    {path:'',component:ListComponent},
    {path:'userlist',component:ListComponent},
   {path:'adduser',component:FormComponent},
       ];



       export const User_ROUTES=RouterModule.forChild(Routes);

