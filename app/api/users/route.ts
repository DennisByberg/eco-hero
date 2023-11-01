import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/prisma/client';
import { registerMailSchema } from '../../validationSchemas';

// POST
export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = registerMailSchema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const newUser = await prisma.user.create({
    data: { email: body.email },
  });

  return NextResponse.json(newUser, { status: 201 });
}

// GET
export async function GET(request: NextRequest) {
  const users = await prisma.user.findMany({ orderBy: { email: 'asc' } });
  return NextResponse.json(users);
}
