import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import prisma from '@/prisma/client';

const userSchema = z.object({
  email: z.string().email(),
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = userSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const newRegisteredUser = await prisma.registeredUser.create({
    data: { email: body.email },
  });

  return NextResponse.json(newRegisteredUser, { status: 201 });
}
