import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TrilhadasestrelasPage } from './trilhadasestrelas.page';

describe('TrilhadasestrelasPage', () => {
  let component: TrilhadasestrelasPage;
  let fixture: ComponentFixture<TrilhadasestrelasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrilhadasestrelasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TrilhadasestrelasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
