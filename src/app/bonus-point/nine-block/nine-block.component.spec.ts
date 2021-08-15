import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NineBlockComponent } from './nine-block.component';

describe('NineBlockComponent', () => {
  let component: NineBlockComponent;
  let fixture: ComponentFixture<NineBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NineBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NineBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
