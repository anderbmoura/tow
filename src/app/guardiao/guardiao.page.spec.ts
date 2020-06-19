import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GuardiaoPage } from './guardiao.page';

describe('GuardiaoPage', () => {
  let component: GuardiaoPage;
  let fixture: ComponentFixture<GuardiaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuardiaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GuardiaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
