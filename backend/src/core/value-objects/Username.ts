export class Username {
  constructor(public readonly value: string) {
    if (!value) throw new Error('Username cannot be empty')
    if (value.length < 3) throw new Error('Username must be at least 3 characters long')
    if (value.length > 20) throw new Error('Username cannot be longer than 20 characters')
    if (!/^[a-zA-Z0-9_]+$/.test(value))
      throw new Error('Username can only contain letters, numbers, and underscores')
  }

  get getValue(): string {
    return this.value
  }
}
