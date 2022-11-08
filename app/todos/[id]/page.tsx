import { Todo } from "../../../interfaces";

const getTodo = async( todoId: number ):Promise<Todo> => {

    const res = await fetch(`http://localhost:3001/todos/${ todoId }`,{
        next: { revalidate: 60 }
    });

    return await res.json() as Todo;
}




interface Props {
    params: {
        id: string;
    }
}

export default async function TodoPage({ params }: Props) {

    const todo = await getTodo( +params.id );


    return (
        <div className="row">
            <div className="col-6">
                <h1>Todo: { todo.id }</h1>
                <code>{ JSON.stringify(todo) }</code>
            </div>
        </div>
    )
}