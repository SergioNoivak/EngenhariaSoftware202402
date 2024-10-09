import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaAulaComponent } from './tabela-aula.component';

describe('TabelaAulaComponent', () => {
  let component: TabelaAulaComponent;
  let fixture: ComponentFixture<TabelaAulaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaAulaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaAulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
