import {create} from "zustand"
import {persist} from "zustand/middleware"

interface Semestre {
  title: string;
  id: string;
  startDate: string;
  endDate: string;
}

interface NewUser {
  id: number;
  email: string;
  name: string;
  lastname: string;
}

interface User extends NewUser {
  carrier: string | null;
  avatarImageURL: string | null;
  notifications: number;
  semestres: Semestre[];
  addSemester: (semestre: Semestre) => void;
  setUser: (newUser: NewUser) => void
  signOut: () => void
}

const useUserInfo = create(
  persist<User>((set, get) => ({
    id: 0,
    email: "",
    name: "",
    lastname: "",
    carrier: null,
    avatarImageURL: null,
    notifications: 0,
    semestres: [],

    addSemester: (semestre) => set((state) => ({
      semestres: [...state.semestres, semestre],
    })),

    setUser: (newUser) => set((state) => ({
      ...state,
      id: newUser.id,
      email: newUser.email,
      name: newUser.name,
      lastname: newUser.lastname
    })),

    signOut: () => set((state) => ({
      ...state,
      id: 0,
      email: "",
      name: "",
      lastname: "",
      carrier: null,
      avatarImageURL: null,
      notifications: 0,
      semestres: [],
    }))
  }), {name: "user"})
);

export default useUserInfo