import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlackInfoComponent } from './slack-info.component';

describe('SlackInfoComponent', () => {
  let component: SlackInfoComponent;
  let fixture: ComponentFixture<SlackInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlackInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlackInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
