import { Response, Request } from "https://deno.land/x/oak@v10.5.1/mod.ts";
import { User } from "../interface/user.interface.ts";
import { v4 } from "https://deno.land/std@0.133.0/uuid/mod.ts";

let users: User[] = [
  {
    id: "1",
    name: "Matias",
  },
];

export const getUsers = ({ response }: { response: Response }) => {
  response.body = {
    message: "succesufull query",
    users,
  };
};

export const getUser = ({
  response,
  params,
}: {
  response: Response;
  params: { id: string };
}) => {
  const userFound = users.find((user) => user.id === params.id);
  if (userFound) {
    response.status = 200;
    (response.body = { message: "Usuario encontrado", userFound });
  } else {
    response.status = 404;
    response.body = { message: "usuario NO ENCONTRADO" };
  }
};

export const createUsers = async ({
  request,
  response,
}: {
  response: Response;
  request: Request;
}) => {
  const body = await request.body();

  if (!request.hasBody) {
    response.status = 404;
    response.body = { message: "Los datos son requeridos" };
  } else {
    const newUser: User = await body.value;
    newUser.id = crypto.randomUUID();

    users.push(newUser);

    response.status = 200;
    response.body = { message: "usuario creado", users };
  }
};

export const deleteUser = ({
  response,
  params,
}: {
  response: Response;
  params: { id: string };
}) => {
  users = users.filter(user=>user.id !== params.id);
  response.status=200;
  response.body={message:"Usuario eliminado", users}
};

