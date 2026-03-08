import { Component, OnInit } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { peopleOutline, calendarOutline, cartOutline } from 'ionicons/icons';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, RouterLink],
})
export class TabsPage implements OnInit {
  constructor() {}

  ngOnInit(){
    addIcons({ peopleOutline, calendarOutline, cartOutline });
  }
}