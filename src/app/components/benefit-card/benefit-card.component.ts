import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'benefit-card',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './benefit-card.component.html',
  styleUrl: './benefit-card.component.scss'
})
export class BenefitCardComponent {

  @Input() srcImg: string = "/assets/logo.png";
  @Input() title: string = "Seu titulo aqui";
  @Input() text: string = "Seu texto aqui";

}
