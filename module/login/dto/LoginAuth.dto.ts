import * as z from 'zod';

export const LoginAuthSchema = z.object({
  tiers_settings: z.array(
    z
      .object({
        email: z.string(),
        password: z.string(),
      })
      .required()
  ),
});

export type LoginAuthFormDTO = z.infer<typeof LoginAuthSchema>;
