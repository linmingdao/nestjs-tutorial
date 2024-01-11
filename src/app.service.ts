import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHome(): string {
    return 'Home';
  }
  getHello(): string {
    return 'Hello World!';
  }

  getTime(): number {
    return Date.now();
  }
}
