import { Component, OnInit } from '@angular/core';
import { FAQDto } from 'src/app/models/faq-model';
import { FaqService } from 'src/app/services/faq.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent implements OnInit {
  Listadofaq: FAQDto[] = [];
  constructor(private faqService: FaqService) {
    this.ObtenerFaq();
  }

  ngOnInit(): void {}

  ObtenerFaq() {
    this.faqService.ObtenerFaq().subscribe((data: FAQDto[]) => {
      this.Listadofaq = data;
      console.log(data);
      
    });
  }
}
