
// Cargamos librerias de supabase
import { clippingParents } from '@popperjs/core'
import { createClient } from '@supabase/supabase-js'

export const pruebas = {
  template: '<h1>Pruebas</h1>',

  script: async () => {
    console.log('Vista Prueba cargada')

    // Conexion con supabase
    const supabaseUrl = 'https://mwqrqqcexkflulwzdofr.supabase.co'
    // const supabaseKey = process.env.SUPABASE_KEY
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im13cXJxcWNleGtmbHVsd3pkb2ZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzcxNzY2MTksImV4cCI6MTk5Mjc1MjYxOX0.iDcSXnaOhsvdl50gPBYqpIdkXHKsvni1xu2f4mWsNtk'
    // Cremoa la conexion con supabase(con el Backend)
    const supabase = createClient(supabaseUrl, supabaseKey)

    // Leer todas las columnas
    const leerTodosPerfiles = async () => {
      const { data: perfiles, error } = await supabase
        .from('perfiles')
        .select('*')

      return perfiles
    }

    leerTodosPerfiles()

    /*
    // Insertar nuevo perfil
    const agregarPerfil = async () => {
      const { data, error } = await supabase
        .from('perfiles')
        .insert([
          { nombre: 'Ejemplo' }
        ])
    }
    */
    // Proyectos detalles a partir de funcion PostGreesSQL

    const leerProyectosDetalle = async () => {
      const { data, error } = await supabase
        .rpc('proyectosdetalle')

      if (error) console.error(error)
      else console.log('Proyectos con detalles', data)
      return (data)
    }

    leerProyectosDetalle()

    // User Login
    const login = async () => {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: 'sergiopereirahidalgo@gmail.com',
        password: 'klkpapi!'
      })
    }

    const verUsuarioLogueado = async () => {
      // Get User
      const { data: { user } } = await supabase.auth.getUser()
      return user
    }

    const logout = async () => {
      const { error } = await supabase.auth.signOut()
    }

    logout()
    // 1. Miramos usuario logueado
    console.log('Detalle usuario logeado', await verUsuarioLogueado())

    // Me logueo
    await login()
    console.log('Detalle usuario logeado', await verUsuarioLogueado())

    console.log('Todos los perfiles', await leerTodosPerfiles())

    console.log('Leer proyecto detalles', await leerProyectosDetalle())

    const registro = async () => {
      // USER SIGNUP
      const { data, error } = await supabase.auth.signUp({
        email: 'grbaandcottofficial@gmail.com',
        password: '123456'
      })
    }
    registro()
  }
}
