import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Hero[] {
    this.messageService.add('HeroService: fetched heroes');
    return HEROES;
  }

  getHero(id: number): Hero {
  this.messageService.add("HeroService: fetched hero id=" + id);
  return HEROES.find(hero => hero.id === id);
}
}