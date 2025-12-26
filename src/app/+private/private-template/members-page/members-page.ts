import { Component, inject, OnInit } from '@angular/core';
import { MemberService } from './member-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-members-page',
  imports: [FormsModule],
  templateUrl: './members-page.html',
  styleUrl: './members-page.scss',
})
export class MembersPage implements OnInit {
  save() {
    if (this.state == 'add') {
      this.memberService.add(this.item);
    }else if (this.state == 'edit') {
      this.memberService.edit(this.item);
    }else if (this.state == 'remove') {
      this.memberService.remove(this.item);
    }
    
    this.dataRefresh();
    this.state = 'list';
  }
  ngOnInit(): void {
    this.dataRefresh();
  }
  data: MembersItem[] = [];
  item: MembersItem = {
    firstname: '',
    lastname: '',
    gender: '',
    address: '',
    membershiptype: '',
  };
  memberService = inject(MemberService);
  state: string = 'list';
  dataRefresh() {
    this.data = this.memberService.list();
  }

  add() {
    this.state = 'add';
    this.item = {
      firstname: '',
      lastname: '',
      gender: '',
      address: '',
      membershiptype: '',
    };

  }
  edit(member: MembersItem) {
    this.item = { ...member };
    this.state = 'edit';
  }
   remove(member:MembersItem){
        this.item = { ...member };
          this.state = 'remove';
   this.item = {
      firstname: '',
      lastname: '',
      gender: '',
      address: '',
      membershiptype: '',
    };
     
  
    }
  cancel() {
    this.state = 'list';
  }
}
export interface MembersItem {
  id?: number;
  firstname: string;
  lastname: string;
  nationalid?: number;
  gender: string;
  mobilenumber?: number;
  address: string;
  membershiptype: string;

}