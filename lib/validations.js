// lib/validations/inventory.js

import * as z from 'zod';

export const InventorySchema = z.object({
  itemName: z.string().min(1).max(100),
  quantity: z.string().min(1),
  price: z.string().min(0),
  description: z.string().max(500),
  image: z.string().url(),
  // Add more validation rules for other fields if needed
});
