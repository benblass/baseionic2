import {Page} from 'ionic-angular';
import {HomePage} from '../home/home';
import {ProfilePage} from '../profile/profile';


@Page({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  profileRoot: any = ProfilePage;
  homeRoot: any = HomePage;
}
