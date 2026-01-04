import { Component, inject, OnInit } from '@angular/core';
import { MemberService } from './member-service';
import { FormsModule } from '@angular/forms';
import { Thing } from '../../../+shared/+base/base-thing';
import { BaseCrudPage } from '../../../+shared/+base/base-crud-page';
import { BaseCrudComponent, column } from "../../../+shared/+base/base-crud-component/base-crud-component";
@Component({
  selector: 'app-members-page',
  imports: [FormsModule, BaseCrudComponent],
  templateUrl: './members-page.html',
  styleUrl: './members-page.scss',
})
export class MembersPage extends BaseCrudPage<MembersItem> implements OnInit {
  ngOnInit(): void {
      this.item = {
      firstname: '',
      lastname: '',
      gender: '',
      address: '',
      membershiptype: ''
    }
    this.dataRefresh();
  }
  override setService = inject(MemberService);
  override addPrepair(): void {
    this.item = {
      firstname: '',
      lastname: '',
      gender: '',
      address: '',
      membershiptype: ''
    }
  }
  membersColumns:column[]=[
    { field: 'id', title: 'شناسه' },
    { field: 'firstname', title: 'نام' },
    { field: ' lastname', title: 'نام خانوادگی' },
    { field: '  nationalid', title: 'کدملی' },
    { field: ' gender', title: 'جنسیت' },
    { field: ' mobilenumber', title: 'شماره موبایل' },
    { field: 'address', title: 'ادرس' },
    { field: ' membershiptype', title: 'نوع عضویت' },

  ]
}
export interface MembersItem extends Thing {
  firstname: string;
  lastname: string;
  nationalid?: number;
  gender: string;
  mobilenumber?: number;
  address: string;
  membershiptype: string;

}