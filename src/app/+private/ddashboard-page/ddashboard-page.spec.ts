import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DdashboardPage } from './ddashboard-page';

describe('DdashboardPage', () => {
  let component: DdashboardPage;
  let fixture: ComponentFixture<DdashboardPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DdashboardPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DdashboardPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
