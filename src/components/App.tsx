import React from "react";
import { connect } from "react-redux";
import { Todo, fetchTodos } from "../actions";
import { StoreState } from "../reducers";

interface AppProps {
  todos: Todo[];
  fetchTodos(): any;
}

function _App(props: AppProps) {
  const onButtonClick = (): void => {
    console.log("hihi");
    props.fetchTodos();
  };

  const renderList = (): JSX.Element[] => {
    return props.todos.map((todo: Todo) => {
      return <div key={todo.id}>{todo.title}</div>;
    });
  };

  return (
    <div>
      <button onClick={onButtonClick}>Fetch123</button>
      {renderList()}
    </div>
  );
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos };
};

export const App = connect(mapStateToProps, { fetchTodos })(_App);
