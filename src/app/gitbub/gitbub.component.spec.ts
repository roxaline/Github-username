import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitbubComponent } from './gitbub.component';

describe('GitbubComponent', () => {
  let component: GitbubComponent;
  let fixture: ComponentFixture<GitbubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitbubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitbubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
