import { extendObservable} from 'mobx';

class ListaData {
  constructor() {
    // 2 parametros, this y un objeto
    extendObservable(this, {
      tareas: [
        'Aprender React',
        'Crear aplicación con React'
      ],
      tareas_completadas: []
    });
  }
  agregarTarea(tarea) {
    console.log('agregarTarea(tarea)', tarea);
    this.tareas.push(tarea);
  }
  eliminarTarea(index) {
    console.log('eliminarTarea(tarea)', index);
    this.tareas.splice(index, 1);
  }
  completarTarea(index) {
    let tareaCompletada = this.tareas.splice(index, 1);
    this.tareas_completadas.push(tareaCompletada);
  }
}

var VarListaData = new ListaData;
export default VarListaData;