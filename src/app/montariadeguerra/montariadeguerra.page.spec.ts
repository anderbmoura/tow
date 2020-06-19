import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MontariadeguerraPage } from './montariadeguerra.page';

describe('MontariadeguerraPage', () => {
  let component: MontariadeguerraPage;
  let fixture: ComponentFixture<MontariadeguerraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MontariadeguerraPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MontariadeguerraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
