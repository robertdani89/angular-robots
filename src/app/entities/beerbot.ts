import {Robot} from './robot';
import {RobotsService} from '../services/robots.service';

export class Beerbot extends Robot{
  servingTimeInSeconds: number;
  beersServed: number;

  run(args): void {
    if (!args.robotService) {
      return;
    }

    if (this.working) {
      return;
    }

    this.working = true;
    const service: RobotsService = args.robotService;
    service.pourBeer(this).then(() => {
      this.working = false;
    });
  }

  emergencyStop(): Promise<boolean> {
    return Promise.resolve(true);
  }

  async getDetails(robotService: RobotsService): Promise<void> {
    const beerRobotDetails = await robotService.getBeerBotDetails(this.id);
    this.servingTimeInSeconds = beerRobotDetails.servingTimeInSeconds;
    this.beersServed = beerRobotDetails.beersServed;
  }
}
