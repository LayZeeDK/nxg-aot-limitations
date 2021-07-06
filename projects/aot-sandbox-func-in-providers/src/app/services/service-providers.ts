import { AppService } from './app.service';

export function getService(k: any) {
  return (services as any)[k];
}

const services = {
  AppService: AppService,
};

export const serviceProviders = Object.keys(services).map(getService);
