import { z } from 'zod';

export const registerMailSchema = z.object({
  email: z.string().email(),
});
