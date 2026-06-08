import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JogadoresComponent } from './jogadores';

describe('JogadoresComponent', () => {
  let component: JogadoresComponent;
  let fixture: ComponentFixture<JogadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JogadoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JogadoresComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
