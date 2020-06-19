import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CbPage } from './cb.page';

describe('CbPage', () => {
  let component: CbPage;
  let fixture: ComponentFixture<CbPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CbPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
