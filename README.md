# Traits

This is just a simple little project that tries to replicate the traits system that Rust uses in Typescript

# How it works

In Rust, a trait like a set of properties/methods that a structure can inherit and use with that structure's own proeprties.

https://doc.rust-lang.org/book/ch10-02-traits.html

Here is a simple example similar to the one in the docs:

```rust
struct Book {}

trait Summary {
  fn summarize(&self) -> String;
}

impl Summary for Book {
  fn summarize(&self) -> String {
    "This is a summary"
  }
}

fn main() {
  let book = Book {};

  println!("{}", book.summarize());
}
```

This is the same example using this library:

```typescript
// will be imported whenever I get around to making a package
class Book extends Impl {
  allow!: [
    Summary
  ]
}

interface Summary {
  summarize(): string;
}

const BookWithSummary = 
  Impl
    .For(Book)
    .Do({
      summarize() {
        return "This is a summary";
      }
    })

const book = new BookWithSummary();

console.log(book.summarize());
```

As you probably noticed, there are a few differences between these examples. The first is that with my library you create an array type on the original structure that describes the allowed traits. 

This is useful because it means you can implement more than one trait using `.Do()`, since this function accepts as many implementations as you have allowed in the class Description (using the spread operator). It is also useful because it means you will always know what traits are going to be added to the structure. 

I am very open to ideas and advice since this is just an idea I made on a sunday night so if you would like to reach me email me at ezgoldner@gmail.com