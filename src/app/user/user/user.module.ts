import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { RoleGuard } from 'src/app/shared/model/role.guard';
import { MyTicketsComponent } from './my-tickets/my-tickets.component';
import { RouterModule, Routes } from '@angular/router';
import { MatTableModule } from '@angular/material/table';

const routes: Routes = [
  {
    path: 'user',
    canActivate: [RoleGuard],
    children: [
      {
        path: 'my-tickets',
        component: MyTicketsComponent
      }
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UserComponent,
    MyTicketsComponent
  ]
})
export class UserModule { }
