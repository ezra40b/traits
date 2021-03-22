type Constructable<T> = new () => T;

export class Impl {
  allow!: object[];

  static For<C extends Impl>(cls: Constructable<C>) {
    const traits = cls.prototype.traits as C["allow"];

    return {
      Do: (implementation: typeof traits[number]) => {

        Object.assign(cls.prototype, implementation);
        return cls as unknown as Constructable<C & typeof implementation>;
      }
    };
  }
}