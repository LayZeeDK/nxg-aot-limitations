export interface Configuration {
  readonly bar: Bar;
  readonly foo: Foo;
}

export abstract class Bar {
  abstract readonly bar: string;
}

export abstract class Foo {
  abstract readonly foo: string;
}

export const configuration: Configuration = {
  bar: {
    bar: 'bar',
  },
  foo: {
    foo: 'foo',
  },
};
