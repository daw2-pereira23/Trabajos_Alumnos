import { createClient } from '@supabase/supabase-js'
// *Creando la conexión con supabase
const supabaseUrl = 'https://mwqrqqcexkflulwzdofr.supabase.co'
// const supabaseKey = process.env.SUPABASE_KEY
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im13cXJxcWNleGtmbHVsd3pkb2ZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzcxNzY2MTksImV4cCI6MTk5Mjc1MjYxOX0.iDcSXnaOhsvdl50gPBYqpIdkXHKsvni1xu2f4mWsNtk'

// *exportamos la conexión
export const supabase = createClient(supabaseUrl, supabaseKey)
