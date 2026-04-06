#!/usr/bin/bash

echo "Running migrations..."
npx prisma migrate deploy
echo "Running prisma generate..."
npx prisma generate

echo "Starting server..."
npm run start:prod
