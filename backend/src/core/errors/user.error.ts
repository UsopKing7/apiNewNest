export namespace UserErrors {
  export class UsernameAlreadyExistsError extends Error {
    constructor() {
      super('Username already exists')
      this.name = 'UsernameAlreadyExistsError'
    }
  }

  export class EmailAlreadyExistsError extends Error {
    constructor() {
      super('Email already exists')
      this.name = 'EmailAlreadyExistsError'
    }
  }

  export class InvalidCredentialsError extends Error {
    constructor() {
      super('Invalid credentials')
      this.name = 'InvalidCredentialsError'
    }
  }
}
