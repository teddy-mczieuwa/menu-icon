const MenuIcon = {
  emits: ["trigger"],
  setup(_, { slots, emit }) {
    const toggle = () => {
      emit("trigger");
    };
    return () => (slots.default ? slots.default({ toggle }) : []);
  },
};
export default MenuIcon;
