import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SidenavMain } from './sidenav-main.component';

describe('SidenavMainComponent', () => {
  let component: SidenavMain;
  let fixture: ComponentFixture<SidenavMain>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SidenavMain],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavMain);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
