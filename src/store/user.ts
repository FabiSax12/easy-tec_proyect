import {create} from "zustand"

interface Semestre {
  title: string;
  id: string;
  startDate: string;
  endDate: string;
}

interface User {
  name: string;
  carrier: string;
  avatarImageURL: string;
  notifications: number;
  semestres: Semestre[];
  addSemester: (semestre: Semestre) => void;
}

const useUserInfo = create<User>((set, get) => ({
  name: "Fabián Vargas",
  carrier: "Ingeniería en Computación",
  avatarImageURL: "https://i.pravatar.cc/150?u=a04258114e29026702d",
  notifications: 2,
  semestres: [
    { title: "Semestre 1", id: "S-1", startDate: "05 Feb 2024", endDate: "31 May 2024" },
    { title: "Semestre 2", id: "S-2", startDate: "05 Feb 2024", endDate: "31 May 2024" },
  ],

  addSemester: (semestre) =>
    set((state) => ({
      semestres: [...state.semestres, semestre],
    })),
}));

export default useUserInfo