import { createClient } from "@supabase/supabase-js";

console.log("Supabase URL:", process.env.SUPABASE_URL); // Debugging line
console.log("Supabase Key:", process.env.SUPABASE_KEY); // Debugging line

export const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);
