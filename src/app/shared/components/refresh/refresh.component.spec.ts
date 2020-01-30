import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {select, StoreModule} from '@ngrx/store';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {refreshReducer, refreshReducerFunc} from '../../../reducers/refresh/refresh.reducer';
import {RefreshComponent} from './refresh.component';

describe('SettingsComponent', () => {
  let component: RefreshComponent;
  let fixture: ComponentFixture<RefreshComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefreshComponent ],
      imports: [
        StoreModule.forRoot({ refresh: refreshReducer }),
        BrowserAnimationsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefreshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should detect click event on refresh and check if the state of \'refresh\' has changed to true', (done: DoneFn) => {
    component.refreshBtnClick();
    component.$refreshing.subscribe((refresh) => {
      if (refresh) {
        done();
      } else {
        done.fail('refresh did not change the refresh value to true');
      }
    });
  });
});
