import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FamaPage } from './fama.page';

describe('FamaPage', () => {
  let component: FamaPage;
  let fixture: ComponentFixture<FamaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FamaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
