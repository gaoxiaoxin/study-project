import { defineStore } from 'pinia';

import { ref } from 'vue';

type TUser = {
  name: string;
  age: number;
  sex: string;
};

export const useUserStore = defineStore('user', () => {
  const users: TUser[] = [];
  const addUser = (user: TUser) => {
    users.push(user);
  };
  return { users, addUser };
});
