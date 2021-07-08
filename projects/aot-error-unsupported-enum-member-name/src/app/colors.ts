import { InjectionToken } from '@angular/core';

export enum Colors {
  Red = 1,
  White,
  Blue = 'Blue'.length,
}

export const BaseColor = new InjectionToken<number>('Base color');
export const DangerColor = new InjectionToken<number>('Danger color');
export const StrongColor = new InjectionToken<number>('Strong color');
