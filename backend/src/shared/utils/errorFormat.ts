export const errorFormat = (error: unknown) =>
  error instanceof Error
    ? {
        name: error.name,
        message: error.message,
        stack: error.stack
      }
    : { name: 'UnknownError', message: String(error) }
