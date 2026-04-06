import bcrypt from 'bcrypt'
import { env } from '../../shared/const/env'

export class Password {
  constructor(private readonly value: string) {}

  static create(plainText: string): Password {
    if (plainText.length < 8) throw new Error('Password must be at least 8 characters long')
    if (!plainText) throw new Error('Password cannot be empty')

    return new Password(plainText)
  }

  static fromHash(hash: string): Password {
    return new Password(hash)
  }

  async hashPassword(): Promise<string> {
    const salt = await bcrypt.genSalt(env.SALT)
    return await bcrypt.hash(this.value, salt)
  }

  async comparePassword(plainText: string): Promise<boolean> {
    return await bcrypt.compare(plainText, this.value)
  }

  get getValue(): string {
    return this.value
  }
}
