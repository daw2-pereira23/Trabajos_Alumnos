import { supabase } from '../bd/supabase'

export class proyecto {
  constructor (id = null, created_at = null, nombre = null, descripcion = null, usuario_id = null, nota = null) {
    this.id = id
    this.created_at = created_at
    this.nombre = nombre
    this.descripcion = descripcion
    this.usuario_id = usuario_id
    this.nota = nota
  }

  // * Leer todos los proyectos
  static async getAll () {
    const { data: proyectos, error } = await supabase
      .from('proyectos')
      .select('*')
    if (error) {
      throw new Error(error.message)
    }
    //* Devolvemos el array de objetos
    return proyecto.map(({ id, created_at, nombre, descripcion, usuario_id, nota }) => {
      return new proyecto(id, created_at, nombre, descripcion, usuario_id, nota)
    })
  }

  static async getById (id) {
    const { data: proyectos, error } = await supabase
      .from('proyectos')
      .select('*')
      .eq('id', id)
      .single()
    if (error) {
      throw new Error(error.message)
    }
    // * Devolvemos el objeto
    return new proyecto(proyecto.id, proyecto.created_at, proyecto.nombre, proyecto.usuario_id, proyecto.nota)
  }

  static async create (proyectodata) {
    const { data, error } = await supabase
      .from('proyectos')
      .insert([
        { proyectodata }
      ])
    if (error) {
      throw new Error(error.message)
    }
    return true
  }

  // * Actualizar
  static async update () {
    const { data, error } = await supabase
      .from('proyectos')
      .update({
        nombre: this.nombre,
        descripcion: this.descripcion,
        nota: this.nota
      })
      .eq('id', this.id)
      .single()
    if (error) {
      throw new Error(error.message)
    }
    return true
  }

  // * Borrar
  static async delete (id) {
    const { data, error } = await supabase
      .from('proyectos')
      .delete()
      .eq('id', id)
    if (error) {
      throw new Error(error.message)
    }
    return true
  }
}
