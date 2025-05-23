export const useSidebar = () => {
  const isSidebarOpen = useState("isSidebarOpen", () => false);
  const toggleSidebar = () => (isSidebarOpen.value = !isSidebarOpen.value);

  return {
    isSidebarOpen,
    toggleSidebar,
  };
};
