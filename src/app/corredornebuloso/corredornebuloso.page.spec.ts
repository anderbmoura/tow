import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CorredornebulosoPage } from './corredornebuloso.page';

describe('CorredornebulosoPage', () => {
  let component: CorredornebulosoPage;
  let fixture: ComponentFixture<CorredornebulosoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorredornebulosoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CorredornebulosoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
