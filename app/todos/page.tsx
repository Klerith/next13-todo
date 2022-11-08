import Link from "next/link";
import { FC } from "react";
import { Todo } from "../../interfaces"


const getTodos = async():Promise<Todo[]> => {

    const res = await fetch('http://localhost:3001/todos', {
        cache: 'no-store',
    });

    return await res.json() as Todo[];
}




export default async function TodosPage() {

    const todos = await getTodos();

    return (
        <div className="row">
            <div className="col-6">
                <h1>Todos Page</h1>

                <ul className="list-group">
                    {
                        todos.map( todo => (
                            <TodoItem key={ todo.id } todo={ todo } />
                        ))
                    }
                </ul>

            </div>
        </div>
    )
}


interface Props {
    todo: Todo;
}

const TodoItem: FC<Props> = ({ todo }) => {

    return (
        <Link href={`/todos/${ todo.id }`}>
            <li className="list-group-item">
                { todo.description }
            </li>
        </Link>
    )
}