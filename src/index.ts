import { Impl } from "./impl";

interface Name {
  firstName?: string;
  lastName?: string;
  setName(fullName: string): void;
  getName(): string;
}

class User extends Impl {
  allow!: [
    Name
  ];
}

const UserWithName =
  Impl
    .For(User)
    .Do({
      setName(fullName: string) {
        const names = fullName.split(" ");
        this.firstName = names[0];
        this.lastName = names[1];
      },
      getName() {
        return this.firstName + " " + this.lastName;
      }
    })

const user = new UserWithName();

user.setName("John Doe");

console.log(user.firstName);