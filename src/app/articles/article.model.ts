export interface Article {
  id: string;
  name: string;
  __typename: string;
}

export interface RemoveResponse {
  data: {
    removeUser: any
  };
}

export interface AddResponse {
  data: {
    addUser: any
  };
}
