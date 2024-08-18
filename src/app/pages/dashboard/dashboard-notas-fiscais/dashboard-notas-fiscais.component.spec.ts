import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardNotasFiscaisComponent } from './dashboard-notas-fiscais.component';

describe('DashboardNotasFiscaisComponent', () => {
  let component: DashboardNotasFiscaisComponent;
  let fixture: ComponentFixture<DashboardNotasFiscaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardNotasFiscaisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardNotasFiscaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
