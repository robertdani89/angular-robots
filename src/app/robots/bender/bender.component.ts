import {Component, Input, OnInit} from '@angular/core';
import {Bender} from '../../entities/bender';
import {RobotsService} from '../../services/robots.service';

@Component({
  selector: 'app-bender',
  templateUrl: './bender.component.html',
  styleUrls: ['./bender.component.scss']
})
export class BenderComponent {
  @Input() benderRobot: Bender;

  constructor(private robotService: RobotsService) { }

  async updateRobot(): Promise<void> {
    if (this.benderRobot.id !== undefined) {
      await this.robotService.updateRobot(this.benderRobot);
    }
  }
}
