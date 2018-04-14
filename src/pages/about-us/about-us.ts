import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AboutUsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about-us',
  templateUrl: 'about-us.html',
})
export class AboutUsPage {

  myData : string;

  //myData : string = "<h1>Hello World</h1>"

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.myData     = "<p class=\"p1\"><b>The MatImms app is supported by:</b></p>\n<p class=\"p1\">The Royal College of Obstetrics and Gynecology (RCOG)</p>\n<p class=\"p1\"><strong>The MatImms app was funded by:</strong></p>\n<p class=\"p1\">The National Institute for Health Research (NIHR) Imperial Biomedical Research Centre</p>\n<p class=\"p1\"><strong>Research team:</strong></p>\n<p class=\"p1\"><b><a href=\"http://matimms.org.uk/wp-content/uploads/2016/03/BK.jpg\" rel=\"attachment wp-att-692\"><img class=\"wp-image-692 aligncenter\" src=\"http://matimms.org.uk/wp-content/uploads/2016/03/BK-300x300.jpg\" alt=\"BK\" width=\"111\" height=\"111\" srcset=\"http://localhost/wordpress/wp-content/uploads/2016/03/BK-300x300.jpg 300w, http://localhost/wordpress/wp-content/uploads/2016/03/BK-150x150.jpg 150w, http://localhost/wordpress/wp-content/uploads/2016/03/BK.jpg 324w\" sizes=\"(max-width: 111px) 100vw, 111px\" /></a>Beate Kampmann </b>is a paediatric consultant and professor of <span class=\"s1\">infectious diseases. She has many years of experience caring for sick babies with life-threatening infections. One of her main research focuses is to help prevent childhood infection through new vaccination strategies.</span></p>\n<p><strong><a href=\"http://matimms.org.uk/wp-content/uploads/2016/03/app_BH.jpg\" rel=\"attachment wp-att-694\"><img class=\"wp-image-694 aligncenter\" src=\"http://matimms.org.uk/wp-content/uploads/2016/03/app_BH-300x300.jpg\" alt=\"app_BH\" width=\"111\" height=\"111\" srcset=\"http://localhost/wordpress/wp-content/uploads/2016/03/app_BH-300x300.jpg 300w, http://localhost/wordpress/wp-content/uploads/2016/03/app_BH-150x150.jpg 150w, http://localhost/wordpress/wp-content/uploads/2016/03/app_BH.jpg 323w\" sizes=\"(max-width: 111px) 100vw, 111px\" /></a>Beth Holder</strong> <span class=\"s1\">is a research scientist, studying the impact of maternal vaccination on protecting babies in early life. She is keen to communicate science in an accessible way, and enable women to make informed choices about vaccination in pregnancy.</span></p>\n<p class=\"p1\"><span class=\"s1\"><b>Marielle Bouqueau</b> is a registered midwife, who is passionate about providing clear advice to women on maternal vaccinations, and in exploring mother’s attitudes to vaccines in pregnancy.</span></p>\n";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutUsPage');
  }

}
