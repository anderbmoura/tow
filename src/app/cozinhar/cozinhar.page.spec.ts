import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CozinharPage } from './cozinhar.page';

describe('CozinharPage', () => {
  let component: CozinharPage;
  let fixture: ComponentFixture<CozinharPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CozinharPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CozinharPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
