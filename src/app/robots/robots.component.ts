import {Component, OnInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {Robot} from '../entities/robot';
import {RobotsService} from '../services/robots.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {Bender} from '../entities/bender';
import {Beerbot} from '../entities/beerbot';

@Component({
  selector: 'app-robots',
  templateUrl: './robots.component.html',
  styleUrls: ['./robots.component.scss']
})
export class RobotsComponent implements OnInit {
  displayedColumns: string[] = ['icon', 'name', 'description', 'edit', 'delete'];
  dataSource = new MatTableDataSource<any>();

  selectedRobot: Robot;
  loading = false;
  isMobile = false;

  constructor(public robotsService: RobotsService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.refresh();
    this.isMobile = this.getIsMobile();
    window.onresize = () => {
      this.isMobile = this.getIsMobile();
    };
  }

  async refresh(): Promise<void> {
    const mapDto = robotDto => {
      let robot: Robot;
      if (robotDto.modelName === 'Bender') {
        robot = new Bender(robotDto);
      } else if (robotDto.modelName === 'BeerBot') {
        robot = new Beerbot(robotDto);
      }
      return robot;
    };

    this.loading = true;
    const dataDto = await this.robotsService.getRobots();
    this.dataSource.data = dataDto.map(mapDto);
    this.loading = false;
  }

  getIsMobile(): boolean {
    const w = document.documentElement.clientWidth;
    const breakpoint = 600;
    return w < breakpoint;
  }

  addNewRobot(): void {
      const dialogRef = this.dialog.open(RobotPickerDialogComponent, {
        width: '250px'
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result === 1) {
          this.addNewBenderRobot();
        } else if (result === 2) {
          this.addNewBeerBot();
        }
      });
  }

  addNewBenderRobot(): void {
    this.robotsService.createBenderRobot().then(() => this.refresh());
  }

  addNewBeerBot(): void {
    this.robotsService.createBeerRobot().then(() => this.refresh());
  }

  editRobot(robot: Robot): void {
    this.selectedRobot = robot;
    this.selectedRobot.getDetails(this.robotsService);
  }

  async deleteRobot(robot: Robot): Promise<void> {
    const dialogRef = this.dialog.open(RobotDeleteDialogComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.robotsService.deleteRobot(robot.id).then(() => this.refresh());
      }
    });
  }
}

@Component({
  selector: 'app-robot-picker-dialog',
  templateUrl: 'robot-picker-dialog.html',
})
export class RobotPickerDialogComponent {
  constructor(public dialogRef: MatDialogRef<RobotPickerDialogComponent>) { }

}

@Component({
  selector: 'app-robot-delete-dialog',
  templateUrl: 'robot-delete-dialog.html',
})
export class RobotDeleteDialogComponent {
  constructor(public dialogRef: MatDialogRef<RobotDeleteDialogComponent>) { }
}
