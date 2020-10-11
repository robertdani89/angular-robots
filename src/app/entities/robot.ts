import {IRobot} from '../interfaces/IRobot';

export abstract class Robot {
  id?: number;
  name: string;
  modelId: number;
  modelName: string;
  description: string;
  protected working: boolean;
  workProgress = 0;

  get isWorking(): boolean {
    return this.working;
  }

  public constructor(robot: IRobot) {
    this.constructorInputCheck(robot);
    this.id = robot.id;
    this.name = robot.name;
    this.modelId = robot.modelId;
    this.modelName = robot.modelName;
    this.description = robot.description;
    this.working = false;
  }

  private constructorInputCheck(robot: IRobot): void {
    if (!robot.name) {
      throw new Error('Robot name cannot be empty!');
    }

    if (!robot.modelId) {
      throw new Error('Robot modelId cannot be empty!');
    }

    if (!robot.modelName) {
      throw new Error('Robot modelName cannot be empty!');
    }

    if (!robot.description) {
      throw new Error('Robot description cannot be empty!');
    }
  }

  abstract async getDetails(service): Promise<void>;

  abstract run(args): void;

  abstract emergencyStop(): Promise<boolean>;
}
