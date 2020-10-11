abstract class Robot {
  id?: string;
  name: string;
  modelId: number;
  modelName: string;
  description: string;

  

  abstract doWork(): void;

  workStarted(): void {
    console.log('work started.');
  }
}
