import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FrontedagloriaPage } from './frontedagloria.page';

describe('FrontedagloriaPage', () => {
  let component: FrontedagloriaPage;
  let fixture: ComponentFixture<FrontedagloriaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontedagloriaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FrontedagloriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
