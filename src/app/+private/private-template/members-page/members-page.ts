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
      this.memberService.add(this.item);
   this.dataRefresh();
   this.state='list';

  }
  ngOnInit(): void {
    this.dataRefresh();
  }
  data: MembersItem[] = [];
  item:MembersItem={
    id:0,
    firstname:'',
    lastname:'',
    nationalid:0,
    gender:'',
    mobilenumber:0,
    address:'',
    membershiptype:'',
  };
  memberService = inject(MemberService);
  state: string = 'list';
  dataRefresh() {
    this.data = this.memberService.list();
  }

  add() {
   this.state='add';
  
  }
  cancel(){
    this.state='list';
  }
}
export interface MembersItem {
  id: number;
  firstname: string;
  lastname: string;
  nationalid: number;
  gender: string;
  mobilenumber: number;
  address: string;
  membershiptype: string;

}