import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EquipamentosPage } from './equipamentos.page';

describe('EquipamentosPage', () => {
  let component: EquipamentosPage;
  let fixture: ComponentFixture<EquipamentosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipamentosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EquipamentosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
