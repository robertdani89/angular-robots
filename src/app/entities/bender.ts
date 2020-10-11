import {Robot} from './robot';
import {RobotsService} from '../services/robots.service';

export class Bender extends Robot{
  currentAngle: number;
  speedWhenEmptyInAnglesPerSecond: number;
  targetAngle: number;
  startingAngle: number;
  bendingSpeedInAnglesPerSeconds: number;

  run(args): void {
    if (this.working){
      return;
    }

    this.working = true;
    const timeToArriveToStart = Math.abs(this.currentAngle - this.startingAngle) / this.speedWhenEmptyInAnglesPerSecond;
    const timeToArriveToFinish = Math.abs(this.startingAngle - this.targetAngle) / this.bendingSpeedInAnglesPerSeconds;
    const timeToReturnToStart = Math.abs(this.startingAngle - this.targetAngle) / this.speedWhenEmptyInAnglesPerSecond;

    const timeToComplete = (timeToArriveToStart + timeToArriveToFinish + timeToReturnToStart) * 1000;
    let timePassed = 0;

    const calculatePosition = (): void => {
      const timePassesInSeconds = timePassed / 1000;

      let speed = 0;
      if (timePassesInSeconds < timeToArriveToStart) {
        speed = this.speedWhenEmptyInAnglesPerSecond;
        if (this.currentAngle > this.startingAngle) {
          speed *= -1;
        }
      } else if (timePassesInSeconds < (timeToArriveToStart + timeToArriveToFinish)) {
        speed = this.bendingSpeedInAnglesPerSeconds;
        if (this.currentAngle > this.targetAngle) {
          speed *= -1;
        }
      } else if (timePassesInSeconds < (timeToArriveToStart + timeToArriveToFinish + timeToReturnToStart)) {
        speed = this.speedWhenEmptyInAnglesPerSecond;
        if (this.currentAngle > this.startingAngle) {
          speed *= -1;
        }
      } else {
        return;
      }

      this.currentAngle += speed * 0.5;
    };

    const timerId = setInterval(() => {
      timePassed += 500;
      calculatePosition();
      this.workProgress = Math.round(timePassed / timeToComplete * 100);
      }, 500);
    setTimeout(() => {
      clearInterval(timerId);
      this.working = false;
      this.currentAngle = this.startingAngle;
      }, timeToComplete);
  }



  emergencyStop(): Promise<boolean> {
    return Promise.resolve(true);
  }

  async getDetails(robotService: RobotsService): Promise<void> {
    if (this.working) {
      return;
    }
    const benderDetails = await robotService.getBenderDetails(this.id);
    this.targetAngle = benderDetails.targetAngle;
    this.startingAngle = benderDetails.startingAngle;
    this.currentAngle = benderDetails.currentAngle;
    this.speedWhenEmptyInAnglesPerSecond = benderDetails.speedWhenEmptyInAnglesPerSecond;
    this.bendingSpeedInAnglesPerSeconds = benderDetails.bendingSpeedInAnglesPerSeconds;
  }
}
