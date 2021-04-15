import { Component } from '@angular/core';
import { AngularFireDatabase} from '@angular/fire/database';
import { County } from './county'
import { MapComponent } from './map/map.component'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items$: Observable<any[]>;
  constructor(db: AngularFireDatabase) {
    this.items$ = db.list('antrim').valueChanges();
  }

  title = 'ancient-ireland';
}
