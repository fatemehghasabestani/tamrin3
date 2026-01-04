import { Injectable } from '@angular/core';
import { MembersItem } from './members-page';
import{BaseService}from'../../../+shared/+base/base-service';

@Injectable({
  providedIn: 'root',
})
export class MemberService extends BaseService<MembersItem> {
    override data: MembersItem[] = [
      { id: 1, firstname: 'فاطمه', lastname: 'خزایی', nationalid: 3950695133, gender: 'مونث', mobilenumber: 9309908765, address: 'همدان  ', membershiptype: 'عادی' },
      { id: 2, firstname: 'محمد', lastname: 'سلگی', nationalid: 3960876543, gender: 'مذکر', mobilenumber: 9112345654, address: 'تهران', membershiptype: 'دانشجویی' },
      { id: 3, firstname: 'لیلا', lastname: 'زمانی', nationalid: 5678900987, gender: 'مونث', mobilenumber: 9367890987, address: 'نهاوند', membershiptype: 'ویژه' },
      { id: 4, firstname: 'رضا', lastname: 'رمضانی', nationalid: 7654322343, gender: 'مذکر', mobilenumber: 9197654567, address: 'شیراز', membershiptype: 'عادی' },
      { id: 5, firstname: 'پریا', lastname: 'مومیوند', nationalid: 3958790523, gender: 'مونث', mobilenumber: 9301298765, address: 'مشهد', membershiptype: 'دانشجویی' },
    ];
    override update(destination: MembersItem, source: MembersItem):void {
        destination.firstname= source. firstname;
        destination.lastname = source.lastname;
        destination.nationalid =source.nationalid;
        destination. gender =source. gender;
         destination.mobilenumber =source. mobilenumber;
          destination. address =source. address;
           destination.membershiptype=source. membershiptype;
      }
}
