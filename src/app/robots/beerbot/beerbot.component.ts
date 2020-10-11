import {Component, Input, OnInit} from '@angular/core';
import {RobotsService} from '../../services/robots.service';
import {Beerbot} from '../../entities/beerbot';

@Component({
  selector: 'app-beerbot',
  templateUrl: './beerbot.component.html',
  styleUrls: ['./beerbot.component.scss']
})
export class BeerbotComponent {

  @Input() beerRobot: Beerbot;

  constructor(private robotService: RobotsService) { }

  addBeer = () => {
    this.beerRobot.run({robotService: this.robotService});
  }

  async updateRobot(): Promise<void> {
    if (this.beerRobot.id !== undefined) {
      await this.robotService.updateRobot(this.beerRobot);
    }
  }
}
