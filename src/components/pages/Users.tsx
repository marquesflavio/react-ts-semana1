import { useUsers } from "../../hooks/useUsers"

interface UserProp {
  id: number;
  nome: string;
  email: string;
  endereco?: string;
}

export function Users(){
    const { users,
        isPending,
        isError,
        error,} = useUsers();

        
  if (isPending) return <p>Carregando usuários...</p>;
  if (isError) return <p>Erro: {error?.message}</p>;

    return (
        <ul>
          {users?.map((user: UserProp) => (
            <li key={user.id}>
              <p>ID: {user.id}</p>
              <p>Nome: {user.nome}</p>
              <p>Email: {user.email}</p>
              <p>Endereço: {user.endereco}</p>
            </li>
          ))}
        </ul>
    )
}