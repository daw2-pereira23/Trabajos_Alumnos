// Importamos la conexión a la base de datos
import { supabase } from './supabase.js'

export class nota {
  constructor (id = null, created_at = null, nota = null, usuario_id, proyecto_id) {
    this.id = id
    this.created_at = created_at
    this.nota = nota
    this.usuario_id = usuario_id
    this.proyecto_id = proyecto_id
  }

  // * Leer todos los proyectos
  static async getAll () {
    const { data: notas, error } = await supabase
      .from('notas')
      .select('usuario_id')
    if (error) {
      throw new Error(error.message)
    }
    return comentarios.map(({ id, created_at, nota, usuario_id, proyecto_id }) => {
      return new comentario(id, created_at, nota, usuario_id, proyecto_id)
    })
  }

  // *leer registro por id (método static que se puede leer desde la clase sin necesidad de crear una instancia)
  static async getById (id) {
    const { data: notas, error } = await supabase
      .from('notas')
      .select('*')
      .eq('id', id)
    if (error) {
      throw new Error(error.message)
    }
    return new comentario(comentario.id, comentario.created_at, comentario.nota, comentario.usuario_id, comentario.proyecto_id)
  }

  static async create (perfildata) {
    const { data, error } = await supabase
      .from('notas')
      .insert([
        { some_column: 'someValue', other_column: 'otherValue' }
      ])
  }
}
