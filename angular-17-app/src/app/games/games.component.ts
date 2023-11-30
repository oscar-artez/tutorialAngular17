import { Component, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  template: `
  <h3>Los juegos favoritos de {{username}}
  <ul>
    @for(game of games; track game.id){
      <li (click)="fav(game.name)">{{ game.name }}</li>
    }
  </ul>
  
  `,
  styleUrl: './games.component.css'
})
export class GamesComponent {
  @Input() username = "";
  @Output()addFavoriteEvent = new EventEmitter<string>();
  fav(gameName: string){
    this.addFavoriteEvent.emit(gameName);
   }
  games = [
    {id:1,
      name:'The Witcher 3'
    },
    {id:2,
      name:'The Last of Us'
    },
    {id:3,
      name:'God of War'
    },
  ]
}
