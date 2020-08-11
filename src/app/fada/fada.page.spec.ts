import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FadaPage } from './fada.page';

describe('FadaPage', () => {
  let component: FadaPage;
  let fixture: ComponentFixture<FadaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FadaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FadaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
