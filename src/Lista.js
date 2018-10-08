import React, { Component } from 'react';
import VarListaData from './ListaData';
import { observer } from 'mobx-react'
import './List.css';

class Lista extends Component {
  enviarTarea(evento) {
    if(evento.which === 13) {
      VarListaData.agregarTarea(evento.target.value)
      evento.target.value = '';
    }
  }
  render() {
    let listaDiv = [];
    const agregarDiv = VarListaData.tareas.forEach(
      (value, index) => (listaDiv.push(
          <li className="list-group-item pointer" key={index} title="Completar">
            {value}
            <span onClick={()=> {VarListaData.completarTarea(index)}} className="badge badge-success" title="Completar">
              <i className="glyphicon glyphicon-ok"></i>
            </span>
            <span onClick={()=> {VarListaData.eliminarTarea(index)}} className="badge badge-remove" title="Eliminar">
              <i className="glyphicon glyphicon-remove"></i>
            </span>
          </li>
        ))
      );
    let listaCompletadasDiv = [];
    const agregarCompletadasDiv = VarListaData.tareas_completadas.forEach(
      (value, index) => (listaCompletadasDiv.push(
          <li className="list-group-item" key={index} title="Completar">
            <del>{value}</del>
          </li>
        ))
      );
    return (
      <div className="container">
        <h3 className="text-center">Lista de Tareas <br/> <small>Agrega y elimina tus tareas</small></h3>
        <div className="panel panel-default">
          <div className="panel-body">
            <input onKeyPress={ this.enviarTarea.bind(this) } placeholder="Nombra tu tarea..." type="text" className="form-control" aria-describedby="helpBlock" />
            <span  className="help-block">Agrega un elemento a tu lista de tareas, escribe y presiona <kbd>Enter</kbd>.</span>
            <span className="help-block">Para completar una tarea da <kbd>click</kbd> sobre ella.</span>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <ul className="list-group">
              {listaDiv}
            </ul>
          </div>
        </div>
        <div className="row">
          <h3>Tareas Completadas</h3>
          <div className="col-xs-12">
            <ul className="list-group">
              {listaCompletadasDiv}
            </ul>
          </div>
        </div>
      </div>
    )
  }
};

export default observer(Lista);