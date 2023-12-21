export function useAuth() {
  let isAuthenticated = false;
  let isLoading = true;
  return { isAuthenticated, isLoading };
}
