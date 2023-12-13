// store.ts

import {create} from "zustand";

// UserStore type and useUserStore definition
type UserStore = {
  user: null | User;
  loading: boolean;
  setUser: (user: User | null) => void;
  clearUser: () => void;
  logout: () => void;
  startLoading: () => void;
  stopLoading: () => void;
};

type User = {
  _id: number;
  name: string;
  email: string;
  token: string;
};

const useUserStore = create<UserStore>((set) => {
  const storedUser = localStorage.getItem("user");
  const initialUser = storedUser ? JSON.parse(storedUser) : null;

  return {
    user: initialUser,
    loading: false,

    setUser: (user) => {
      set({ user });
      localStorage.setItem("user", JSON.stringify(user));
    },

    clearUser: () => {
      set({ user: null });
      localStorage.removeItem("user");
    },

    logout: () => {
      set({ user: null });
      localStorage.removeItem("user");
    },

    startLoading: () => {
      set({ loading: true });
    },

    stopLoading: () => {
      set({ loading: false });
    },
  };
});

// ColorModeStore type and useColorMode definition
type ColorModeStore = {
  colorChange: 'light' | 'dark';
  setColorChange: (mode: 'light' | 'dark') => void;
};

const useColorChange = create<ColorModeStore>((set) => ({
  colorChange: 'light',
  setColorChange: (mode) => set({ colorChange: mode }),
}));

// Export both stores separately
export { useUserStore, useColorChange };
